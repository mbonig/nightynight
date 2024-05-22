import { ICluster } from 'aws-cdk-lib/aws-ecs';
import { CronOptions, Rule, RuleTargetInput, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { Ecs } from 'cdk-iam-floyd/lib/generated';
import { Construct } from 'constructs';
import { NightyNightForEcsFunction } from './functions/NightyNightForEcs-function';
import { CLUSTER_NAME_KEY, DESIRED_CAPACITY_KEY, SERVICE_NAME_KEY } from './functions/NightyNightForEcs.lambda';

const DEFAULT_CLUSTER_NAME = 'default';


/**
 * Props for the NightNight construct.
 */
export interface NightyNightForEcsProps {
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
   * The ECS Cluster where the service resides.
   *
   * @default 'default'
   */
  readonly cluster?: ICluster;

  /**
   * The service name to update
   */
  readonly serviceName: string;

  /**
   * Desired capacity
   */
  readonly desiredCapacity: number;
}


/**
 * A construct that will build a Lambda and a CloudWatch Rule (cron schedule)
 * that will set the given ECS Service's desired capacity.
 *
 * Typically, used when you've got an ECS Service that you can scale during set hours.
 */
export class NightyNightForEcs extends Construct {
  constructor(scope: Construct, id: string, props: NightyNightForEcsProps) {
    super(scope, id);
    const lambda = new NightyNightForEcsFunction(this, 'handler', {
      environment: {
        [CLUSTER_NAME_KEY]: props.cluster?.clusterName ?? DEFAULT_CLUSTER_NAME,
        [SERVICE_NAME_KEY]: props.serviceName,
        [DESIRED_CAPACITY_KEY]: props.desiredCapacity.toString(),
      },
    });

    lambda.addToRolePolicy(new Ecs().allow()
      .toUpdateService()
      .onService(props.cluster?.clusterName ?? DEFAULT_CLUSTER_NAME, props.serviceName));

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

