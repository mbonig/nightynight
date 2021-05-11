import { join } from 'path';
import { CronOptions, Rule, RuleTargetInput, Schedule } from '@aws-cdk/aws-events';
import { LambdaFunction } from '@aws-cdk/aws-events-targets';
import { Runtime } from '@aws-cdk/aws-lambda';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { Arn, Construct, Stack } from '@aws-cdk/core';
import * as statement from 'cdk-iam-floyd';

/**
 * Props for the NightNight construct.
 */
export interface NightyNightForEc2Props {
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
   * the instanceId of the EC2 instance you'd like stopped. Must provide this if tags is not provided.
   */
  readonly instanceId?: string;

  /**
   * Filters to match to find an EC2 instance. Must provide this if instanceId is not provided. If instanceId is provided this
   * is ignored.
   */
  readonly filters?: any[];
}


/**
 * A construct that will build a Lambda and a CloudWatch Rule (cron schedule)
 * that will stop the given ec2 instance at the specified time.
 *
 * Typically used when you've got ec2 instances that you only need during business hours
 * and want to reduce the costs of.
 */
export class NightyNightForEc2 extends Construct {
  constructor(scope: Construct, id: string, props: NightyNightForEc2Props) {
    super(scope, id);
    const lambda = new NodejsFunction(this, 'handler', {
      entry: join(__dirname, 'NightyNightForEc2.handler.ts'),
      runtime: Runtime.NODEJS_14_X,
      environment: {
        INSTANCE_ID: props.instanceId ?? '',
        INSTANCE_FILTERS: props.filters ? JSON.stringify(props.filters) : '',
      },
    });

    lambda.addToRolePolicy(new statement.Ec2().allow().toDescribeInstances());

    lambda.addToRolePolicy(new statement.Ec2().allow().toStopInstances().on(Arn.format({
      resourceName: props.instanceId,
      resource: 'instance',
      service: 'ec2',
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


export interface NightyNightProps extends NightyNightForEc2Props {
}

/**
 * This class is deprecated, please use NightyNightForEc2
 *
 * @deprecated in favor of NightyNightForEc2
 */
export class NightyNight extends NightyNightForEc2 {
  constructor(scope: Construct, id: string, props: NightyNightProps) {
    super(scope, id, props);
  }
}


export interface WakeyWakeyForEc2Props {
  /**
   * An option CronOptions to specify the time of day to start the instance.
   *
   * @default {
      day: '*',
      hour: '12',
      minute: '0'
    }
   */
  readonly schedule?: CronOptions;
  /**
   * the instanceId of the EC2 instance you'd like started. If instanceId is provided the filters is ignored.
   */
  readonly instanceId?: string;

  /**
   * Filters to match to find an EC2 instance. Must provide this if instanceId is not provided. If instanceId is provided this
   * is ignored.
   *
   * @example [{
      Name: 'STRING_VALUE',
      Values: [
        'STRING_VALUE',
      ]
    }]
   */
  readonly filters?: any[];
}


/**
 * A construct that will build a Lambda and a CloudWatch Rule (cron schedule)
 * that will start the given ec2 instance at the specified time.
 *
 * Typically used when you've got ec2 instances that you only need during business hours
 * and want to reduce the costs of. Use in conjunction with the Nightynight construct at
 * @matthewbonig/nightynight
 */
export class WakeyWakeyForEc2 extends Construct {
  constructor(scope: Construct, id: string, props: WakeyWakeyForEc2Props) {
    super(scope, id);
    const lambda = new NodejsFunction(this, 'handler', {
      entry: join(__dirname, 'WakeyWakeyForEc2.handler.ts'),
      environment: {
        INSTANCE_ID: props.instanceId ?? '',
        INSTANCE_FILTERS: props.filters ? JSON.stringify(props.filters) : '',
      },
      runtime: Runtime.NODEJS_12_X,
    });

    lambda.addToRolePolicy(new statement.Ec2().allow().toDescribeInstances());
    lambda.addToRolePolicy(new statement.Ec2().allow().toStartInstances().on(Arn.format({
      resourceName: props.instanceId,
      resource: 'instance',
      service: 'ec2',
    }, Stack.of(this))));

    let schedule = props.schedule || {
      day: '*',
      hour: '12',
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
