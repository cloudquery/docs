# SDK Overview

CloudQuery SDK enables building CloudQuery providers which allows CloudQuery's users to extract/load/transform existing and popular service providers as well as custom in-house solutions into a SQL or graph database.

## Key Concepts

- **Resources** are defined as [schema.Table](https://github.com/cloudquery/cq-provider-sdk/blob/main/provider/schema/table.go) structs, which list available fields for a cloud resource along with metadata and table configuration.
- **Resolvers** define how to fetch resources from the source (the cloud provider). [Utility resolvers](https://github.com/cloudquery/cq-provider-sdk/blob/main/provider/schema/resolvers.go) take this a step further and provide ready-made solutions on converting data from one data structure to another, ready to be saved in tables.

## Getting Started

Take a look at the [Architecture](../architecture) and [Developing a New Provider](../developing-new-provider) documents.

# Further Information

Take a look at the [Developing a New Provider](../developing-new-provider.md) document.
