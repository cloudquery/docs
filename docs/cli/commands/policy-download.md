# policy download

Downloads a policy from the CloudQuery Policy Hub.

## Usage
```
cloudquery policy download POLICY_REPO [flags]
```

## Examples:
```
# Download official policy
cloudquery policy download aws-cis-1.2.0

# The following will be the same as above
# Official policies are hosted here: https://github.com/cloudquery-policies
cloudquery policy download aws-cis-1.2.0

# Download community policy
cloudquery policy download COMMUNITY_GITHUB_ORG/aws-cis-1.2.0

# Download from a custom URL
cloudquery policy download https://gitlab.com/COMMUNITY_ORG/aws-cis-1.2.0

# See https://hub.cloudquery.io for additional policies.
```

## Additional Help Topics
```
Use "cloudquery policy download options" for a list of global CLI options.
```
