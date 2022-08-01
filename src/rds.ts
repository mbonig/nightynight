import { Arn, ArnFormat, Stack } from 'aws-cdk-lib';
import { CronOptions, Rule, RuleTargetInput, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import * as statement from 'cdk-iam-floyd';
import { Construct } from 'constructs';
import { NightyNightForRdsFunction } from './functions/NightyNightForRds-function';
import { WakeyWakeyForRdsFunction } from './functions/WakeyWakeyForRds-function';

/**
 * Props for the NightNight construct.
 */
export interface NightyNightForRdsProps {
  /**
   * An option CronOptions to specify the time of day to stop the instance.
   *
   * @default {
      day: '*',
      hour: '4',
      minute: '0'
    }
   */
  readonly schedule?: CronOptions;
  /**
   * the DBInstanceIdentifier of the RDS instance you'd like stopped.
   */
  readonly dbInstanceIdentifier: string;
}


/**
 * A construct that will build a Lambda and a CloudWatch Rule (cron schedule)
 * that will stop the given rds instance at the specified time.
 *
 * Typically used when you've got rds instances that you only need during business hours
 * and want to reduce the costs of.
 */
export class NightyNightForRds extends Construct {
  constructor(scope: Construct, id: string, props: NightyNightForRdsProps) {
    super(scope, id);
    const lambda = new NightyNightForRdsFunction(this, 'handler', {
      environment: {
        DB_INSTANCE_IDENTIFIER: props.dbInstanceIdentifier,
      },
    });

    lambda.addToRolePolicy(new statement.Rds().allow().toDescribeDBInstances());

    lambda.addToRolePolicy(new statement.Rds().allow().toStopDBInstance().on(Arn.format({
      resourceName: props.dbInstanceIdentifier,
      resource: 'db',
      arnFormat: ArnFormat.COLON_RESOURCE_NAME,
      service: 'rds',
    }, Stack.of(this))));

    let schedule = props.schedule || {
      day: '*',
      hour: '4',
      minute: '0',
    };
    const rule = new Rule(this, 'rule', {
      schedule: Schedule.cron(schedule),
    });

    rule.addTarget(new LambdaFunction(lambda, {
      event: RuleTargetInput.fromObject({}),
    }));
  }
}


/**
 * Props for the WakeyWakeyForRds construct.
 */
export interface WakeyWakeyForRdsProps {
  /**
   * An option CronOptions to specify the time of day to start the instance.
   *
   * @default {
      day: '*',
      hour: '4',
      minute: '0'
    }
   */
  readonly schedule?: CronOptions;
  /**
   * the DBInstanceIdentifier of the RDS instance you'd like started.
   */
  readonly dbInstanceIdentifier: string;
}


/**
 * A construct that will build a Lambda and a CloudWatch Rule (cron schedule)
 * that will start the given rds instance at the specified time.
 *
 * Typically used when you've got rds instances that you only need during business hours
 * and want to reduce the costs of.
 */
export class WakeyWakeyForRds extends Construct {
  constructor(scope: Construct, id: string, props: WakeyWakeyForRdsProps) {
    super(scope, id);
    const lambda = new WakeyWakeyForRdsFunction(this, 'handler', {
      environment: {
        DB_INSTANCE_IDENTIFIER: props.dbInstanceIdentifier,
      },
    });

    lambda.addToRolePolicy(new statement.Rds().allow().toDescribeDBInstances());

    lambda.addToRolePolicy(new statement.Rds().allow().toStartDBInstance().on(Arn.format({
      resourceName: props.dbInstanceIdentifier,
      resource: 'db',
      arnFormat: ArnFormat.COLON_RESOURCE_NAME,
      service: 'rds',
    }, Stack.of(this))));

    let schedule = props.schedule || {
      day: '*',
      hour: '4',
      minute: '0',
    };
    const rule = new Rule(this, 'rule', {
      schedule: Schedule.cron(schedule),
    });

    rule.addTarget(new LambdaFunction(lambda, {
      event: RuleTargetInput.fromObject({}),
    }));
  }
}
