# Overview

This is an overview of the syntax and configuration options of CloudQuery's main configuration file `config.hcl`.

## HCL Overview

Similarly to terraform we use HashiCorp [HCL configuration language](https://github.com/hashicorp/hcl) (You can read about why [here](https://github.com/hashicorp/hcl#why)).

## Main CloudQuery block

The `cloudquery` block must be specified exactly once per `config.hcl`. This usually looks like: 


```hcl
cloudquery {
  # plugin_directory = "./cq/providers"
  # policy_directory = "./cq/policies"

  connection {
    type = "postgres"
    username = "postgres"
    password = "pass"
    host = "localhost"
    port = 5432
    database = "postgres"
    sslmode = "disable"

    # old format
    # dsn = "postgres://postgres:pass@localhost:5432/postgres?sslmode=disable"
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
* `resources` - All resources that this provider supports and can fetch configuration and metadata from.


:::tip
You can have multiple providers of the same type specified here. For example, this can be useful if you want to fetch data from different accounts and you don't have cross-account access.
:::
