import { CfnParameter, Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as servicecatalog from 'aws-cdk-lib/aws-servicecatalog';

export class CdkservicecatalogProvisionedProductStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

      
        const cfnCloudFormationProvisionedProduct = new servicecatalog.CfnCloudFormationProvisionedProduct(this, 'MyCfnCloudFormationProvisionedProduct', /* all optional props */ {
      //    productId: 'prod-mh3qjb6aqevjm',
          productName: 'myproduct',
          provisionedProductName: 'myproduct',
          provisioningArtifactName: 'v1',
          provisioningParameters: [{
            key: 'uploadBucketName',
            value: 'new9449',
          },{
            key: 'bucketarchivedays',
            value: '150',
          },
          {
            key: 'BootstrapVersion',
            value: '/cdk-bootstrap/hnb659fds/version',
          }
        ],
        });

    }


    
}
