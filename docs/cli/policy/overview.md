# Overview

CloudQuery Policies brings policy-as-code to the CloudQuery ecosystem.

CQ Policies enables users to codify, version and run security, compliance and cost rules, using SQL as the query engine and [HCL as the logical layer](./language).

## Key Features

- **As-Code**: Get all the benefits of using "as-code" such as collaboration, re-use, version control.
- **CloudQuery Hub**: [Access](https://hub.cloudquery.io) official and community CloudQuery policies which you can use as is or customize to your needs. Also, share your own policies with on GitHub and publish them on CloudQuery Hub to get feedback the community.

## Getting Started

First you need to make sure you run the [`fetch`](../fetch/overview) command and your database is ingested with all your cloud assets configuration.

[CloudQuery policies](./language) can be stored on GitHub or locally and published on [CloudQuery Hub](https://hub.cloudquery.io) for easy discovery and documentation.

### Running Git Backed Policy

The following will run the policy hosted on [github.com/cloudquery-policies/aws-cis-1.2.0](https://github.com/cloudquery-policies/aws-cis-1.2.0) as the default host is GitHub.

```bash
cloudquery policy run cloudquery-policies/aws-cis-1.2.0
```

Other git hosting platforms can be used by passing full url, for example:

```bash
cloudquery policy download https://gitlab.com/<COMMUNITY_ORG>/<POLICY_NAME>.git
```

### Running local policy

To run a policy that is hosted locally you will need to add the following block to your `config.hcl`:

```hcl
policy "my-policy" {
  type = "local"
  source = "/path/to/policy"
  version = "v0.0.5"
}
```

Then run the following command:

```bash
cloudquery policy run
```

### Results

Scan results will show passed/failed queries and manual queries that just prints output without a pass/fail predicate.  

```
📋 AWS CIS v1.3.0 Results:

⚠️ Policy finished with warnings

	✓   1.1  AWS CIS 1.1 Avoid the use of 'root' account. Show used in last 30 days (Scored)                                               passed

	✓   1.2  AWS CIS 1.2 Ensure MFA is enabled for all IAM users that have a console password (Scored)                                     passed

	❌  1.3  AWS CIS 1.3 Ensure credentials unused for 90 days or greater are disabled (Scored)                                            failed
		❌  arn:aws:iam::XXXXXXXXXXXXXx:user/XXXXXXXXXXXXXx

		❌  arn:aws:iam::XXXXXXXXXXXXXx:user/XXXXXXXXXXXXXx

	❌  1.4  AWS CIS 1.4 Ensure access keys are rotated every 90 days or less                                                              failed
		❌  arn:aws:iam::XXXXXXXXXXXXXx:user/XXXXXXXXXXXXXx

		❌  arn:aws:iam::XXXXXXXXXXXXXx:user/XXXXXXXXXXXXXXx


	manual 1.7  AWS Public ELBV2
	+----------------------------+-------------------------------------------------------------------------+--------------+-----------+ 
	|            name            |                                dns_name                                 |  account_id  |  region   | 
	+----------------------------+-------------------------------------------------------------------------+--------------+-----------+ 
	| apigateway-xxx-integration | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.elb.us-east-1.amazonaws.com | xxxxxxxxxxxx | us-east-1 | 
	+----------------------------+-------------------------------------------------------------------------+--------------+-----------+ 
	| awseb-xxxxx-1Y07H683587FY  | xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.us-east-1.elb.amazonaws.com         | xxxxxxxxxxxx | us-east-1 | 
	+----------------------------+-------------------------------------------------------------------------+--------------+-----------+ 
	| elbv2-integration          | xxxxxxxxxxxxxxxxxxxxxxxxxxx.us-east-1.elb.amazonaws.com                 | xxxxxxxxxxxx | us-east-1 | 
	+----------------------------+-------------------------------------------------------------------------+--------------+-----------+ 
```

For every failed resource the following attributes are printed if found (in that order):
- `id`, `identifier`, `resource_idnetifier`, `uid`, `uuid`, `arn`

You can use the `--output-dir /path/to/` option to get the policies results in JSON format.

## What's next?

- [Learn](./language) how to write policy.
- [Learn](./configuration) how to configure and run multiple policies.
