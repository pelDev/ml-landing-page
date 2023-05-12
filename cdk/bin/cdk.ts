#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LandingPageStack } from '../lib/cdk-stack';

const app = new cdk.App();
new LandingPageStack(app, 'MLWebsiteStack', {
  env: { account: "644722882308", region: "us-east-1" },
});