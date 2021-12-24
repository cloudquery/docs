# Fetch Resolvers

Fetch resolvers are functions to fetch resources from the source (a cloud provider for example).

## TableResolver

This is the main type of fetch resolver:

```go
type TableResolver func(ctx context.Context, meta ClientMeta, parent *Resource, res chan interface{}) error
```

`TableResolver` allows you to access the cloud resource using the given passed `*Client` and fetch all resources of that type. Finally, you send the fetch items into the passed `res` channel argument.
The `TableResolver` is very flexible allowing you to define you pagination logic or any other logic for that matter, and pass the results to channel.

:::tip
The collector in the SDK is slice-aware, so if you have a slice of resources, you can just push the slice as a whole, without iterating.
:::

Here's an example from the [provider template](https://github.com/cloudquery/cq-provider-template/blob/main/resources/demo_resource.go):

```go
func fetchDemoResources(ctx context.Context, meta schema.ClientMeta, parent *schema.Resource, res chan interface{}) error {
	c := meta.(*client.Client)
	_ = c
	// Fetch using the third party client and put the result in res
	// res <- c.ThirdPartyClient.getData()
	return nil
}
```

## PostResourceResolver (RowResolver)

This optional resolver is called after all columns have been resolved, and before resource is inserted to database. `PostResourceResolver` is the name in the `schema.Table` struct.

```go
type RowResolver func(ctx context.Context, meta ClientMeta, resource *Resource) error
```
