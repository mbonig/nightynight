import { Stack, StackProps } from 'aws-cdk-lib';
import { AutoScalingGroup } from 'aws-cdk-lib/aws-autoscaling';
import { Construct } from 'constructs';
import { NightyNightForAsg } from './asg';

export class NightyNightTestStack extends Stack {

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const asg = AutoScalingGroup.fromAutoScalingGroupName(this, 'asg', 'dev-v1app-appasgASGE5B53758-1IWON4QLBGIUP');
    new NightyNightForAsg(this, 'nighty-night', { autoScalingGroup: asg, desiredCapacity: 0 });
  }
}
