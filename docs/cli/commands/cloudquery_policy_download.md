---
id: "cloudquery policy download"
hide_title: true
sidebar_label: "policy download"
---
## cloudquery policy download

Download a policy from the CloudQuery Policy Hub

### Synopsis

Download a policy from the CloudQuery Policy Hub

```
cloudquery policy download GITHUB_REPO [flags]
```

### Examples

```

  # Download official policy
  cloudquery policy download aws
  
  # The following will be the same as above
  # Official policies are hosted here: https://github.com/cloudquery-policies
  cloudquery policy download aws//cis-1.2.0
	
  # Download community policy
  cloudquery policy download github.com/COMMUNITY_GITHUB_ORG/aws

  # See https://hub.cloudquery.io for additional policies.
```

### Options

```
  -h, --help   help for download
```

### Options inherited from parent commands

```
      --config string               path to configuration file. can be generated with 'init {provider}' command (env: CQ_CONFIG_PATH) (default "./cloudquery.yml")
      --data-dir string             set persistent data directory (env: CQ_DATA_DIR) (default "./.cq")
      --disable-log-color           disable log colors
      --dsn string                  database connection string (env: CQ_DSN) (example: 'postgres://postgres:pass@localhost:5432/postgres')
      --enable-console-log          enable console logging
      --enable-file-logging         enable file logging (default true)
      --encode-json                 enable JSON log format, instead of key/value
      --force-drop                  when upgrading schema, force dropping of any dependent views
      --log-directory string        set output directory for logs (default ".")
      --log-file string             set output filename for logs (default "cloudquery.log")
      --max-age int                 set max age in days to keep a logfile (default 3)
      --max-backups int             set max number of rolled files to keep (default 3)
      --max-size int                set max size in MB of the logfile before it's rolled (default 30)
      --no-telemetry                disable telemetry collection
      --no-verify                   disable plugins verification
      --reattach-providers string   path to reattach unmanaged plugins, mostly used for testing purposes (env: CQ_REATTACH_PROVIDERS)
      --skip-build-tables           enable skipping building tables. Should only be set if tables already exist
  -v, --verbose                     enable verbose logging
```

### SEE ALSO

* [cloudquery policy](cloudquery_policy.md)	 - Download and run CloudQuery policy

###### Auto generated by spf13/cobra on 28-Jun-2022