# Overview

Provider structs are the core component of the SDK that require the implementor to only set a list all available resources, configuration of it's client and it's config. The provider structs implements the CQProvider Interface allowing the user to just implement his resources and configure function.

## Example

If we look at the example provider definition [in the template](https://github.com/cloudquery/cq-provider-template/blob/main/resources/provider.go):

```go
var (
	//go:embed migrations/*/*.sql
	providerMigrations embed.FS
)

func Provider() *provider.Provider {
	return &provider.Provider{
		// CHANGEME: Change to your provider name
		Name:      "YourProviderName",
		Configure: client.Configure,
		ResourceMap: map[string]*schema.Table{
			// CHANGEME: Place here all supported resources
			"demo_resource": DemoResource(),
		},
		Migrations: providerMigrations,
		Config: func() provider.Config {
			return &client.Config{}
		},
	}

}
```

Here a new provider struct is defined, which has an empty config, some DB migrations and with just one resource (the "demo_resource").
The `DemoResource()` function would be in its own file, `demo_resource.go`, and would define a whole resource and also contain the fetcher functions/resolvers.
