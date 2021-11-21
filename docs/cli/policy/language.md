# Language

CloudQuery Policy codifies set of rules (queries) with SQL.

CloudQuery Policy uses a simple configuration layer where HCL is served as the logical layer and SQL as the business/query layer.

## Configuration Example

```hcl
policy "test-policy" {
  description = "This is a test policy"
  configuration {
    provider "aws" {
      version = ">= 1.0"
    }
  }

  query "top-level-query" {
    description = "Top Level Query"
    query = "SELECT * FROM test_policy_table WHERE name LIKE 'peter'"
  }
}
```

### Policy block

The policy block is the top-level block that defines a CQ policy. The block label is the the policy name which can then be refenced by the CLI.

#### Arguments:
- `description` - meta-data text describing the policy.

### Configuration block

This block defines the required providers needed to execute this policy.

### Query block

This is the basic building block which defines a rule by running an SQL query.

#### Arguments:
- `description` - **(required)** Policy description.
- `query` **(required)** - The SQL query to execute
- `manual` **(optional, default: false)** - If set to `true` the policy will just print the results instead of showing `PASS`/`FAIL`.
- `expect_output` **(optional, default: false)** - If set to `true` this policy expects results (so the check will return `PASS`). `false` by default meaning if the query returns result the check will return `FAIL`. 

### View block

```hcl
  view "myview" {
    description = "My awesome view"
    query "complex-query" {
      query = "SELECT * FROM test_policy_table WHERE name LIKE 'john'"
    }
  }
```

This blocks creates a view (if doesn't exist) from a given query. This is useful when other queries relies on complex joins that you can write once and then just reference a specific view. 

**Label** - name of the created view which you can later reference in `query` blocks.

#### Arguments:
 - `description` **(Required)** - View description.
 - `query` **(Required)** - The query used to create the view.

