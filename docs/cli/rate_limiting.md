# Rate Limiting

You can configure CloudQuery to limit the amount of resources fetched in parallel, to prevent the remote provider API from being overwhelemed by too many requests.

CloudQuery currently allows setting `max_parallel_resource_fetch_limit` to limit how many resources are fetched simultaneously. This flag can be added to any
provider block as following:

```hcl
provider "aws" {
  configuration {
    aws_debug = false
  }
  // list of resources to fetch
  resources = [
    "*"
  ]
  // enables partial fetching, allowing for any failures to not stop full resource pull
  enable_partial_fetch = true
  // Limit provider to fetch only 5 resources at a given time
  max_parallel_resource_fetch_limit = 5
}
```

:::tip

Some providers allow for more precise rate limiting and retry and backoff mechanisms. the AWS provider for example allows such [controls](https://hub.cloudquery.io/providers/cloudquery/aws/latest). Make sure to check
their configuration options in the [hub](https://hub.cloudquery.io/providers).
:::