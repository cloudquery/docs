# Overview

CloudQuery  is an open-source cloud asset inventory powered by SQL, as such, when providers change their schema (change/remove columns) some migrations from the previous run are required. CloudQuery uses [go-migrate](https://github.com/golang-migrate/migrate) under the hood to execute migrations on the database, see how to add them to a provider [here](./developers/migrations.md).


## Running

### Upgrade providers 

The following command will upgrade the provider to the version defined in our `config.hcl`, if the version is defined as `latest` the latest version will downloaded and the provider upgraded to the final schema version.

```bash
cloudquery provider upgrade aws
```

### Downgrade providers schema

The following command will downgrade the provider to the version defined in our `config.hcl`.
```bash
cloudquery provider downgrade aws
```


### Drop providers schema

The following command will drop a providers tables. Running CloudQuery  fetch after a drop command will result in a recreation of all tables.
```bash
cloudquery provider drop aws
```


## Fetch Auto upgrade

Cloudquery automatically attempts to upgrade providers when fetch is executed, this action can be disabled by passing the `--skip-schema-upgrade` flag.
