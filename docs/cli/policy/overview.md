# Overview

CloudQuery Policies brings policy-as-code to the CloudQuery ecosystem.

CQ Policies enables users to codify, version and run security, compliance and cost rules, using SQL as the query engine and [HCL as the logical layer](./language).

## Key Features

- **As-Code**: Get all the benefits of using "as-code" such as collaboration, reuse, and version control.
- **CloudQuery Hub**: [Access](https://hub.cloudquery.io) official and community CloudQuery policies that you can use as-is or customize to your needs. Also, share your own policies on GitHub and publish them on CloudQuery Hub to get feedback from the community.

## Getting Started

First you need to make sure you run the [`fetch`](../fetch/overview) command and your database is ingested with all your cloud assets configuration.

[CloudQuery policies](./language) can be stored on GitHub or locally and published on [CloudQuery Hub](https://hub.cloudquery.io) for easy discovery and documentation.

### Running Policies

The following will run the policy hosted on [github.com/cloudquery-policies/aws](https://github.com/cloudquery-policies/aws) as the default host is GitHub.

```bash
cloudquery policy run github.com/cloudquery-policies/aws
```

Cloudquery will always download the latest tag of the policy if no specific tag/commit/branch is defined, you can set a specific branch using `@` or `?ref=<tag/branch/commit-hash>` to your `source` url. Examples:

```bash
cloudquery policy run github.com/cloudquery-policies/aws@v0.1.0
```

```bash
cloudquery policy run github.com/cloudquery-policies/aws?ref=v0.1.0
```

To run policies from other sources check the following [page](./sources).

#### Running sub-policies

Some policies are built as packs and only specific sub-policies are relevant for us, we can specificy sub-policies with `//` path dominator in our `source` argument.

```bash
cloudquery policy run github.com/cloudquery-policies/aws//cis_v1.2.0
```

You can also run a specific check - for example if we want to run a IAM check in cis_v1.2.0:

```bash
cloudquery policy run github.com/cloudquery-policies/aws//cis_v1.2.0/1/1.9
```

will run the `1.9` check under section 1 policy of cis v1.2.0.


### Policy configuration

To add policies to your `config.hcl` you can simply add `policy` blocks, you can either add inline policies or point to a policy by `source`.

```hcl
# ... CloudQuery and provider blocks here ...
// Policy Configurations
policy "aws-cis" {
  source = "github.com/cloudquery-policies/aws//cis_v1.2.0"
}
```

#### Running local-policies

To run a local policy that uses the [local source](./sources#local) you can set the policy in your `config.hcl` or pass the policy file path when executing `policy run` command as follows:

```bash
cloudquery policy run path\to\policy
```

You can use either a relative path or an absolute path. If you are configuring the local policy in your `config.hcl` it is advised to use relative paths, as absolute paths tend to couple your configuration to the filesystem layout of a particular computer.


### Results

Scan results will show passed/failed queries and manual queries that just print output without a pass/fail predicate.  

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
- [Learn](./sources) how to run policies from different sources.
