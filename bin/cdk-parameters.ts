#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkParametersStack } from '../lib/cdk-parameters-stack';
import { CdkservicecatalogStack } from '../lib/cdk-create-servicecatalog-stack';
import { CdkOpenSearchStack } from '../lib/CdkOpenSearchStack';
import { CdkservicecatalogProvisionedProductStack } from '../lib/cdk-create-servicecatalog-ProvisionedProduct-stack';


const app = new cdk.App();
new CdkParametersStack(app, 'CdkParametersStack');
new CdkservicecatalogStack(app, 'CdkservicecatalogStack');
new CdkOpenSearchStack(app, 'CdkOpenSearchStack');
new CdkservicecatalogProvisionedProductStack(app, 'CdkservicecatalogProvisionedProductStack')