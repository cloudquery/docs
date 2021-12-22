# Overview

CloudQuery SDK enables building CloudQuery providers which allows CloudQuery's users to **E**xtract/**L**oad/**T**ransform existing and popular service providers as well as custom in-house solutions into a SQL or graph database.
It was developed to allow easy creation for providers, and reduce boilerplate code when developing them.

The core idea of the SDK is to allow developing a provider in a straightforward manner, while allowing the user free control in fetching the data to be inserted.

## Key Concepts

- **Provider** structs are the core component of the SDK that require the implementor to only set a list all available resources, configuration of it's client and it's config. The provider structs implements the CQProvider Interface allowing the user to just implement his resources and configure function.
- **Table** is the main building block in the SDK provider schema, these tables are passed to the Provider to define what resources the provider supports. [Tables](https://github.com/cloudquery/cq-provider-sdk/blob/main/provider/schema/table.go) define their columns, relations (which are also tables). Each table has a resolver function that is called by the SDK with the client that was configured early by the user implementation.
- **Resources** are wrappers around a single data that is fetched by table resolvers and passed to the SDK. Resources hold the original item and all resolved values that will be inserted into the database.  Terminologically speaking, a single Resource represents a row in the table.
- **Resolvers** are functions to fetch resources from the source (the cloud provider). [Utility resolvers](https://github.com/cloudquery/cq-provider-sdk/blob/main/provider/schema/resolvers.go) take this a step further and provide ready-made solutions on converting data from one data structure to another, ready to be saved in tables.

## Getting Started

Take a look at the [CloudQuery Architecture](../architecture) and [Developing a New Provider](../developing-new-provider) documents.

## Debug and Test

To debug a provider see the [Debugging](../debugging) section.

The SDK also provides a [testing](https://github.com/cloudquery/cq-provider-sdk/tree/main/provider/testing) package/helper to minimize the boilerplate needed to test your provider.
