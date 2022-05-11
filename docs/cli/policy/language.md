# Language

CloudQuery Policy codifies a set of rules (checks) with SQL.

CloudQuery Policy uses a simple configuration layer where HCL is served as the logical layer and SQL as the business/query layer.

## Building Policies

Building CloudQuery policies is very simple allowing us to combine multiple policies from different `sources`, create `views` to simplify our `checks`, use `file` function to reuse policies etc'. In this section we will go over a simple policy structure, as always we recommend checking out existing policies in [cloudquery-policies](https://github.com/cloudquery-policies)

Every policy starts with a `policy` block. A policy block consists of `views`, `checks`, more `policies`, or a pointer to another `policy` with the `source` attribute.

:::tip 
You can validate your policy using the `policy validate` command, which will return diagnostics on your policy and any errors.
:::

### Configuration Example

```hcl
policy "test-policy" {
  description = "This is a test policy"
  identifiers = ["id"]
  configuration {
    provider "aws" {
      version = ">= 1.0"
    }
  }

  check "top-level-query" {
    description = "Top Level Query"
    query = "SELECT id as id, 'This is a Peter` as cq_reason FROM test_policy_table WHERE name LIKE 'peter'"
  }
}
```

:::tip 
You can use the file(../relative/path/to/file) in your repo to point to query files or documentation files to make your policy cleaner and more reusable.
:::

### Policy block

The policy block is the top-level block that defines a CQ policy. The block label is the the policy name that can then be referenced by the CLI.

#### Arguments:
- `title` - Policy title description, usually a single line defining the policy in a human readable format.
- `doc` - **(optional)** policy documentation readme.
- `identifiers` - **(optional)** unique identifiers we want all checks to return on query result, will override parent policy identifiers if they exist.

### Configuration block

This block defines the required providers needed to execute this policy.

### Check block

This is the basic building block that defines a rule by running an SQL query.

#### Arguments:
- `title` - **(required)** Check title description, usually a single line defining the query in a human readable format.
- `doc` - **(optional)** check documentation readme.
- `query` **(required)** - The SQL query to execute.
- `type` **(optional, default: automatic)** - Whether this check is `Manual` and requires human interaction to be verified or `Automatic` and is verified by the query alone.
- `expect_output` **(optional, default: false)** - If set to `true` this policy expects results (so the check will return `PASS`). It is `false` by default, meaning that if the query returns results the check will return `FAIL`. 
- `reason` **(optional)** - reason to add to check output, uses `go template` markup language i.e you can access columns return from the query using `{{.<column_name>}}` notation. This will override a `cq_reason` returned from the query.

### View block

```hcl
  view "myview" {
    query = "SELECT * FROM test_policy_table WHERE name LIKE 'john'"
  }
```

This blocks creates a view from a given query (if it doesn't exist already). This is useful when other queries rely on complex joins that you can write once and then just reference a specific view. 

:::tip
Views are scoped to the (sub)policies they are defined in.  i.e. you cannot reference a view defined in parent
or child subpolicies. To avoid code duplication when reusing views, it is recommended to use `query = file("./path_to_view.sql")`.
:::

**Label** - name of the created view which you can later reference in `check` blocks.

#### Arguments:
 - `title` **(Required)** - View title description, usually a single line defining the view in a human readable format..
 - `query` **(Required)** - The query used to create the view.
