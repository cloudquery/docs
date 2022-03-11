# Testing Policies

In order to continue to rely on policies we need to ensure that we are able to handle edge cases and make sure any changes do not result in a regression. To do that the most common way is to have a suite of test cases and ensure the output matches the expected output for specific inputs.

### High level overview of Policy Testing:

1. Create specific resources in provider that should lead to a known outcome of a check
2. Store configuration in database (`cloudquery fetch`)
3. Store database configuration and known good output of check in local filesystem
4. Confirm that control is still valid by ensuring that each configuration case continues to generate the same output


### What is a snapshot?

a snapshot is a partial copy of the database as it relates to a specific policy. This means that all relevant tables are exported to a local directory in order to be able to consistently replicate a specific scenario


### Setting up a Snapshot

To ensure that you are grabbing real data you will want to configure your resource to be in a specific configuration (can either be in a passing or failing). Once it is ready run

``` bash
cloudquery fetch
```

This will ensure that the database you are about to snapshot will have valid data


### Storing a Snapshot

`cloudquery policy snapshot <selector/to/specific/check> <output/directory>`

#### Example:
`cloudquery policy snapshot ../aws//foundational_security/apigateway/ApiGateway.2 test/snapshot-data`


:::caution
Prior to committing to remote repository:

validate that there is no sensitive information (account IDs, credentials or PII) in the csv

``` bash
go run tools/find-sensitive-strings.go
```
:::


### Running tests


The test running utility takes a relative or absolute path to a policy and a path to a directory where test snapshots are stored. The path of the test matches the selector for a corresponding check in the policy. If the results of the check do not match the expected results the test run will end immediately

*Note: At this time it is not possible to run only a single test, you have to run all tests in the entire directory


`cloudquery policy test <selector/to/root/policy> <output/directory>`

#### Example:
``` bash
cloudquery policy test ../aws test/snapshot-data
```

