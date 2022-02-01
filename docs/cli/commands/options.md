# options

Prints global options and can be passed to any commands

## Global Flags

```text
      --config string               path to configuration file. can be generated with 'init [provider]' command (env: CQ_CONFIG_PATH) (default "./config.hcl")
      --dsn string                  database connection string (env: CQ_DSN) (example: 'host=localhost user=postgres password=pass DB.name=postgres port=5432')
      --no-verify                   NoVerify is true registry won't verify the plugins
      --data-dir string             Directory to save and load CloudQuery persistent data to (env: CQ_DATA_DIR) (default "./.cq")
      --reattach-providers string   Path to reattach unmanaged plugins, mostly used for testing purposes (env: CQ_REATTACH_PROVIDERS)
      --skip-build-tables           Skip building tables on run, this should only be true if tables already exist.
```

## Global Logging Flags

```text
      --enable-console-log          Enable console logging
      --enable-file-logging         enableFileLogging makes the framework logging to a file (default true)
      --encode-json                 EncodeLogsAsJson makes the logging framework logging JSON instead of KV
      --log-directory string        Directory to logging to to when file logging is enabled (default ".")
      --log-file string             Filename is the name of the logfile which will be placed inside the directory (default "cloudquery.log")
      --max-age int                 MaxAge the max age in days to keep a logfile (default 3)
      --max-backups int             MaxBackups the max number of rolled files to keep (default 3)
      --max-size int                MaxSize the max size in MB of the logfile before it's rolled (default 30)
  -v, --verbose                     Enable Verbose logging
```

## Global Telemetry Flags

```text
      --debug-telemetry             DebugTelemetry is true telemetry collection will be in debug level
      --inspect-telemetry           Enable telemetry inspection
      --no-telemetry                NoTelemetry is true telemetry collection will be disabled
```
