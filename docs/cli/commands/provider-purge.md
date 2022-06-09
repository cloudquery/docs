# provider purge

Remove stale resources from one or more providers in database

## Usage

```text
Usage:
cloudquery provider purge [provider] [flags]

Flags:
      --dry-run                 (default true)
  -h, --help                   help for purge
      --last-update duration   last-update is the duration from current time we want to remove resources from the database. For example 24h will remove all resources that were not update in last 24 hours. Duration is a string with optional unit suffix such as "2h45m" or "7d" (default 1h0m0s)
```

## Additional Help Topics

```text
Use "cloudquery options" for a list of global CLI options.
```
