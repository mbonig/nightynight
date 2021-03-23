import '@aws-cdk/assert/jest';
import { AutoScalingGroup } from '@aws-cdk/aws-autoscaling';
import { InstanceClass, InstanceSize, InstanceType, MachineImage, Vpc } from '@aws-cdk/aws-ec2';
import { App, Stack } from '@aws-cdk/core';
import { NightyNightForAsg } from '../src';

describe('NightyNightForAsg', () => {
  test('has right lambda', async () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    // WHEN
    const asg = new AutoScalingGroup(stack, 'test-asg', {
      autoScalingGroupName: 'testing',
      instanceType: InstanceType.of(InstanceClass.T3A, InstanceSize.MEDIUM),
      machineImage: MachineImage.latestAmazonLinux(),
      vpc: new Vpc(stack, 'test-vpc', {}),
    });
    new NightyNightForAsg(stack, 'nightynight', { autoScalingGroup: asg, desiredCapacity: 1 });

    // THEN
    expect(stack).toHaveResourceLike('AWS::Lambda::Function', {
      Handler: 'index.handler',
      Role: {
        'Fn::GetAtt': [
          'nightynighthandlerServiceRoleECB6B915',
          'Arn',
        ],
      },
      Runtime: 'nodejs12.x',
      Environment: {
        Variables: {
          AUTO_SCALING_GROUP_NAME: {
            Ref: 'testasgASG3AC5B124',
          },
          DESIRED_CAPACITY: '1',
        },
      },
    });
  });

  test('overridden cron-options', () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    const asg = new AutoScalingGroup(stack, 'test-asg', {
      instanceType: InstanceType.of(InstanceClass.T3A, InstanceSize.MEDIUM),
      machineImage: MachineImage.latestAmazonLinux(),
      vpc: new Vpc(stack, 'test-vpc', {}),
    });

    // WHEN
    new NightyNightForAsg(stack, 'nightynight', {
      autoScalingGroup: asg,
      desiredCapacity: 1,
      schedule: {
        minute: '15',
        hour: '4',
      },
    });

    // THEN
    expect(stack).toHaveResourceLike('AWS::Events::Rule', {
      ScheduleExpression: 'cron(15 4 * * ? *)',
      State: 'ENABLED',
      Targets: [
        {
          Arn: {
            'Fn::GetAtt': [
              'nightynighthandler1D5E04E4',
              'Arn',
            ],
          },
          Id: 'Target0',
          Input: '{}',
        },
      ],
    });
  });
});


