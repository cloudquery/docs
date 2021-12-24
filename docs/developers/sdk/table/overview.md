# Overview

Table is the main building block in the SDK provider schema, these tables are passed to the Provider to define what resources the provider supports. [Tables](https://github.com/cloudquery/cq-provider-sdk/blob/main/provider/schema/table.go) define their columns, relations (which are also tables). Each table has a resolver function that is called by the SDK with the client that was configured early by the user implementation.

```go
type Table struct {
	// Name of table
	Name string
	// table description
	Description string
	// Columns are the set of fields that are part of this table
	Columns []Column
	// Relations are a set of related tables defines
	Relations []*Table
	// Resolver is the main entry point to fetching table data and
	Resolver TableResolver
	// Ignore errors checks if returned error from table resolver should be ignored.
	IgnoreError IgnoreErrorFunc
	// Multiplex returns re-purposed meta clients. The sdk will execute the table with each of them
	Multiplex func(meta ClientMeta) []ClientMeta
	// DeleteFilter returns a list of key/value pairs to add when truncating this table's data from the database.
	DeleteFilter func(meta ClientMeta, parent *Resource) []interface{}
	// Post resource resolver is called after all columns have been resolved, and before resource is inserted to database.
	PostResourceResolver RowResolver
	// Options allow modification of how the table is defined when created
	Options TableCreationOptions
}
```

Check [the repository](https://github.com/cloudquery/cq-provider-sdk/blob/main/provider/schema/table.go) for a more up-to-date `schema.Table` definition.

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

Here, we define a table with its columns and metadata.

:::tip
**Resources** are wrappers around a single data that is fetched by table resolvers and passed to the SDK. Resources hold the original item and all resolved values that will be inserted into the database.
Terminologically speaking, a single Resource represents a row in the table.
:::