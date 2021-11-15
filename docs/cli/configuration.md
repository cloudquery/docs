# Configuration

This is an overview for the syntax and configuraiton options of CloudQuery main configuraiton file `config.hcl`.

## HCL Overview

Similarly to terraform we use HashiCorp [HCL configuration language](https://github.com/hashicorp/hcl) (You can read about why [here](https://github.com/hashicorp/hcl#why)).

## Main CloudQuery block

The `cloudquery` block must be specified exactly once per `config.hcl`. This usually looks like: 


```hcl
cloudquery {
  # plugin_directory = "./cq/providers"
  # policy_directory = "./cq/policies"

  connection {
    dsn = "host=localhost user=postgres password=pass database=postgres port=5432 sslmode=disable"
  } 
}
```

#### Arguments:

* **connection** (required) - defines the PostgreSQL URI or DSN connection string to your PostgreSQL database.
* **plugin_directory** (optional) - directory where CloudQuery will download provider plugins.
* **policy_directory** (optional) - directory where CloudQuery will download policies.

## Provider Block

The provider block must be specified one or more times, and should be first specified in the `cloudquery` block.

Each provider has two blocks: 

* `configuration` - The arguments are different from provider to provider and their documentation can be found in [CloudQuery Hub](https://hub.cloudquery.io).
* `resources` - All resources that this provider supports and can fetch configuration and meta-data from.


:::tip
You can have multiple providers of the same type specified here. For example, this can be useful if you want to fetch data from different accounts and you don't have cross-account access.
:::

## Environment variable substitution

config.hcl supports substition of values from environment variables. This allows to extract security sensitive data (like passwords etc) or variable data (that you want to change without touching CloudQuery configuration) from configuration file and store in the environment variable. To use the feature, set an environment variable before running CLI, adding a CQ_VAR_ prefix to your desired name:

    export CQ_VAR_AWS_VERSION=latest
    export CQ_VAR_ARN=some_value
    export CQ_VAR_DSN="host=localhost user=postgres password=pass database=postgres port=5432 sslmode=disable"

And use it inside config.hcl:

    cloudquery {
      provider "aws" {
        source  = ""
        version = "${AWS_VERSION}"
      }

      connection {
        dsn = "${DSN}"
      }
    }
    
    provider "aws" {
      configuration {
        accounts "<YOUR ID>" {
          role_arn = "${ARN}"
        }
      }
    }

Note that only environment variables starting with CQ_VAR_ are available for use in config.hcl and their prefix is removed.