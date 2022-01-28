# Configuration

## Setup

Make sure you read our [Getting Started](https://docs.cloudquery.io/docs/getting-started) section first.

### Installation

CloudQuery History needs a a PostgreSQL instance with TimescaleDB extension installed or a TimescaleDB instance (version >= 12). You can either spawn a local one (usually good for development and local testing)
or connect to an existing one. For more install options of TimescaleDB see their [guide](https://docs.timescale.com/timescaledb/latest/how-to-guides/install-timescaledb/)

For local, you can use the following docker command:

```bash
docker run -d --name timescaledb -p 5432:5432 -e POSTGRES_PASSWORD=pass timescale/timescaledb:latest-pg12
```

### Configuration

#### DSN Format

Using TimescaleDB, the DSN format used in `config.hcl` needs to be in the URI format and it must start with `tsdb://`, as such:

```
cloudquery {
    connection {
        dsn = "tsdb://user:pass@localhost:5432/yourdb?sslmode=disable"
    }
}
```

This way CloudQuery knows you're pointing to a timescaledb instance in the DSN.

#### History Settings

The history block in our `config.hcl` allows us to configure our history preferences. Currently we have the following options:

- **Retention** [Optional]: defines the retention policy of your data and how long it should exist in days, by default is 7 day. 
- **Interval** [Optional]: Defines how history chunks are split by time, defaults to one chunk per 24 hours. See TimescaleDB [docs](https://docs.timescale.com/api/latest/distributed-hypertables/create_distributed_hypertable/#sample-usage) for more info on this behavior.
- **Truncation ** [Optional]: truncates fetch time by hour, for example if we fetch with TimeTruncation = 1 at 11:25 the fetch date will truncate to 11:00, defaults to 24 hours, which means one set of fetch data per day. Data fetched on the **same** truncation date will be replaced.


```
cloudquery {
  # history block configuration makes cloudquery run in history mode
  history {
    // Save data retention for 7 days
    retention = 7
    // Truncate our fetch by 6 hours per fetch
    truncation = 6
    // Tell Timescale to split our chunks in a daily interval (24 hours)
    interval = 24
  }
  # ... continuation of cloudquery block (connection, providers, etc')
}
```

## Querying

CloudQuery will create a new schema called `history` which holds full historical data for each table. In our public schema you will have `views` that fetch the **latest** fetch data of each tables. This allows the previous queries before enabling history mode to work out of the box. 

```SQL

-- Will select all historical fetches of historical fetches of aws_iam_users
SELECT * FROM history.aws_iam_users

-- Will select only the latest fetch of aws_iam_users
SELECT * from aws_iam_users
```

### Examples

Select all S3 buckets that where fetched yesterday and don't exist today, i.e find deleted buckets.
```
SELECT * FROM history.aws_s3_buckets WHERE cq_fetch_date BETWEEN now() - interval '2 day' and now() - interval '1 day'
EXCEPT
SELECT * FROM aws_s3_buckets 
```
