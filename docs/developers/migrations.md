# Migrations

This is an advanced section describing implementing migrations for a CloudQuery Provider. Before reading this section make sure you have read the [developing new provider](./developers/developing-new-provider.md) guide first.

Since CloudQuery is backed by a SQL database, providers consistently change between versions and can create breaking changes. Migrations is a classic approach to support changes without rebuilding the database. Under the hood CloudQuery uses [go-migrate](https://github.com/golang-migrate/migrate).

## Adding provider migrations support 

The CloudQuery SDK allows to easily send a list of embedded SQL migration files from a provider to the core, we are required to only add the following to our provider struct:

```go 

var (
	//go:embed migrations/*.sql
	myMigrations embed.FS
)

&provider.Provider{
		Name:            "docs-provider",
		Configure:       client.Configure,
		ErrorClassifier: client.ErrorClassifier,
		*Migrations:      myMigrations,
        ResourceS: map[string]*schema.Table{
            "myresource": ResourceTable()
        }
}

```

After we added our migrations `embed.FS` all we must do is write our migration files, see go-migrates guide here on how to write migrations for postgres [here](https://github.com/golang-migrate/migrate/blob/master/database/postgres/TUTORIAL.md).


:::tip
Define the migrations in following name convention: [version_number]_[tag_version].[up|down].sql
:::
