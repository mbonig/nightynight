import '@aws-cdk/assert/jest';
import { App, Stack } from '@aws-cdk/core';
import { WakeyWakeyForRds } from '../src';

describe('WakeyWakeyForRds', () => {
  test('has right lambda', async () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    // WHEN
    new WakeyWakeyForRds(stack, 'wakeywakey', { dbInstanceIdentifier: 'asdfasdfasdf' });

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
          DB_INSTANCE_IDENTIFIER: 'asdfasdfasdf',
          AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
      },
    });
  });

  test('overridden cron-options', () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    // WHEN
    new WakeyWakeyForRds(stack, 'wakeywakey', {
      dbInstanceIdentifier: 'asdfasdfasdf',
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
});


