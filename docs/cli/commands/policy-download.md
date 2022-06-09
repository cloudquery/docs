# policy download

Downloads a policy from the CloudQuery Policy Hub.

## Usage

```
cloudquery policy download POLICY_REPO [flags]
```

## Examples

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

## Additional Help Topics

```
Use "cloudquery policy download options" for a list of global CLI options.
```
