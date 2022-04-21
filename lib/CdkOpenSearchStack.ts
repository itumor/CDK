import { CfnParameter, Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import * as opensearch from 'aws-cdk-lib/aws-opensearchservice';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';


export class CdkOpenSearchStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const vpc = new ec2.Vpc(this, 'Vpc');
const domainProps: opensearch.DomainProps = {
  version: opensearch.EngineVersion.OPENSEARCH_1_0,
  removalPolicy: RemovalPolicy.DESTROY,
  vpc,
  // must be enabled since our VPC contains multiple private subnets.
  zoneAwareness: {
    enabled: true,
  },
  capacity: {
    // must be an even number since the default az count is 2.
    dataNodes: 3,
  },
};
new opensearch.Domain(this, 'Domain', domainProps);

/*
        const masterNodes = new CfnParameter(this, "masterNodes", {
            type: "Number",
            description: "The number of instances to use for the master node."
        });

        const dataNodes = new CfnParameter(this, "dataNodes", {
            type: "Number",
            description: "The number of data nodes (instances) to use in the Amazon OpenSearch Service domain."
        });

        const volumeSize = new CfnParameter(this, "volumeSize", {
            type: "Number",
            description: "The size (in GiB) of the EBS volume for each data node."
        });
        
      
        const availabilityZoneCount = 3;

        


        const prodDomain = new opensearch.Domain(this, 'Domain', {
            version: opensearch.EngineVersion.OPENSEARCH_1_0,
            //  enableVersionUpgrade: (enableVersionUpgrade.valueAsString =="true") , // defaults to false
            enableVersionUpgrade: true, // defaults to false
            
            enforceHttps: true,
            removalPolicy: RemovalPolicy.DESTROY,
            capacity: {
                masterNodes: masterNodes.valueAsNumber,
                dataNodes: dataNodes.valueAsNumber,
            },
            nodeToNodeEncryption: true,
            encryptionAtRest: {
                enabled: true,
            },
            fineGrainedAccessControl: {
                masterUserName: 'master-user',
            },
            ebs: {
                volumeSize: volumeSize.valueAsNumber,
                volumeType: ec2.EbsDeviceVolumeType.GENERAL_PURPOSE_SSD,
            },
            zoneAwareness: {
                availabilityZoneCount: availabilityZoneCount,
            },
            
            logging: {
                slowSearchLogEnabled: true,
                appLogEnabled: true,
                slowIndexLogEnabled: true,
                auditLogEnabled: true,
            },
  
        });

        const freeStorageSpace = prodDomain.metricFreeStorageSpace();
        const masterSysMemoryUtilization = prodDomain.metric('MasterSysMemoryUtilization');


        */
    }
    

}