# Helm Chart

The Helm chart deploys a CloudQuery fetch CronJob and everything required to execute it.

The chart source can be found here [github.com/cloudquery/helm-charts](https://github.com/cloudquery/helm-charts).

## Install CloudQuery on a Kubernetes cluster

```bash
~$ git clone https://github.com/cloudquery/helm-charts.git
~$ cd helm-charts
```

### Prerequisites

* system configured to access a kubernetes cluster.
* [Helm v3](https://helm.sh) installed and able to access the cluster.
* PostgreSQL database (>11) (e.g. self hosted, via Helm, CloudSQL, RDS, etc.).

### Download Helm Chart Dependencies

Download Helm dependencies:

```bash
~/helm-charts$ helm dependencies update
```
 
### Install CloudQuery with Helm Chart

Example installation with AWS provider.

Create values override file:

```yaml
# override.yaml

# Required CloudQuery config.
config:
  # CloudQuery config.hcl content.
  cloudquery: |-
    cloudquery {
      plugin_directory = "./cq/providers"

      provider "aws" {
        source  = ""
        // Use environment variable from block below.
        version = "${AWS_VERSION}"
      }
    }

    provider "aws" {
      configuration {
        // Optional. Enable AWS SDK debug logging.
        aws_debug = false
      }

      // list of resources to fetch
      resources = [
        "ec2.instances",
      ]

      // enables partial fetching, allowing for any failures to not stop full resource pull
      enable_partial_fetch = true
    }
  # The connection block specifies to which database you should connect via dsn argument.
  dsn: "host=postgres.svc.cluster.local user=postgres password=pass database=postgres port=5432 sslmode=disable"
  # Environment variables for CloudQuery run.
  env:
    CQ_VAR_AWS_VERSION: "latest"
  # Secret environment variables for CloudQuery run.
  secret:
    AWS_ACCESS_KEY_ID: "AKIAIOSFODNN7EXAMPLE"
    AWS_SECRET_ACCESS_KEY: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
```

Run helm installation:

```bash
~/helm-charts$ helm install -f override.yaml cloudquery .
```

## Configuration

### Adjust the CronJob frequency

The default is every day at midnight.
More information regarding cronjob schedules can be found here: [crontab.guru](https://crontab.guru/#0_0_*_*_*).

Include this block in the override file:

```yaml
schedule: "0 0 * * *"
```

### Send logs to Loki with Promtail

Include this block in the override file:

```yaml
promtail:
  enabled: true
  config:
    lokiAddress: http://loki-gateway/loki/api/v1/push
```
