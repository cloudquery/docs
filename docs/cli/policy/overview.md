# Overview

CloudQuery CLI can be used to run policies on CloudQuery tables.

> **CloudQuery policies** - CloudQuery Policies feature brings policy-as-code to the CloudQuery ecosystem. CQ Policies enable users to codify, version and run security, governance, cost and compliance rules, using SQL as the query layer and HCL as the logical layer. Checkout more details in our [blog](https://www.cloudquery.io/blog/announcing-cloudquery-policies).

## Getting Started



### Downloading

First , you need to download a policy.
We can download a policy from the following locations:

1. CloudQuery Hub
2. Any community Git repository

We can use the following commands to download a policy:

`cloudquery policy download <POLICY_TO_DOWNLOAD>`

#### Examples

Download from CloudQuery [Hub](https://hub.cloudquery.io):

    cloudquery policy download <HUB_POLICY_NAME>

Download from community GitHub repository:

    cloudquery policy download <COMMUNITY_ORG>/<POLICY_NAME>


Download from any other Git repository:

    cloudquery policy download https://gitlab.com/<COMMUNITY_ORG>/<POLICY_NAME>.git

### Running

There are two ways to run a policy:

1. Using the CLI (Running a single policy)
2. Using CloudQuery config file (Running multiple policies)

#### Running using CLI

To run a single policy, we can use the following command:

Running policy from CloudQuery hub

    cloudquery policy run <HUB_POLICY_NAME>

Running policy from community GitHub repository

    cloudquery policy run <COMMUNITY_ORG>/<POLICY_NAME>

Running policy from any other VSC

    cloudquery policy run https://gitlab.com/<COMMUNITY_ORG>/<POLICY_NAME>.git

Available options:

| Option | Description |
| ------ | ----------- |
| --output-dir | Output directory for the policy results |
| --stop-on-failure | Stop execution on first failure |
| --fail-on-violation | Return non zero exit code if one of the policy is violated |
| --skip-versioning | Skip policy versioning and use latest files |
| --no-result | Do not show policies results |
| --sub-path | Forces the policy run command to only execute this sub policy/query |


#### Running using CloudQuery config file

To run a multiple policies, we can use the CloudQuery [config file](configuration.md).

To run all policies in the config file

    cloudquery policy run 

To run single policy from the config file

    cloudquery policy run --policy <POLICY_NAME>

Available options:

| Option | Description |
| ------ | ----------- |
| --policy | Name of the policy to run |
| --output-dir | Output directory for the policy results |
| --stop-on-failure | Stop execution on first failure |
| --fail-on-violation | Return non zero exit code if one of the policy is violated |
| --skip-versioning | Skip all policies versioning and use latest files |
| --no-result | Do not show policies results |

### Results
Scan results will look something like this:

```
📋 hub_policy_1 Results:

⚠️ Policy finished with warnings

	✓   1.1  AWS CIS 1.1 Avoid the use of 'root' account. Show used in last 30 days (Scored)                                               passed

	✓   1.2  AWS CIS 1.2 Ensure MFA is enabled for all IAM users that have a console password (Scored)                                     passed

	❌  1.3  AWS CIS 1.3 Ensure credentials unused for 90 days or greater are disabled (Scored)                                            failed
		❌  arn:aws:iam::XXXXXXXXXXXXXx:user/XXXXXXXXXXXXXx

		❌  arn:aws:iam::XXXXXXXXXXXXXx:user/XXXXXXXXXXXXXx

	❌  1.4  AWS CIS 1.4 Ensure access keys are rotated every 90 days or less                                                              failed
		❌  arn:aws:iam::XXXXXXXXXXXXXx:user/XXXXXXXXXXXXXx

		❌  arn:aws:iam::XXXXXXXXXXXXXx:user/XXXXXXXXXXXXXXx

	✓   1.5  AWS CIS 1.5  Ensure IAM password policy requires at least one uppercase letter                                                passed

	✓   1.6  AWS CIS 1.6  Ensure IAM password policy requires at least one lowercase letter                                                passed

	❌  1.7  AWS CIS 1.7  Ensure IAM password policy requires at least one symbol                                                          failed

	✓   1.8  AWS CIS 1.8  Ensure IAM password policy requires at least one number                                                          passed

	❌  1.9  AWS CIS 1.9 Ensure IAM password policy requires minimum length of 14 or greater                                               failed

	❌  1.10 AWS CIS 1.10 Ensure IAM password policy prevents password reuse                                                               failed

	❌  1.11 AWS CIS 1.11 Ensure IAM password policy expires passwords within 90 days or less                                              failed

	✓   1.12 AWS CIS 1.12  Ensure no root account access key exists (Scored)                                                               passed

	✓   1.13 AWS CIS 1.13 Ensure MFA is enabled for the 'root' account                                                                     passed

	❌  1.14 AWS CIS 1.14 Ensure hardware MFA is enabled for the 'root' account (Scored)                                                   failed

	❌  1.16 AWS CIS 1.16 Ensure IAM policies are attached only to groups or roles (Scored)                                                failed
		❌  arn:aws:iam::XXXXXXXXXX:user/XXXXXXXXXX

	✓   2.1  AWS CIS 2.1 Ensure CloudTrail is enabled in all regions                                                                       passed

	✓   2.2  AWS CIS 2.2 Ensure CloudTrail log file validation is enabled                                                                  passed

	✓   2.4  AWS CIS 2.4 Ensure CloudTrail trails are integrated with CloudWatch Logs                                                      passed

	✓   2.6  AWS CIS 2.6 Ensure S3 bucket access logging is enabled on the CloudTrail S3 bucket                                            passed

	✓   2.7  AWS CIS 2.7 Ensure CloudTrail logs are encrypted at rest using KMS CMKs                                                       passed

	❌  2.8  AWS CIS 2.8 Ensure rotation for customer created CMKs is enabled (Scored)                                                     failed
		❌  arn:aws:kms:us-east-1:XXXXXXXXX:key/XXXXXXXXXXXXXXXXX


	❌  2.9  AWS CIS 2.9 Ensure VPC flow logging is enabled in all VPCs (Scored)                                                           failed
		❌  vpc-XXXXXXXXXX

	❌  3.1  AWS CIS 3.1 Ensure a log metric filter and alarm exist for unauthorized API calls (Scored)                                    failed

	❌  3.2  AWS CIS 3.2 Ensure a log metric filter and alarm exist for Management Console sign-in without MFA (Scored)                    failed

	❌  3.3  AWS CIS 3.3  Ensure a log metric filter and alarm exist for usage of 'root' account (Score)                                   failed

	❌  3.4  AWS CIS 3.4 Ensure a log metric filter and alarm exist for IAM policy changes (Score)                                         failed

	❌  3.5  AWS CIS 3.5 Ensure a log metric filter and alarm exist for CloudTrail configuration changes (Scored)                          failed

	❌  3.6  AWS CIS 3.6 Ensure a log metric filter and alarm exist for AWS Management Console authentication failures (Scored)            failed

	❌  3.7  AWS CIS 3.7 Ensure a log metric filter and alarm exist for disabling or scheduled deletion of customer created CMKs (Scored)  failed

	❌  3.8  AWS CIS 3.8 Ensure a log metric filter and alarm exist for S3 bucket policy changes (Scored)                                  failed

	❌  3.9  AWS CIS 3.9 Ensure a log metric filter and alarm exist for AWS Config configuration changes (Scored)                          failed

	❌  3.10 AWS CIS 3.10 Ensure a log metric filter and alarm exist for security group changes (Scored)                                   failed

	❌  3.11 AWS CIS 3.11 Ensure a log metric filter and alarm exist for changes to Network Access Control Lists (NACL) (Scored)           failed

	❌  3.12 AWS CIS 3.12 Ensure a log metric filter and alarm exist for changes to network gateways (Scored)                              failed

	❌  3.13 AWS CIS 3.13 Ensure a log metric filter and alarm exist for route table changes (Scored)                                      failed

	❌  3.14 AWS CIS 3.14 Ensure a log metric filter and alarm exist for VPC changes (Scored)                                              failed

	❌  4.1  AWS CIS 4.1 Ensure no security groups allow ingress from 0.0.0.0/0 to port 22 (Scored)                                        failed

	❌  4.2  AWS CIS 4.2 Ensure no security groups allow ingress from 0.0.0.0/0 to port 3389 (Scored)                                      failed

	❌  4.3  AWS CIS 4.3  Ensure the default security group of every VPC restricts all traffic (Scored)                                    failed
```

### Result

You can use the `--output-dir /path/to/` option to get the policies results in JSON format.