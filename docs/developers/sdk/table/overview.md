# Overview

Table is the main building block in the SDK provider schema, these tables are passed to the Provider to define what resources the provider supports. [Tables](https://github.com/cloudquery/cq-provider-sdk/blob/main/provider/schema/table.go) define their columns, relations (which are also tables). Each table has a resolver function that is called by the SDK with the client that was configured early by the user implementation.

## Example

If we look at the example resource/table definition [in the template](https://github.com/cloudquery/cq-provider-template/blob/main/resources/demo_resource.go):

```go
func DemoResource() *schema.Table {
	return &schema.Table{
		Name:     "demo_table",
		Resolver: fetchDemoResources,

		Columns: []schema.Column{
			{
				Name:        "account_id",
				Type:        schema.TypeString,
				Description: "Description of the column to appear in the generated documentation",
				//Resolver: provider.ResolveAWSAccount,
			},
			{
				Name: "region",
				Type: schema.TypeString,
				//Resolver: fetchS3BucketLocation,
			},
			{
				Name: "creation_date",
				Type: schema.TypeTimestamp,
			},
			{
				Name:     "name",
				Type:     schema.TypeString,
				Resolver: schema.PathResolver("other_name_in_struct"),
			},
		},
		
		...
```

Here we define a table with its columns and metadata.

:::tip
**Resources** are wrappers around a single data that is fetched by table resolvers and passed to the SDK. Resources hold the original item and all resolved values that will be inserted into the database.
Terminologically speaking, a single Resource represents a row in the table.
:::