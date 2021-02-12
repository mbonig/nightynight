import { join } from 'path';
import { IAutoScalingGroup } from '@aws-cdk/aws-autoscaling';
import { CronOptions, Rule, RuleTargetInput, Schedule } from '@aws-cdk/aws-events';
import { LambdaFunction } from '@aws-cdk/aws-events-targets';
import { Runtime } from '@aws-cdk/aws-lambda';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { Construct } from '@aws-cdk/core';
import * as statement from 'cdk-iam-floyd';

/**
 * Props for the NightNight construct.
 */
export interface NightyNightForAsgProps {
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
  readonly autoScalingGroup: IAutoScalingGroup;

  /**
   * Desired capacity
   */
  readonly desiredCapacity: number;
}


/**
 * A construct that will build a Lambda and a CloudWatch Rule (cron schedule)
 * that will set the given ASG's desired capacity.
 *
 * Typically used when you've got and ASG that you can scale during set hours.
 */
export class NightyNightForAsg extends Construct {
  constructor(scope: Construct, id: string, props: NightyNightForAsgProps) {
    super(scope, id);
    const lambda = new NodejsFunction(this, 'handler', {
      entry: join(__dirname, 'asg.handler.ts'),
      runtime: Runtime.NODEJS_12_X,
      environment: {
        AUTO_SCALING_GROUP_NAME: props.autoScalingGroup.autoScalingGroupName,
        DESIRED_CAPACITY: props.desiredCapacity.toString(),
      },
    });

    lambda.addToRolePolicy(new statement.Autoscaling().allow().toDescribeAutoScalingGroups());

    lambda.addToRolePolicy(new statement.Autoscaling().allow().toSetDesiredCapacity().on(props.autoScalingGroup.autoScalingGroupArn));

    let schedule = props.schedule || {
      day: '*',
      hour: '4',
      minute: '0',
    };
    const rule = new Rule(this, 'rule', {
      schedule: Schedule.cron(schedule),
    });

    rule.addTarget(
      new LambdaFunction(lambda, {
        event: RuleTargetInput.fromObject({}),
      }));
  }
}

