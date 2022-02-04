# Overview

Fetch command is the core command for CloudQuery. It extracts the configuration of your cloud assets, transforms them and loads them into a single PostgreSQL database.

## Running

### Spawn or connection to PostgreSQL database

CloudQuery needs a PostgreSQL database (>11). You can either spawn a local one (usually good for development and local testing)
or connect to an existing one.

For local, you can use the following docker command:

```bash
docker run -p 5432:5432 -e POSTGRES_PASSWORD=pass -d postgres
```

### Generate `config.hcl`

An initial `config.hcl` can be generated via `cloudquery init [provider]` (`provider` can be `aws`, `gcp` - see all options at https://hub.cloudquery.io). 

If you are using an existing database, you will have to update the `connection` section 
in config.hcl:

```hcl
cloudquery {
  plugin_directory = "./cq/providers"
  policy_directory = "./cq/policies"

  provider "aws" {
    source  = ""
    version = "latest"
  }

  connection {
    dsn = "host=localhost user=postgres password=pass database=postgres port=5432"
  }
}
```

### Fetch

Once `config.hcl` is generated, run the following command to fetch the resources. \(You need to be authenticated — see relevant section under each provider\):

```text
cloudquery fetch
# cloudquery fetch --help # Show all possible fetch flags
```