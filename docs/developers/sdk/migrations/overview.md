# Overview

Every CloudQuery provider should ship with initial migration files to create tables.
Before reading this section make sure you have read the [developing new provider](../../developing-new-provider.md) guide first.

Since CloudQuery is backed by a SQL database, providers consistently change between versions and can create breaking changes. Migrations is a classic approach to support changes without rebuilding the database. Under the hood CloudQuery uses [go-migrate](https://github.com/golang-migrate/migrate).

## Adding provider migrations support 

The CloudQuery SDK allows to easily send a list of embedded SQL migration files from a provider to the core, we are required to only add the following to our provider struct:

```go
var (
	//go:embed migrations/*/*.sql
	migrationFiles embed.FS
)

func Provider() *provider.Provider {
	return &provider.Provider{
		Name:            "docs-provider",
		Version:         "0.0.1",
		Configure:       client.Configure,
		Migrations:      migrationFiles, // <-- Add this to your provider struct
		Resources: map[string]*schema.Table{
			"myresource": MyResourceTable(),
		},
		Config: func() provider.Config {
			return &client.Config{}
		},
	}
}
```

See it in action [in the template.](https://github.com/cloudquery/cq-provider-template/blob/main/resources/provider/provider.go)

## Migrations Filesystem

Migrations are SQL files to execute. Each database dialect requires its own migrations, to account for changes in data types and the way keys are handled.

:::tip
Migration file names are in the format of `[version_number]_[tag_version].[up|down].sql`.
:::

A common migrations directory (`resources/provider/migrations/` by default) may look like:

```
postgres/1_v0.0.1.up.sql
postgres/1_v0.0.1.down.sql
postgres/2_v0.0.2.up.sql
postgres/2_v0.0.2.down.sql
postgres/3_v0.1.0.up.sql
postgres/3_v0.1.0.down.sql
timescale/1_v0.0.1.up.sql
timescale/1_v0.0.1.down.sql
timescale/2_v0.0.2.up.sql
timescale/2_v0.0.2.down.sql
timescale/3_v0.1.0.up.sql
timescale/3_v0.1.0.down.sql
```

Fortunately there's a way to automatically generate most migrations from resource definitions...
