# Welcome to your CDK TypeScript project

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CdkParametersStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

# CdkParametersStack
* `cdk deploy CdkParametersStack  --parameters uploadBucketName=uploadbucket90607 --parameters bucketarchivedays=150 --require-approval never`
* `cdk destroy CdkParametersStack -f` 
* `cdk synth  CdkParametersStack   > ./lib/cdk-Parameters.yaml`

# CdkservicecatalogStack
* `cdk synth  CdkParametersStack   > ./lib/cdk-Parameters.yaml`
* `cdk deploy CdkservicecatalogStack  --parameters username=EndUser  --require-approval never`
* `cdk deploy CdkservicecatalogStack  --parameters username=cdk-workshop  --require-approval never`
* `cdk destroy  CdkservicecatalogStack -f`  

# CdkOpenSearchStack
* `cdk deploy CdkOpenSearchStack  --parameters masterNodes=2 --parameters dataNodes=2 --parameters volumeSize=10  --require-approval never`
* `cdk destroy CdkOpenSearchStack -f` 
* `cdk synth  CdkOpenSearchStack   > ./lib/cdk-OpenSearchStack.yaml`

# CdkservicecatalogProvisionedProductStack
* `cdk synth  CdkservicecatalogProvisionedProductStack   > ./lib/cdk-servicecatalogProvisionedProductStack.yaml`
* `cdk destroy CdkservicecatalogProvisionedProductStack -f`
* `cdk deploy CdkservicecatalogProvisionedProductStack    --require-approval never`


# destroy All
* `cdk destroy CdkParametersStack -f  && cdk destroy CdkservicecatalogProvisionedProductStack -f && cdk destroy CdkOpenSearchStack -f  && cdk destroy CdkservicecatalogStack -f`  


# servicecatalog products list
* `aws servicecatalog search-products  --filters FullTextSearch=myproduct`

* `aws servicecatalog provision-product \`
    `--product-name "myproduct" \`
    `--provisioning-artifact-name "v1" \`
    `--provisioned-product-name "myproduct" \`
    `--provisioning-parameters  Key=uploadBucketName Value=bucket99261 Key=bucketarchivedays Value=150 Key=BootstrapVersion Value=/cdk-bootstrap/hnb659fds/version`

  provisioningParameters: [{
            key: 'uploadBucketName',
            value: 'Bucket99261',
          },{
            key: 'bucketarchivedays',
            value: '150',
          },
          {
            key: 'BootstrapVersion',
            value: '/cdk-bootstrap/hnb659fds/version',
          }

* `aws servicecatalog describe-provisioning-parameters \`
* `--product-id prod-mh3qjb6aqevjm \`
* `--provisioning-artifact-name "v1"`
* `aws servicecatalog  search-provisioned-products   --filters FullTextSearch=myproduct`
* `aws servicecatalog  search-provisioned-products   > out.json`   