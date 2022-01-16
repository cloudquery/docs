# Generating Upgrade Migrations

If you've made changes to your data structure for the next version, you should generate upgrade migrations:

```
go run tools/migrations/main.go -prefix 2_v0.0.2 -dsn 'postgres://user:pass@localhost:5432/your-db?sslmode=disable'
```

The DSN should point to the _latest released version_ (`v0.0.1` in this example) of the database.

It will then compare changes with the `schema.Table` definitions in the current code, and generate upgrade (and downgrade) files per dialect.

:::tip
Upgrade migrations are not perfect. Always check the generated files before releasing.
:::

If you need to modify the migration files, see go-migrates guide on how to write migrations for postgres [here](https://github.com/golang-migrate/migrate/blob/master/database/postgres/TUTORIAL.md).
