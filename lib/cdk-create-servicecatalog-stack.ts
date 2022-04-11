import { CfnParameter, Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';
import * as servicecatalog from '@aws-cdk/aws-servicecatalog-alpha';
import * as iam from 'aws-cdk-lib/aws-iam';

export class CdkservicecatalogStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const username = new CfnParameter(this, "username", {
            type: "String",
            description: "The Username to use the Product Service Catalog. "
        });


        const Portfolio = new servicecatalog.Portfolio(this, 'Portfolio', {
            displayName: 'MyFirstPortfolio',
            providerName: 'SCAdmin',
            description: 'Portfolio for a project',
            messageLanguage: servicecatalog.MessageLanguage.EN,
        });

        const product = new servicecatalog.CloudFormationProduct(this, 'MyFirstProduct', {
            productName: "myproduct",
            owner: "Product Owner",
            productVersions: [
                {
                    productVersionName: "v1",
                    cloudFormationTemplate: servicecatalog.CloudFormationTemplate.fromAsset(path.join(__dirname, 'cdk-Parameters.yaml')),
                },
            ],
        });

        Portfolio.addProduct(product);


        const user = iam.User.fromUserName(this, 'MyImportedUserByName', username.valueAsString);
        Portfolio.giveAccessToUser(user);


    }


}
