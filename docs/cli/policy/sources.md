# Sources

When running a policy with `cloudquery policy run`, you can choose from several options, including a remote policy (cloudquery-hub or github), or

## Hub

You can run policies from the official [cloudquery hub](https://hub.cloudquery.io/policies) by simply specifying their name:

```bash
cloudquery policy run aws # Also accepts: "gcp", "azure", "k8s"
```

## Local

Local path references allow for running local policies or while developing new policies.

```bash
cloudquery policy run "./path/to/policy/directory"
```

A local path can be supplied either with a full path or a relative path.

:::tip important
When specifying a local policy, you must specify the path to a **directory**.
This directory must contain a valid policy file named `policy.hcl`.
See also the [tutorial](https://docs.cloudquery.io/docs/tutorials/policies/policies-overview) on custom policies.
:::

## GitHub

CloudQuery will recognize prefixed github.com URLs and interpret them automatically as Git repository sources.

```bash
cloudquery policy run https://github.com/cloudquery-policies/aws
```

The above will clone the repository with HTTPS. To clone using SSH, use the following form: `git@github.com:cloudquery-policies/aws.git"

### Generic Git Repository

Arbitrary Git repositories can be used by prefixing the address with the special `git::` prefix. After this prefix, any valid Git URL can be specified to select one of the protocols supported by Git.

For example, to use HTTPS or SSH:

```bash
cloudquery policy run git::https://github.com/cloudquery-policies/aws.git
```

Git repositories are cloned using the `git clone` command, so it will respect any local Git credentials that were already set in your system. To access private Git repositories, configure your git with the suitable credentials for that repository.

:::tip
Use SSH to access private Git repositories from automated systems because it allows access to private repositories without interactive prompts.
:::

### Selecting a Revision

By default, CloudQuery will clone the latest tagged version of the policy.
You can override this using the `ref` or `@` query parameter.
The value of the `ref` or `@` parameter can be any reference accepted by the `git checkout` command, such as commit hash, tag name or branch.

```bash
cloudquery policy run "git::https://github.com/cloudquery-policies/aws.git?ref=v0.0.1"
cloudquery policy run "github.com/cloudquery-policies/aws.git?ref=96886a4"
cloudquery policy run "github.com/cloudquery-policies/aws@v0.1.0"
```
