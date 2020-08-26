import { CronOptions, Rule, RuleTargetInput, Schedule } from "@aws-cdk/aws-events";
import { Arn, Construct, Stack } from "@aws-cdk/core";
import { NodejsFunction } from "@aws-cdk/aws-lambda-nodejs";
import { join } from "path";
import { PolicyStatement } from "@aws-cdk/aws-iam";
import { LambdaFunction } from "@aws-cdk/aws-events-targets";

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
      entry: join(__dirname, 'nightynight.handler.js'),
      environment: {
        INSTANCE_ID: props.instanceId
      }
    });

    lambda.addToRolePolicy(new PolicyStatement({
      actions: ['ec2:DescribeInstances'],
      resources: ['*']
    }));

    lambda.addToRolePolicy(new PolicyStatement({
      actions: ['ec2:StopInstances'],
      resources: [Arn.format({
        resourceName: props.instanceId,
        resource: 'instance',
        service: 'ec2'
      }, Stack.of(this))]
    }));

    let schedule = props.schedule || {
      day: '*',
      hour: '4',
      minute: '0'
    };
    const rule = new Rule(this, 'rule', {
      schedule: Schedule.cron(schedule)
    });

    rule.addTarget(new LambdaFunction(lambda, {
      event: RuleTargetInput.fromObject({})
    }));
  }
}
