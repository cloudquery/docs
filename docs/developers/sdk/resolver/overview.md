# Overview

Resolvers are functions to fetch resources from the source (the cloud provider) or look up / convert between structs.

## TableResolver

This is the main type of resolver:

```go
type TableResolver func(ctx context.Context, meta ClientMeta, parent *Resource, res chan interface{}) error
```

Example:

```go
func fetchDemoResources(ctx context.Context, meta schema.ClientMeta, parent *schema.Resource, res chan interface{}) error {
	c := meta.(*client.Client)
	_ = c
	// Fetch using the third party client and put the result in res
	// res <- c.ThirdPartyClient.getData()
	return nil
}
```

## ColumnResolver

These types of resolvers are called for each row received in TableResolver's data fetch.

```go
type ColumnResolver func(ctx context.Context, meta ClientMeta, resource *Resource, c Column) error
```

A ColumnResolver works by extracting data for the given `Column` from the given `Resource`, and setting it in the `Resource` using `resource.Set()`:

```go
func (r *Resource) Set(key string, value interface{}) error {
```

They usually go like:
```go
func resolveDynamodbTableKeySchema(ctx context.Context, meta schema.ClientMeta, resource *schema.Resource, c schema.Column) error {
	r := resource.Item.(*types.TableDescription)
	
	value := marshalKeySchema(r.KeySchema)
	
	return resource.Set(c.Name, value)
}
```

This way, the value for the column `c` is extracted from the resource, marshalled, and set.

## PostResourceResolver

This optional resolver is called after all columns have been resolved, and before resource is inserted to database.

```go
type RowResolver func(ctx context.Context, meta ClientMeta, resource *Resource) error
```
