import '@aws-cdk/assert/jest';
import { App, Stack } from '@aws-cdk/core';
import { WakeyWakeyForEc2 } from '../src';

describe('WakeyWakey lambdas', () => {
  test('has right lambda', async () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    // WHEN
    new WakeyWakeyForEc2(stack, 'wakeywakey', { instanceId: 'asdfasdfasdf' });

    // THEN
    expect(stack).toHaveResourceLike('AWS::Lambda::Function', {
      Handler: 'index.handler',
      Role: {
        'Fn::GetAtt': [
          'wakeywakeyhandlerServiceRoleD2A85E64',
          'Arn',
        ],
      },
      Runtime: 'nodejs12.x',
      Environment: {
        Variables: {
          INSTANCE_ID: 'asdfasdfasdf',
          AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
      },
    });
  });
});


test('WakeyWakey overridden cron-options', () => {
  const app = new App();
  const stack = new Stack(app, 'test-stack');
  // WHEN
  new WakeyWakeyForEc2(stack, 'wakeywakey', {
    instanceId: 'asdfasdfasdf',
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
            'wakeywakeyhandlerF518780E',
            'Arn',
          ],
        },
        Id: 'Target0',
        Input: '{}',
      },
    ],
  });
});
