import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Cluster } from 'aws-cdk-lib/aws-ecs';
import { NightyNightForEcs } from '../src/ecs';

describe('NightyNightForEcs', () => {
  function setupMockCluster(stack: Stack) {
    return Cluster.fromClusterAttributes(stack, 'MockCluster', {
      clusterName: 'some-cluster-name',
      securityGroups: [],
      vpc: Vpc.fromVpcAttributes(stack, 'MockVpc', {
        availabilityZones: ['us-east-1a'],
        vpcId: 'vpc-abcdefgh',
      }),

    });
  }

  test('has right lambda', async () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    // WHEN
    new NightyNightForEcs(stack, 'nightynight', {
      serviceName: 'some-service-name',
      cluster: setupMockCluster(stack),
      desiredCapacity: 1,
    });

    // THEN
    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
      Role: {
        'Fn::GetAtt': [
          'nightynighthandlerServiceRoleECB6B915',
          'Arn',
        ],
      },
      Runtime: 'nodejs22.x',
      Environment: {
        Variables: {
          CLUSTER_NAME: 'some-cluster-name',
          SERVICE_NAME: 'some-service-name',
          DESIRED_CAPACITY: '1',
          AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
      },
    });
  });

  test('overridden cron-options', () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');

    // WHEN
    new NightyNightForEcs(stack, 'nightynight', {
      serviceName: 'some-service-name',
      cluster: setupMockCluster(stack),
      desiredCapacity: 1,
      schedule: {
        minute: '15',
        hour: '4',
      },
    });

    // THEN
    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::Events::Rule', {
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


