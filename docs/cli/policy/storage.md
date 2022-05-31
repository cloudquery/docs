# Storage


Users can store the results of a `cloudquery policy run` invocation directly in the Postgres Database that holds the configuration data. This enables users to unlock more downstream workflows like monitoring security results in your favorite BI tool and alerting.

## Table Schema

### Table: policy_executions
Holds information about the source of the policy and high level metrics about the execution run 
#### Columns
| Name        | Type           | Description  |
| ------------- | ------------- | -----  |
|id|uuid|Unique identifier for policy run|
|timestamp|timestamp|Timestamp at which the policy run began|
|scheme|text|URL scheme that defines from where the policy was loaded|
|location|text|Full path that defines from where the policy was loaded|
|policy_name|text|Name of the policy|
|selector|text|User defined path selector|
|sha256_hash|text|hash of the policy to be able to compare multiple versions of the same policy|
|version|text|Version identifier for the policy|
|checks_total|int|Number of checks that were run|
|checks_failed|int|Number of checks that failed|
|checks_passed|int|Number of checks that passed|




### Table: check_results
Holds information about the source of the policy and high level metrics about the execution run 
#### Columns
| Name        | Type           | Description  |
| ------------- | ------------- | -----  |
|execution_id|uuid|(FK)|
|execution_timestamp|timestamp|{{column.Description}}|
|name|text|{{column.Description}}|
|selector|text|{{column.Description}}|
|description|text|{{column.Description}}|
|status|text|{{column.Description}}|
|raw_results|jsonb|{{column.Description}}|
|error|text|{{column.Description}}|
  