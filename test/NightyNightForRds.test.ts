import '@aws-cdk/assert/jest';
import { App, Stack } from '@aws-cdk/core';
import { NightyNightForRds } from '../src';

describe('NightyNightForRds', () => {
  test('has right lambda', async () => {
    const app = new App();
    const stack = new Stack(app, 'test-stack');
    // WHEN
    new NightyNightForRds(stack, 'nightynight', { dbInstanceIdentifier: 'asdfasdfasdf' });

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
    new NightyNightForRds(stack, 'nightynight', {
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


