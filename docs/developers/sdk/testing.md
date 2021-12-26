# Testing

Testing your provider is key in ensuring quality of your provider and developer experiance for future contributors that can easily test their changes against the tests.

CloudQuery SDK provides utility test function to help test each resource and verify it's output using snapshot testing.

## Requirements

The testing framework provided by CloudQuery SDK is essentially an end-to-end (integration) tests. This means you will need a real test account and real resources in place. It is suggested to create those test resource with any IaC tool (Terraform, Pulumi, etc...).

## How Resource Tests work

As mentioned earlier resource testing is using something called snapshot testing. This means the following occurs in each test:
- The resource table and all it's children tables are delted from PostgreSQL to work with clean data.
- CloudQuery SDK is fetching the resource, transforming and loading it into PostgreSQL.
- For each resource table (and it's children) CloudQuery is reading all the rows and with and compares it with a saved snapshot file.
    - If the result is equal the tests pass.
    - If not, the tests fail, print the diff and write to a snapshot file with `.tmp` the new result (so you can compare offline).
    - If snapshot file doesn't exist the tests fail and write the snapshot file.

## ResourceTest and ResourceTestCase

Each resource can be tested end-to-end with `ResourceTest` function. Here is an example

```go
"github.com/cloudquery/cq-provider-sdk/provider/testing"

func TestMyResource(t *testing.T) {
    cfg := `
    // your provider configuration, if needed
    `
    providertest.ResourceTest(t, testing.ResourceTestCase{
		ProviderCreator: resources.Provider,
		Table:           resources.MyResource(),
		Config:          cfg,
		SnapshotsDir:    "./snapshots",
	})
}
```

