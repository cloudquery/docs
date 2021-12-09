# Welcome to CloudQuery

CloudQuery is the [open-source](https://github.com/cloudquery/cloudquery) cloud asset inventory powered by SQL.

CloudQuery extracts, transforms, and loads your cloud assets into normalized PostgreSQL tables enabling you to assess, audit, and monitor the configurations of your cloud assets.

## Key Features & Use Cases

### Cloud Asset Inventory Powered by SQL. Backed by PostgreSQL.

Create a cloud asset inventory in your own self-hosted PostgreSQL database where you can see an aggregated view of all assets, across cloud, account and services.

Visualization, analyze, monitor and alert with your current tools and worksflows such as Grafana.

CloudQuery supports [TimescaleDB](https://www.timescale.com/) PostgreSQL extension, giving you full [historical snapshots](./cli/history/overview) of your cloud asset inventory.

### Search & Visibility

Give developers, SREs, DevOps and security engineers a streamlined way to gain visibility and perform wide range of tasks. These tasks include security analytics, fleet management auditing and governance.

[CloudQuery Providers](https://hub.cloudquery.io) gives you the ability to gain visibility across accounts, different cloud providers, and SaaS applications.

### Policy as Code

Turn your security and compliance tasks to data problems and solve them with the best tools and practices in DataOps.

Use [CloudQuery Policies](./cli/policy/overview) to codify, version control and automate your security and compliance rules with SQL.


### IaC (Infrastructure-as-code) Drift Detection

Ensure your cloud assets maintains its desired state.

CloudQuery leverages its asset inventory to quickly detect drift against IaC (Terraform, more to come) which you can run both in the CI and locally.


### Extensible

CloudQuery is an open-source and extensible framework. All official and approved community providers and policies are listed in [CloudQuery Hub](https://hub.cloudquery.io). See [Developing New Provider](./developers/developing-new-provider.md).

