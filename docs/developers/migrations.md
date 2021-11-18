# Migrations

This is an advanced section describing implementing migrations for a CloudQuery Provider. Before reading this section make sure you have read the [developing new provider](./developers/developing-new-provider.md) guide first.

CloudQuery is backed by a SQL database, providers consistently change between versions and can create breaking changes. Migrations is a classic approach to support changes without remaking the database. Under the hood CloudQuery uses [go-migrate](https://github.com/golang-migrate/migrate).

### Adding provider migrations support 

The CloudQuery SDK allows to easily send a list of embedded sql migration files to the core from a provider, we are required to only to added the following to our provider struct


### CloudQuery Provider Responsibilities

* Intended to be run only by cloudquery-core.
* Communicates with cloudquery-core over gRPC to receive commands and actions.
* Initialization, authentication, and fetching data via third-party cloud/SaaS API.
