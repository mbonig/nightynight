import { Construct, Stack, StackProps } from '@aws-cdk/core';
import { NightyNight } from './nightynight';

export class NightynightStack extends Stack {

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new NightyNight(this, 'nighty-night', { instanceId: 'i-123123123123' });
  }
}
