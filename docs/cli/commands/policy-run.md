# policy run

Executes a policy on CloudQuery database.

## Usage
```
cloudquery policy run GITHUB_REPO [PATH_IN_REPO] [flags]
```

## Flags

```
  -h, --help              Help for run
      --output string     Generates a new file at the given path with the output
      --skip-download     Skips downloading the policy repository
      --skip-versioning   Skips policy versioning and uses latest files
      --stop-on-failure   Stops the execution on the first failure
      --sub-path string   Forces the policy run command to only execute this sub-policy/query
```

## Additional Help Topics
```
Use "cloudquery policy run options" for a list of global CLI options.
```
