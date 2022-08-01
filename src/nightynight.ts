import { App } from 'aws-cdk-lib';
import { NightyNightTestStack } from './nighty-night-test-stack';

const app = new App();
new NightyNightTestStack(app, 'NightynightStack', {});

