# Sources

You can define the policies you want to execute (both local and remote) in your `config.hcl` or policy block using the `source` attribute. This can be useful when executing multiple policies and running in the CI .

Policy `source` supports loading from a number of different source types, as listed below.

[Local paths](#local)

[CloudQuery Hub](#hub)

## Local

Local path references allow for running local policies or while developing new policies.

```
policy "local" {
  source = "./path/to/policy/directory"
}
```

A local path must begin with either ./ or ../ to indicate that a local path is intended, to distinguish it from a remote address.

Local paths are linked to your policy directory, via symlink, so any changes in the original path is automatically updated in your policy directory.


## Hub

The CloudQuery Hub lists available policy packs, which can be download by giving the policy name found there.

```
policy "aws" {
  source = "aws"
}
```

## GitHub

CloudQuery will recognize prefixed github.com URLs and interpret them automatically as Git repository sources.

```hcl
policy "aws" {
  source = "github.com/cloudquery-policies/aws"
}
```

The above will clone the repository with HTTPS. To clone using SSH, use the following form: `git@github.com:cloudquery-policies/aws.git"

### Generic Git Repository
Arbitrary Git repositories can be used by prefixing the address with the special `git::` prefix. After this prefix, any valid Git URL can be specified to select one of the protocols supported by Git.

For example, to use HTTPS or SSH:

```hcl
policy "aws" {
  source = "git::httsp://github.com/cloudquery-policies/aws.git"
}
```

Git repositories are cloned using the `git clone` command, so it will respect any local Git credentials that were already set in your system. To access private Git repoistories, configure your git with the suitable credentials for that repository.


:::tip 
Use SSH to access private Git repositories from automated systems because it allows access to private repositories without interactive prompts.
:::

### Selecting a Revision

By default, CloudQuery will clone the latest tagged version of the policy. You can override this using the `ref` or `@` query parameter. The value of the `ref` or `@` parameter can be any reference accepted by the `git checkout` command, such as as commit hash, tag name or branch. 

```hcl
policy "aws-with-tag" {
  source = "git::https://github.com/cloudquery-policies/aws.git?ref=v0.0.1"
}

policy "aws-with-commit-hash" {
  source = "github.com/cloudquery-policies/aws.git?ref=96886a4"
}


policy "aws-@-version" {
  source = "github.com/cloudquery-policies/aws@v0.1.0"
}
```

:::important

If you define the `source` attribute in your policy, adding more views/checks/policy blocks is not allowed.

:::