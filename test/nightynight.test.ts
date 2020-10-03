import { App, Stack } from '@aws-cdk/core';
import { NightyNight } from '../src/nightynight';

// DEV NOTE: ignoring all tests for now. The code below doesn't actually work well.
// need to revisit.


test('default snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'test-stack');
  // WHEN
  new NightyNight(stack, 'nightynight', { instanceId: 'asdfasdfasdf' });

  // THEN
  expect(stack).toMatchSnapshot();
});

test('overriden cronoptions', () => {
  const app = new App();
  const stack = new Stack(app, 'test-stack');
  // WHEN
  new NightyNight(stack, 'nightynight', {
    instanceId: 'asdfasdfasdf',
    schedule: {
      minute: '15',
      hour: '4',
    },
  });

  // THEN
  expect(stack).toMatchSnapshot();
});
