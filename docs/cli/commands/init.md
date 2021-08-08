# init

Generates initial config.hcl for fetch command.

## Usage
`cloudquery init [choose one or more providers (aws,gcp,azure,okta,...)] [flags]`

## Examples

```bash
# Downloads AWS provider and generates config.hcl for AWS provider
cloudquery init aws

# Downloads AWS, GCP providers and generates one config.hcl with both providers
cloudquery init aws gcp
```

## Additional Help Topics
```
Use "cloudquery init options" for a list of global CLI options.
```
