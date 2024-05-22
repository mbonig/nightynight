import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { WakeyWakeyForRds } from '../src';

describe('WakeyWakeyForRds', () => {
  test('has right lambda', async () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    // WHEN
    new WakeyWakeyForRds(stack, 'wakeywakey', { dbInstanceIdentifier: 'asdfasdfasdf' });

    // THEN
    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::Lambda::Function', {
      Handler: 'index.handler',
      Role: {
        'Fn::GetAtt': [
          'wakeywakeyhandlerServiceRoleD2A85E64',
          'Arn',
        ],
      },
      Runtime: 'nodejs18.x',
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
    const assert = Template.fromStack(stack);
    assert.hasResourceProperties('AWS::Events::Rule', {
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


