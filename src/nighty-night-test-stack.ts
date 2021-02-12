import { AutoScalingGroup } from '@aws-cdk/aws-autoscaling';
import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { NightyNightForAsg } from './asg';

export class NightyNightTestStack extends Stack {

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const asg = AutoScalingGroup.fromAutoScalingGroupName(this, 'asg', 'dev-v1app-appasgASGE5B53758-1IWON4QLBGIUP');
    new NightyNightForAsg(this, 'nighty-night', { autoScalingGroup: asg, desiredCapacity: 0 });
  }
}
