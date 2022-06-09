# policy run

Executes a policy on CloudQuery database.

## Usage

```bash
cloudquery policy run [flags]

# Download & Run the policies defined in your config file
cloudquery policy run

# Run a specific policy which is not defined in your config file
cloudquery policy run aws//cis_v1.2.0

```

## Flags

```text
  -h, --help                    help for run
      --disable-fetch-check     Disable checking if a respective fetch happened before running policies
      --enable-db-persistence   Enable storage of policy output in database
      --no-results              Do not show policies results
      --output-dir string       Generates a new file for each policy at the given dir with the output      
```

## Additional Help Topics

```text
Use "cloudquery policy run options" for a list of global CLI options.
```
