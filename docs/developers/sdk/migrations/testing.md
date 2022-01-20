# Migration Testing Helper

To test your migrations a helper is supplied. Just add this as your `provider_test.go`:

```go
package provider_test

import (
	"testing"

	"github.com/path-to/your-provider/resources" // <--- CHANGE THIS to your package name for provider
	"github.com/cloudquery/cq-provider-sdk/migration"
)

func TestMigrations(t *testing.T) {
	migration.RunMigrationsTest(t, resources.Provider(), nil)
}
```

The method signature is:
```go
func RunMigrationsTest(t *testing.T, prov *provider.Provider, additionalVersionsToTest []string)
```

This helper tests up to the latest migration and down to the initial version. Optionally, if you have specific "to-and-from" migration scenarios you'd like to test, use the `additionalVersionsToTest` parameter to include them, to be run in order.

## Running the tester

Set the `CQ_MIGRATION_TEST_DSN` environment variable to the DSN of a PostgreSQL installation and run the test like so:

```sh
CQ_MIGRATION_TEST_DSN="postgres://postgres:password@localhost:5432/postgres?sslmode=disable" \
go test -v resources/provider_test.go 
```

All provider tables in the specified DB catalog will be dropped before and after the test.

To test multiple dialects, run the test multiple times each time with a different DSN value specific to the dialect you wish to test.

:::tip
It's possible to test the migrations of TimescaleDB dialect in vanilla PostgreSQL due to protocol compatibility, by replacing `postgres://` with `tsdb://` in the DSN and still pointing it to your PostgreSQL installation.
:::

**It's recommended to always test all migrations for all dialects.**