# CloudQuery History

Achieving better visibility into our cloud infrastructure is key in maintaining security, compliance, cost and operational efficiency, is why we started CloudQuery in the [first](https://www.cloudquery.io/blog/announcing-cloudquery-seed-funding) place. Maintaining a historical records of your cloud infrastructure configuration is an integral part of your cloud environment lifecycle.

## Why TimescaleDB?

TimescaleDB is an open-source relational database for time-series data. It uses full SQL and works as an extension to PostgreSQL, Making it a natural choice to extend CloudQuery's capabilities to support the best in class Cloud Asset Inventory.

## Setup

Make sure you read our [Getting Started]("getting-started") section first.

### Installation

CloudQuery History needs a a PostgreSQL instance with TimescaleDB extension installed or a TimescaleDB instance (>12). You can either spawn a local one (usually good for development and local testing)
or connect to an existing one. For more install options of TimescaleDB see their [guide](https://docs.timescale.com/timescaledb/latest/how-to-guides/install-timescaledb/)

For local, you can use the following docker command:

```bash
docker run -d --name timescaledb -p 5432:5432 -e POSTGRES_PASSWORD=password timescale/timescaledb:latest-pg12
```

### Configuration

The history block in our `config.hcl` allows us to configure our history preferences. Currently we have the following options:

- **Retention** [Optional]: defines the retention policy of your data and how long it should exist in days, by default is 7 day. 
- **TimeInterval** [Optional]: Defines how history chunks are split by time, defaults to one chunk per 24 hours. See TimescaleDB [docs](https://docs.timescale.com/api/latest/distributed-hypertables/create_distributed_hypertable/#sample-usage) for more info on this behavior.
- **TimeTruncation** [Optional]: truncates fetch time by hour, for example if we fetch with TimeTruncation = 1 at 11:25 the fetch date will truncate to 11:00, defaults to 24 hours, which means one set of fetch data per day. Data fetched on the **same** truncation date will be replaced.


```
cloudquery 
  # history block configuration makes cloudquery run in history mode
  history {
    // Save data retention for 7 days
    retention = 7
    // Truncate our fetch by 6 hours per fetch
    truncation = 6
  }
  # ... continuation of cloudquery block (connection, providers, etc')
}
```

## Querying

CloudQuery will create a new schema called `history` which holds full historical data for each table. In our public schema we have `views` that fetch the **latest** fetch data of each tabls. This allows your previous queries before enabling history mode to work out of the box. 

```SQL

-- Will select all historical fetches of aws_iam_users
SELECT * FROM history.aws_iam_users

-- Will select the latest fetch of aws_iam_users
SELECT * from aws_iam_users
```
