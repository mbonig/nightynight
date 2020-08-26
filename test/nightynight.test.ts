/*
import * as cdk from '@aws-cdk/core';
import { Stack } from '@aws-cdk/core';
import { NightyNight } from "../lib/nightynight";
*/

// DEV NOTE: ignoring all tests for now. The code below doesn't actually work well.
// need to revisit.

/*

test('default snapshot', () => {
  const app = new cdk.App();
  const stack = new Stack(app, 'test-stack');
  // WHEN
  new NightyNight(stack, 'nightynight', {instanceId: 'asdfasdfasdf'});

  // THEN
  expect(stack).toMatchSnapshot();
});

test('overriden cronoptions', () => {
  const app = new cdk.App();
  const stack = new Stack(app, 'test-stack');
  // WHEN
  new NightyNight(stack, 'nightynight', {
    instanceId: 'asdfasdfasdf', schedule: {
      minute: '15',
      hour: '4'
    }
  });

  // THEN
  expect(stack).toMatchSnapshot();
});
*/
