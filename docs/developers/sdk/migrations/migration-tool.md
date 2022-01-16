# Migration Tool

All we must do is let the SDK-provided tool to generate the initial migration files. To do this, create a standard `tools/migrations/main.go` file in your provider:

```go
package main

import (
	"context"
	"fmt"
	"os"

	"github.com/path-to/your-provider/resources/provider" // <--- CHANGE THIS to your package name for provider
	"github.com/cloudquery/cq-provider-sdk/migration"
)

func main() {
	if err := migration.Run(context.Background(), provider.Provider(), ""); err != nil {
		fmt.Fprintf(os.Stderr, "Error: %s\n", err.Error())
		os.Exit(1)
	}
}
```

Tool options are:

```
  -dialect string
        Dialect to generate (empty: all)
  -dsn string
        DSN to compare changes against
  -full
        Generate initial migrations (prefix will be 'init')
  -path string
        Path to migrations directory (default "./resources/provider/migrations")
  -prefix string
        Prefix for files (default "unreleased")
```

On each run, the tool creates one setup ("up") and one tear down ("down") migration per dialect in the `resources/provider/migrations/` directory, creating directories for each dialect.

The tool has two running modes:

## Initial Migrations Mode

To create the initial migration files, run it with the `-full` option. In this mode, `-dsn` parameter is not used and no database connection is made.

```
go run tools/migrations/main.go -prefix 1_v0.0.1 -full
```

## Upgrade Mode

To run the tool in the upgrade mode, run it with the `-dsn` option, pointing to the _latest released version_ of the database.
It will then compare changes with the `schema.Table` definitions in the current code, and generate upgrade (and downgrade) files per dialect.

```
go run tools/migrations/main.go -prefix 2_v0.0.2 -dsn 'postgres://user:pass@localhost:5432/your-db?sslmode=disable'
```
