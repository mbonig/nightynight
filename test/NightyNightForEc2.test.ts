import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { NightyNightForEc2 } from '../src';

describe('NightyNightForEc2', () => {
  test('has right lambda', async () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    // WHEN
    new NightyNightForEc2(stack, 'nightynight', { instanceId: 'asdfasdfasdf' });

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
      Runtime: 'nodejs18.x',
      Environment: {
        Variables: {
          INSTANCE_ID: 'asdfasdfasdf',
          INSTANCE_FILTERS: '',
          AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
      },
    });
  });

  test('Works with tags', () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    // WHEN
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
    new NightyNightForEc2(stack, 'nightynight', {
      filters: filters,
      schedule: {
        minute: '15',
        hour: '4',
      },
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
      Runtime: 'nodejs18.x',
      Environment: {
        Variables: {
          INSTANCE_ID: '',
          INSTANCE_FILTERS: JSON.stringify(filters),
          AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
        },
      },
    });
  });

  test('overridden cron-options', () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    // WHEN
    new NightyNightForEc2(stack, 'nightynight', {
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
