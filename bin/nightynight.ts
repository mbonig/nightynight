#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { NightynightStack } from '../lib/nightynight-stack';

const app = new cdk.App();
new NightynightStack(app, 'NightynightStack');
