# Configuration

CloudQuery just like [terraform](https://www.terraform.io/docs/language/providers/index.html) relies on "providers" to extract, transform and load cloud assets configuration from Cloud Providers, SaaS Providers and other APIs into PostgreSQL.

This section is very similar to terraform providers section due to similar design of CloudQuery providers, but their purpose and implementation is completely different:

CloudQuery providers are read only providers which extracts, transforms and loads cloud assets configuration while Terraform providers interact with the cloud to provision assets.

## Configuration

Each provider is configured by a `provider "provider_name"` which can include general options and set of `resources` this provider will extract data from.

Each provider CloudQuery support can be found on [hub.cloudquery.io](https://hub.cloudquery.io).

Each provider defines set of relational tables that can be also found on the [hub](https://hub.cloudquery.io/providers/cloudquery/aws/latest).

Inside the cloudquery main block you need to add

```hcl
provider "aws" {
    version = "latest"
}
```

Default configuration for a specific provider can always be generated via `cloudquery init provider`