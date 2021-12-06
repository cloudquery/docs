# policy run

Executes a policy on CloudQuery database.

## Usage
```
cloudquery policy run [flags]

# Download & Run the policies defined in your config file
cloudquery policy run

# Run a specific policy by it's name
cloudquery policy run --policy my_aws_policy

# Run a specific policy which is not defined in your config file
cloudquery policy run aws-cis-1.2.0

```

## Flags

```
  -h, --help              Help for run
      --policy            Select specific policy to run
      --output-dir        Generates a new file for each policy at the given dir with the output
      --skip-versioning   Skips policy versioning and uses latest files
      --stop-on-failure   Stops the execution on the first failure
      --fail-on-violation Return non zero exit code if one of the policy is violated
      --no-results        Do not show policies results
```

## Additional Help Topics
```
Use "cloudquery policy run options" for a list of global CLI options.
```
