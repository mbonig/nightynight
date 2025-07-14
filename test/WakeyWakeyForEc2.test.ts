import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { WakeyWakeyForEc2 } from '../src';

describe('WakeyWakey lambdas', () => {
  test('has right lambda', async () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    // WHEN
    new WakeyWakeyForEc2(stack, 'wakeywakey', { instanceId: 'asdfasdfasdf' });

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
      Runtime: 'nodejs22.x',
      Environment: {
        Variables: {
          INSTANCE_ID: 'asdfasdfasdf',
          INSTANCE_FILTERS: '',
          AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
      },
    });
  });
  test('has right lambda for tags', async () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    let filters = [
      {
        Name: 'STRING_VALUE',
        Values: [
          'STRING_VALUE',
          /* more items */
        ],
      },
      /* more items */
    ];

    // WHEN
    new WakeyWakeyForEc2(stack, 'wakeywakey', { instanceId: '', filters });

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
      Runtime: 'nodejs22.x',
      Environment: {
        Variables: {
          INSTANCE_ID: '',
          INSTANCE_FILTERS: JSON.stringify(filters),
          AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
      },
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
