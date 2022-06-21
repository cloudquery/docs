# Overview

This is an overview of the syntax and configuration options of CloudQuery's main configuration file `config.hcl`.

## HCL Overview

Similarly to terraform we use HashiCorp [HCL configuration language](https://github.com/hashicorp/hcl) (You can read about why [here](https://github.com/hashicorp/hcl#why)).

## Main CloudQuery block

The `cloudquery` block must be specified exactly once per `config.hcl`. This usually looks like:

```hcl
cloudquery {
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

### Arguments

* **`connection`** (required) - defines the connections details to your PostgreSQL database.

## Provider Block

The provider block must be specified one or more times, and should be first specified in the `cloudquery` block.

Each provider has the following blocks that can be set: 

* `configuration` - The arguments are different from provider to provider and their documentation can be found in [CloudQuery Hub](https://hub.cloudquery.io).

* `resources` - A list of resources to to fetch configuration and metadata for. You can specify all supported resources by providing `*` as the first value 
* `alias` **(Optional)** - A unique identifier for the provider so that you can have multiple instances for the same provider 
<!-- * `env` **(Optional)** -  -->
* `max_goroutines` **(Optional)** - Specify an integer greater than 0 in order to limit the number Go routines created by cloudquery. CloudQuery will attempt to use all resources available but will try and factor in CPU and File descriptor limitations. This is useful for providers that have low concurrency thresholds and for compute resources that have minimal memory and CPU available
* `max_parallel_resource_fetch_limit` **(Optional)** - Specify an integer greater than 0 in order to limit the number of resources that are fetched in parallel. CloudQuery will attempt to use all resources available but will try and factor in CPU and File descriptor limitations. This is useful for providers that have low concurrency thresholds and for compute resources that have minimal memory and CPU available
* `resource_timeout` **(Optional)** - Specify a an integer greater than 0 in order to limit the time that CloudQuery will spend fetching any single resource. Default behavior is unlimited timeout.
* `skip_resources` **(Optional)** - A list of resources that should be explicitly skipped. This can help if you are using a `*` or dynamically generating the `resources` value.

:::tip
You can have multiple providers of the same type specified here. For example, this can be useful if you want to fetch data from different accounts and you don't have cross-account access.
:::
