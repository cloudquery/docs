# Migration Tool

All we must do is let the SDK-provided tool to generate the initial migration files. To do this, create a standard `tools/migrations/main.go` file in your provider:

```go
package main

import (
	"context"
	"fmt"
	"os"

	"github.com/path-to/your-provider/resources" // <--- CHANGE THIS to your package name for provider
	"github.com/cloudquery/cq-provider-sdk/migration"
)

func main() {
	if err := migration.Run(context.Background(), resources.Provider(), ""); err != nil {
		fmt.Fprintf(os.Stderr, "Error: %s\n", err.Error())
		os.Exit(1)
	}
}
```

Tool options are:

```
  -dialect string
        Dialect to generate initial migrations (empty: all)
  -dsn string
        DSN to compare changes against (upgrade mode)
  -fake-tsdb
        Run in TSDB mode without TSDB (upgrade mode)
  -full
        Generate initial migrations (prefix will be 'init')
  -path string
        Path to migrations directory (default "./resources/provider/migrations")
  -prefix string
        Prefix for files (default "unreleased")
  -schema string
        Schema to compare tables from (upgrade mode) (default "public")
```

The tool has two running modes:

## Initial Migrations Mode

To create the initial migration files, run it with the `-full` option. In this mode, `-dsn` parameter is not used and no database connection is made.

On each run, the tool creates one setup ("up") and one tear down ("down") migration in the `resources/provider/migrations/` directory **for each dialect**, in separate subdirectories.

```
go run tools/migrations/main.go -prefix 1_v0.0.1 -full
```

## Upgrade Mode

To run the tool in the upgrade mode, run it with the `-dsn` option, pointing to the _to be released version_ of the database.
It will then compare changes with the `schema.Table` definitions in the current code and generate upgrade migrations.
On each run, the tool creates one setup ("up") and one tear down ("down") migration **for the given dialect** in the `resources/provider/migrations/` directory.

A good way to ensure you run the migration tool on the latest changes is:

1. Ensure your local version of the provider repo is synced with the latest changes from the GitHub provider repo. See more on how to do it [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)
2. Drop any existing database data and schema by running `cloudquery provider drop aws`. ⚠️ This is destructive and will remove all existing provider data
3. Set up your provider in debugging mode. See how do to it [here](/docs/developers/debugging#example)
4. Run `cloudquery provider upgrade aws` (in debug more as configured in step 3) to mi
5. Run `go run tools/migrations/main.go -prefix 2_v0.0.2 -dsn 'postgres://user:pass@localhost:5432/your-db?sslmode=disable'` to generate new migrations for PostgreSQL
6. Run `go run tools/migrations/main.go -prefix 2_v0.0.2 -fake-tsdb -dsn 'postgres://user:pass@localhost:5432/your-db?sslmode=disable'` to generate new migrations for TimescaleDB

:::tip
The prefix format is `<order-migrations-are-applied>.<release-version>`. `order-migrations-are-applied` should always be an increment of the current migration order, and `release-version` should be the release this migration belongs too, usually the next expected release
:::

## Dialect URL Schemes

Dialects are detected using the URI scheme in the DSN.

| Dialect     | Dialect ID | Scheme       |
| :---------- | :--------- | :----------- |
| PostgreSQL  | postgres   | postgres://  |
| TimescaleDB | timescale  | timescale:// |
