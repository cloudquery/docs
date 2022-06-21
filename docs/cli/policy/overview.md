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

The following will run the policy hosted on [github.com/cloudquery-policies/aws](https://github.com/cloudquery-policies/aws).

```bash
cloudquery policy run github.com/cloudquery-policies/aws
```

CloudQuery will always download the latest tag of the policy if no specific tag/commit/branch is defined, you can set a specific branch using `@` or `?ref=<tag/branch/commit-hash>` to your `source` URL. Examples:

```bash
cloudquery policy run github.com/cloudquery-policies/aws@v0.1.0
```

```bash
cloudquery policy run github.com/cloudquery-policies/aws?ref=v0.1.0
```

To run policies from other sources check the following [page](./sources).

#### Running sub-policies

Some policies are built as packs and only specific sub-policies are relevant for us, we can specify sub-policies with `//` path dominator in our `source` argument.

```bash
cloudquery policy run github.com/cloudquery-policies/aws//cis_v1.2.0
```

You can also run a specific check - for example if we want to run a IAM check in cis_v1.2.0:

```bash
cloudquery policy run github.com/cloudquery-policies/aws//cis_v1.2.0/1/1.9
```

will run the `1.9` check under section 1 policy of cis v1.2.0.

#### Running local-policies

To run a policy that's located on your local filesystem, you can pass the path to the policy as the argument to `policy run`.

```bash
cloudquery policy run path\to\policy
```

You can use either a relative path or an absolute path.

:::tip important
When specifying a local policy, you must specify the path to a **directory**.
This directory must contain a valid policy file named `policy.hcl`. See also the [tutorial](https://docs.cloudquery.io/docs/tutorials/policies/writing-your-first-policy) on local policies.
:::

### Results

Scan results will show passed/failed queries and manual queries that just print output without a pass/fail predicate.  

```bash
📋 AWS CIS v1.3.0 Results:

⚠️ Policy finished with warnings

Starting policies run...

✓ policy "aws" -  policy run complete -     4s [==============================================================|  Finished Checks: 39/39

📋 aws//cis_v1.2.0 Results:

⚠️ Policy finished with violations

Passed: Policy 1.1 - Avoid the use of 'root' account. Show used in last 30 days (Scored)

Failed: Policy 1.2 - Ensure MFA is enabled for all IAM users that have a console password (Scored)

  STATUS    | ACCOUNT ID   | REASON                         | ARN                                      | PASSWORD LAST USED            | USER NAME | MFA ACTIVE
------------+--------------+--------------------------------+------------------------------------------+-------------------------------+-----------+-------------
  Violation | 615xxxxxxxxx | MFA is disabled for user       | arn:aws:iam::615xxxxxxxxx:user/test-user | 2022-04-07 18:31:35 +0000 UTC | test-user | false
            |              | test-user                      |                                          |                               |           |
------------+--------------+--------------------------------+------------------------------------------+-------------------------------+-----------+-------------
                                                                                                                                         TOTAL:    | 1
                                                                                                                                       ------------+-------------


Passed: Policy 1.3 - Ensure credentials unused for 90 days or greater are disabled (Scored)

Passed: Policy 1.4 - Ensure access keys are rotated every 90 days or less

Failed: Policy 1.5 -  Ensure IAM password policy requires at least one uppercase letter

  STATUS    | ACCOUNT ID   | REASON
------------+--------------+---------------------------------
  Violation | 615xxxxxxxxx | Require uppercase in password
            |              | policy is not set to true
------------+--------------+---------------------------------
              TOTAL:       | 1
            ---------------+---------------------------------
```

You can use the `--output-dir /path/to/` option to get the policies results in JSON format.

## What's next?

- [Learn](./language) how to write policy.
- [Learn](./sources) how to run policies from different sources.
