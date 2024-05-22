import { IAutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
import { CronOptions, Rule, RuleTargetInput, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { Autoscaling } from 'cdk-iam-floyd/lib/generated';
import { Construct } from 'constructs';
import { NightyNightForAsgFunction } from './functions/NightyNightForAsg-function';

/**
 * Props for the NightNight construct.
 */
export interface NightyNightForAsgProps {
  /**
   * An option CronOptions to specify the time of day to scale.
   *
   * @default {
      day: '*',
      hour: '4',
      minute: '0'
    }
   */
  readonly schedule?: CronOptions;

  /**
   * the AutoScalingGroup you'd like to change the instance count on.
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
    const lambda = new NightyNightForAsgFunction(this, 'handler', {
      environment: {
        AUTO_SCALING_GROUP_NAME: props.autoScalingGroup.autoScalingGroupName,
        DESIRED_CAPACITY: props.desiredCapacity.toString(),
      },
    });

    lambda.addToRolePolicy(new Autoscaling().allow().toDescribeAutoScalingGroups());

    lambda.addToRolePolicy(new Autoscaling().allow().toSetDesiredCapacity().on(props.autoScalingGroup.autoScalingGroupArn));

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

