"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmlnaHR5bmlnaHQudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5pZ2h0eW5pZ2h0LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0VBSUU7QUFFRixtRkFBbUY7QUFDbkYsbUJBQW1CO0FBRW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBCRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0IHsgTmlnaHR5TmlnaHQgfSBmcm9tIFwiLi4vbGliL25pZ2h0eW5pZ2h0XCI7XG4qL1xuXG4vLyBERVYgTk9URTogaWdub3JpbmcgYWxsIHRlc3RzIGZvciBub3cuIFRoZSBjb2RlIGJlbG93IGRvZXNuJ3QgYWN0dWFsbHkgd29yayB3ZWxsLlxuLy8gbmVlZCB0byByZXZpc2l0LlxuXG4vKlxuXG50ZXN0KCdkZWZhdWx0IHNuYXBzaG90JywgKCkgPT4ge1xuICBjb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuICBjb25zdCBzdGFjayA9IG5ldyBTdGFjayhhcHAsICd0ZXN0LXN0YWNrJyk7XG4gIC8vIFdIRU5cbiAgbmV3IE5pZ2h0eU5pZ2h0KHN0YWNrLCAnbmlnaHR5bmlnaHQnLCB7aW5zdGFuY2VJZDogJ2FzZGZhc2RmYXNkZid9KTtcblxuICAvLyBUSEVOXG4gIGV4cGVjdChzdGFjaykudG9NYXRjaFNuYXBzaG90KCk7XG59KTtcblxudGVzdCgnb3ZlcnJpZGVuIGNyb25vcHRpb25zJywgKCkgPT4ge1xuICBjb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuICBjb25zdCBzdGFjayA9IG5ldyBTdGFjayhhcHAsICd0ZXN0LXN0YWNrJyk7XG4gIC8vIFdIRU5cbiAgbmV3IE5pZ2h0eU5pZ2h0KHN0YWNrLCAnbmlnaHR5bmlnaHQnLCB7XG4gICAgaW5zdGFuY2VJZDogJ2FzZGZhc2RmYXNkZicsIHNjaGVkdWxlOiB7XG4gICAgICBtaW51dGU6ICcxNScsXG4gICAgICBob3VyOiAnNCdcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFRIRU5cbiAgZXhwZWN0KHN0YWNrKS50b01hdGNoU25hcHNob3QoKTtcbn0pO1xuKi9cbiJdfQ==