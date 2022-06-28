# options

Prints global options and can be passed to any commands

## Global Flags

```text
--config string               path to configuration file. can be generated with 'init [provider]' command (env: CQ_CONFIG_PATH) (default "./cloudquery.yml")
--dsn string                  database connection string (env: CQ_DSN) (example: 'postgres://postgres:pass@localhost:5432/postgres')
--no-verify                   disable plugins verification
--data-dir string             set persistent data directory (env: CQ_DATA_DIR) (default "./.cq")
--reattach-providers string   Path to reattach unmanaged plugins, mostly used for testing purposes (env: CQ_REATTACH_PROVIDERS)
--skip-build-tables           Skip building tables on run, this should only be true if tables already exist.
--force-drop                  when upgrading schema, force dropping of any dependent views
```

## Global Logging Flags

```text
--disable-log-color           disable log colors
--enable-console-log          enable console logging
--enable-file-logging         enable file logging (default true)
--encode-json                 enable JSON log format, instead of key/value
--log-directory string        set output directory for logs (default ".")
--log-file string             set output filename for logs (default "cloudquery.log")
--max-age int                 set max age in days to keep a logfile (default 3)
--max-backups int             set max number of rolled files to keep (default 3)
--max-size int                set max size in MB of the logfile before it's rolled (default 30)
-v, --verbose                 enable verbose logging
```

## Global Telemetry Flags

```text
--no-telemetry                NoTelemetry is true telemetry collection will be disabled
```
