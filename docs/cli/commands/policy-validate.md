# policy validate

Validates a policy and returns diagnostics to the user.

## Usage
```
  # Describe official policy
  cloudquery policy describe aws

  # The following will be the same as above
  # Official policies are hosted here: https://github.com/cloudquery-policies
  cloudquery policy describe aws//cis-1.2.0

  # Describe community policy
  cloudquery policy describe github.com/COMMUNITY_GITHUB_ORG/aws

  # See https://hub.cloudquery.io for additional policies.

```

## Flags

```
  -h, --help              Help for describe
```

## Additional Help Topics
```
Use "cloudquery policy run options" for a list of global CLI options.
```
