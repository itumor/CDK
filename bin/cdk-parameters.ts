#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkParametersStack } from '../lib/cdk-parameters-stack';

const app = new cdk.App();
new CdkParametersStack(app, 'CdkParametersStack');
