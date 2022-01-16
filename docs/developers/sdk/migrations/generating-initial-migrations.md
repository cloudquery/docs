# Generating Initial Migrations

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
