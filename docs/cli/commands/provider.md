# provider

Top-level command to interact with providers.

## Usage

```
cloudquery provider [command]

Examples:

  # Downloads all providers specified in config.hcl:
  ./cloudquery provider download
  # Upgrades all providers specified in config.hcl
  ./cloudquery provider upgrade
  # Upgrade one or more providers
  ./cloudquery provider upgrade aws
  # Downgrades all providers specified in config.hcl
  ./cloudquery provider downgrade
  # Downgrades one or more providers
  ./cloudquery provider downgrade aws, gcp
  # Drop provider schema, running fetch again will recreate all tables unless --skip-build-tables is specified
  ./cloudquery provider drop aws
  # build provider schema
  ./cloudquery provider build-schema aws
```

## Available Commands:

```
build-schema Builds provider schema on database
downgrade    Downgrades one or more providers schema version based on config.hcl
download     Downloads all providers specified in config.hcl.
drop         Drops provider schema from database
upgrade      Upgrades one or more providers schema version based on config.hcl
```

## Additional Help Topics

```
Use "cloudquery provider [command] --help" for more information about a command.
Use "cloudquery options" for a list of global CLI options.
```
