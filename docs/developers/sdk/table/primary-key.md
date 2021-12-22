# Primary Key

Every table should have a primary key, ideally consisting of the `account_id` and `id` (or `arn`) of some kind. If the provider supports multiple service regions (and multiple entities with the same `id` can exist in different regions) `region` column should also be included.

Primary keys are defined in the `schema.Table` definition:

```go
func DemoResource() *schema.Table {
    return &schema.Table{
// ...
		Options:      schema.TableCreationOptions{PrimaryKeys: []string{"account_id", "id"}},
// ...
```
