import { App } from '@aws-cdk/core';
import { NightyNightTestStack } from '../src/nighty-night-test-stack';

const app = new App();
new NightyNightTestStack(app, 'NightynightStack', {});

