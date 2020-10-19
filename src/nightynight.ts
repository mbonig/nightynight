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
export interface NightyNightProps {
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
   * the instanceId of the EC2 instance you'd like stopped.
   */
  readonly instanceId: string;
}


/**
 * A construct that will build a Lambda and a CloudWatch Rule (cron schedule)
 * that will stop the given ec2 instance at the specified time.
 *
 * Typically used when you've got ec2 instances that you only need during business hours
 * and want to reduce the costs of.
 */
export class NightyNight extends Construct {
  constructor(scope: Construct, id: string, props: NightyNightProps) {
    super(scope, id);
    const lambda = new NodejsFunction(this, 'handler', {
      entry: join(__dirname, 'nightynight.handler.ts'),
      runtime: Runtime.NODEJS_12_X,
      environment: {
        INSTANCE_ID: props.instanceId,
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
