# Configuration

You can define the policies you want to execute (both local and remote) in your `config.hcl`.
This can be useful when executing multiple policies and running in the CI instead of passing everything via the CLI.

## Policy Block

```hcl
policy "remote_policy_1" {
  type = "remote"
  source = "https://github.com/cloudquery-policies/aws-cis-1.2.0.git"
  sub_path = ""
  version = "v0.0.5"
}
```

The label immediately after the `policy` keyword is the name of the policy which you can later also refer to from the CLI. 

**Arguments**
- `type` **(required)**: `remote` or `local`. `remote` will mean that `source` will point to any remote git backed policy. `local` will mean that `source` points to the local file system.
- `source` **(required)**: The path to the policy
- `sub_path` **(optional)**: Policies can contain sub-policies (sections) that you can execute only part of them. By default it executes the whole policy and sub-policies.
- `version` **(optional)**: If it's a git backed policy, this will point to the version that you want to execute.

