# Utility Resolvers

Utility Resolvers provide solutions on converting data from one data structure to another, ready to be saved in tables. These are always ColumnResolvers.

Some resolvers convert one type to another (parsing date fields, ip addresses and so on) and some look up data inside inner structs of a resource, or from the parent.

Examples:
```go
// Few examples of look-up helper resolvers
func PathResolver(path string) ColumnResolver // PathResolver resolves a field in the Resource.Item
func ParentIdResolver(_ context.Context, _ ClientMeta, r *Resource, c Column) error // ParentPathResolver resolves a field from the parent

// Few examples of type converting resolvers
func IntResolver(path string) ColumnResolver // IntResolver tries to cast value into int
func DateResolver(path string, rfcs ...string) ColumnResolver // DateResolver resolves the different date formats (ISODate - 2011-10-05T14:48:00.000Z is default) into *time.Time
func IPAddressResolver(path string) ColumnResolver // IPAddressResolver resolves the ip string value and returns net.IP
```

Discover more ready-made utility resolvers [in the repository](https://github.com/cloudquery/cq-provider-sdk/blob/main/provider/schema/resolvers.go).
