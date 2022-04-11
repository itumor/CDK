
import { CfnCondition, CfnOutput, CfnParameter, Duration, Fn, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class CdkParametersStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const uploadBucketName = new CfnParameter(this, "uploadBucketName", {
            type: "String",
            description: "The name of the Amazon S3 bucket where uploaded files will be stored."
        });

        const bucketarchivedays = new CfnParameter(this, "bucketarchivedays", {
            type: "Number",
            description: "The name of the Amazon S3 bucket where uploaded files will be stored."
        });
/*
        const autoDeleteObjectscf = new CfnParameter(this, "autoDeleteObjectscf", {
            type: "String",
            allowedValues: ["true", "false"],
            description: "The name of the Amazon S3 bucket where uploaded files will be stored."
        });


  
        const autoDeleteObjectscondition = new CfnCondition(this, 'autoDeleteObjectscondition', {
            expression: Fn.conditionEquals(autoDeleteObjectscf.valueAsString, 'true'),
        });

        const autoDeleteObjectsboolean = Fn.conditionIf(autoDeleteObjectscondition.logicalId, true, false);
        */


        const bucket = new s3.Bucket(this, "mybucket",
            {
                bucketName: uploadBucketName.valueAsString,
                removalPolicy: RemovalPolicy.DESTROY,
              //  autoDeleteObjects: autoDeleteObjectsboolean.disambiguator,
                autoDeleteObjects: true,
                intelligentTieringConfigurations: [{
                    name: 'foo',
                    prefix: 'folder/name',
                    archiveAccessTierTime: Duration.days(bucketarchivedays.valueAsNumber),
                    deepArchiveAccessTierTime: Duration.days(180),
                    tags: [{ key: 'tagname', value: 'tagvalue' }]
                }],
            });


            new CfnOutput(this, 'autoDeleteObjects', { value: bucket.bucketName});


    }

}
