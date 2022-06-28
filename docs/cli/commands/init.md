# init

Generates initial `cloudquery.yml` for fetch command.

## Usage

`cloudquery init [choose one or more providers (aws,gcp,azure,okta,...)] [flags]`

## Examples

```bash
# Downloads AWS provider and generates cloudquery.yml for AWS provider
cloudquery init aws

# Downloads AWS, GCP providers and generates one cloudquery.yml with both providers
cloudquery init aws gcp
```

## Additional Help Topics

```text
Use "cloudquery init options" for a list of global CLI options.
```
