# CloudQuery vs Steampipe

Steampipe is using [PostgreSQL Foreign data wrappers](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) to create a PostgreSQL abstraction on top of APIs.

**Key Differences:**
* CloudQuery uses an EL (Extract-Load) approach which means supporting more databases and giving the user the ability to use any standard transformation (dbt,...) and visualization tools on top of PostgreSQL or any other supported database.
* Steampipe can work better for small scale live queries but if you need to get all your cloud assets in one place in big multi-accounts setups CloudQuery is a more scalable approach as you can scale EL (Extract-Load), Storage and Transformation workloads independently for each step.