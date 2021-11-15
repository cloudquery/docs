# Configuration

To customize drifting features, edit the `drift` block in `config.hcl`.

## Default Block

The default block provided with `cloudquery init <provider>` looks something like:

```hcl
# ... cloudquery and provider blocks here ...
// Module Configurations
modules {
  // drift configuration block
  drift "drift-example" {
    // state block defines from where to access the state
    terraform {
      backend = "local" # "local" or "s3"
      files   = ["/path/to.tfstate"]
      /*
          bucket   = "<terraform state bucket>"
          keys     = ["<terraform state key>"]
          region   = "us-east-1"
          role_arn = ""
      */
    }
    /*
      provider "aws" {
        account_ids      = ["123456789"]
        check_resources   = ["ec2.instances:*"]
        ignore_resources = ["ec2.instances:i-123456789", "aws_cloudwatchlogs_filters:*"]
      }
    */
  }
}
```

This block is merely an example and there are other options. Let's go over the simple ones first.

### Terraform Block

The `terraform` block defines the location to your [Terraform](https://www.terraform.io/) TFState files. This block is not used if you specify the TFState file or files in the CLI when invoking `drift scan`.

In the example it's apparent that we support two separate backend types, called `local` and `s3`. The local backend, as the name would suggest, reads the files from the local filesystem. Just fill in the `files` with the list of TFState files you have.

If you keep the TFState in S3, switch the backend to `s3`, and use the `bucket` and `keys` fields to point to one or more S3 objects. `region` and `role_arn` are optional, and setting them is not required for simple installations.

Only one of the two types of backends can be active at a time.

### Provider Blocks

Each cloud provider has its own block in the drift configuration. In these blocks resources can be ignored or allowlisted, account IDs can be limited, and resource matching rules can be tweaked. Let's go over them.

#### Account IDs

If you happen to keep multiple accounts in a single database and you have only some that are managed by infrastructure-as-code (in our case Terraform) you want to set `account_ids` to limit drifting to certain accounts.

#### Resource Filtering

By setting `check_resources` and `ignore_resources` it's possible to specify which resources to drift on, or ignore specific resources (based on resource type, tags, type + ID, or type + tags)

The format for filtering resources is `<resource_type>:<ID or tags>`. Here are some examples, meant to go under the `provider` block:

```hcl
      check_resources = [
        // "ec2.instances:*", // Check all ec2.instances resources
        "ec2.instances:[Type=integration_test,TestId=integration]", // Check ec2.instances resources which have BOTH the Type and TestId tags set to specified values
        "*:[Type=integration_test,TestId=integration]", // Check all resources, as long as they have BOTH of Type and TestId tags set to specified values
        "*:[TestId=windowsfifl5fe]", // Check resources which contain the TestId=windowsfifl5fe tag (as well as the ones specified above)
        "apigateway.api_keys:*", // Include all apigateway.api_keys resources in the check 
      ]
      ignore_resources   = [
        "kms.keys:*", // Don't drift on KMS keys
        "ec2.instances:i-0e7b9c38956f77f0e", // Ignore this instance
        "ec2.instances:[Type=old_integration_test]", // Ignore all EC2 instances if they have the Type=old_integration_test tag
      ]
```

If check_resources not specified (which is the default) all resources except the ones matching `ignore_resources` are checked.

#### Resource Blocks

Multiple `resource` blocks can be specified under each provider to customize how each resource is handled.

### The * Resource

A special resource, `resource "*"` can be used to set options globally, across all resources in the same provider. This can be used to enable *deep mode* for all resources, without having to use the `--deep` CLI option.

```hcl
provider "aws" {
  resource "*" {
    deep = true // Enable deep mode for every AWS resource
  }
  resource "ec2.instances" {
    deep = false // Disable deep mode for this resource type only
  }
}
```

### The * Provider

A special provider, `provider "*"` can be used to set options globally, across all providers.

```hcl
provider "*" {
  resource "*" {
    deep = true // Deep mode for every resource and provider. (Essentially the same as --deep)
  }
}
```

### Profiles

Let's talk about profiles. You might have noticed the `drift-example` label in the `drift "drift-example" {` block. This is the name of the profile. It's possible to have multiple profiles defined in the config, and select one using the `--profile` flag. This can be used configure multiple accounts with different options and completely separate tfstates. If there's only a single profile defined, it's automatically selected. 

:::tip
It's possible to define multiple profiles for the same account and IaC setup, to distinguish between different ways of running drift on a single cloud configuration.
:::
