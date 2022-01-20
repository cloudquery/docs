# Generating Migrations

The migration tool helps to generate both initial and upgrade migrations.

## Initial Migrations

After setting up the migration tool, let CloudQuery auto-create the initial migration files:
```
go run tools/migrations/main.go -prefix 1_v0.0.1 -full
```

`1` is the numeric migration ID, `v0.0.1` is your initial provider version. This will generate one directory under `resources/provider/migrations/` for each database dialect supported by the SDK. In the end you should have a directory structure like:

```
resources/provider/migrations/
resources/provider/migrations/postgres/
resources/provider/migrations/postgres/1_v0.0.1.up.sql
resources/provider/migrations/postgres/1_v0.0.1.down.sql
resources/provider/migrations/timescale/
resources/provider/migrations/timescale/1_v0.0.1.up.sql
resources/provider/migrations/timescale/1_v0.0.1.down.sql
```

You can check these files to see the table and key definitions. 

## Upgrade Migrations

If you've made changes to your data structure for the next version, you should generate upgrade migrations:

```
go run tools/migrations/main.go -prefix 2_v0.0.2 -dsn 'postgres://user:pass@localhost:5432/your-db?sslmode=disable'
```

The DSN should point to the _latest released version_ (`v0.0.1` in this example) of the database.

It will then compare changes with the `schema.Table` definitions in the current code, and generate upgrade (and downgrade) files per dialect.

:::tip
It should be possible to generate the migrations for TimescaleDB in vanilla PostgreSQL due to protocol compatibility, by replacing `postgres://` with `tsdb://` in the DSN and still pointing it to your PostgreSQL installation.
:::

:::note
Upgrade migrations are not perfect. Always check the generated files before releasing.
:::

If you need to modify the migration files, see go-migrates guide on how to write migrations for postgres [here](https://github.com/golang-migrate/migrate/blob/master/database/postgres/TUTORIAL.md).
