# Configuration

To add multiple policies, you can use the `policy` block in `config.hcl`.

## Block Attributes
| Attribute | Type | Description |
| --------- | ---- | ----------- |
| block label | string | The name of the policy |
| type | string | The type of the policy |
| source | string | The source of the policy |
| sub_path | string | The sub path to run from |
| version | string | The requestd version of the policy |


## Block Types

The policy block supports the following types:

### hub

The hub type is used to configure the policy from cloud query hub.

```hcl
policy "hub_policy_1" {
  type = "hub"
  source = "aws-cis-1.2.0"
  sub_path = "cis-v1.20/aws-cis-section-2/2.1"
  version = "v0.0.5"
}
```


### remote

The remote type is used to configure the policy from any VSC (github, gitlab, bitbucket, etc...).

```hcl
policy "remote_policy_1" {
  type = "remote"
  source = "https://github.com/cloudquery-policies/aws-cis-1.2.0.git"
  sub_path = ""
  version = "v0.0.5"
}
```

### local

The local type is used to configure the policy from a local path

```hcl
policy "local_policy_1" {
  type = "local"
  source = "/path/to/policy"
  sub_path = ""
  version = "v0.0.5"
}
```

### inline

The inline type is used to configure the policy from inline code.

**Note:** The inline type is not support sub_path and version.

```hcl
policy "inline_policy_1" {
  type = "inlne"
  source = file("/path/to/policy.hcl")
}
```

:::tip
You can still run a single policy with the `policy` block.
Just add the `--policy` flag to the command with the policy name.
:::
