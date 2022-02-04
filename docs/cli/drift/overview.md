# Overview

CloudQuery CLI can be used to detect and alert on IaC (Infrastructure-as-code, Terraform, pulumi, etc...) drift both locally and in the CI.

> **Infrastructure Drift** - When what is defined in your IaC is different from what is provisioned in your Cloud. This is a very common scenario and can happen due to human error, manual changes and various other reasons. Check out more details in our [blog](https://cloudquery.io/blog/announcing-drift-detection)

## Getting Started

Currently drifting between AWS and Terraform is supported. CloudQuery drift detection is currently in **alpha (experimental)** state, so we welcome any feedback but it’s not yet ready for production use.

### Configuration

First we need to have a configuration file to help point the CloudQuery CLI to the various resources needed. Fortunately it’s easy to generate one with just a command:

```bash
cloudquery init aws
```

If you have multiple cloud providers, you can add-on extra ones, like `cloudquery init aws gcp` and so on.
This command will generate a `config.hcl` file in the current directory. You don’t really need to edit this file much, just edit the “connection” block and change the DSN to point to your PostgreSQL installation.

If you dive deeper into this file, you can:

 - Limit fetching of resources (specify which endpoints to hit while reading your cloud installation) and set up API backoffs.
 - Specify which resources to drift on, or ignore specific resources (based on resource type, tags, type + ID, or type + tags).
 - Filter by AWS Account ID while drifting (if you happen to keep multiple accounts in a single database, and you have only some that are managed by Terraform).
 - Specify a “permanent” list of Terraform tfstate files, using S3 or local backends. This way you don’t need to specify a tfstate file every time you drift.
 - Turn deep mode on or off per resource type.
 - Customize how resources are matched between the cloud provider and TFState.

### Running

You don’t need any of this stuff to start. Just fetch your installation by running:

```bash
cloudquery fetch
```

Then check for drifts

```bash
cloudquery drift scan /path/to/the/tfstate/file.tfstate
```

### Results
Scan results will look something like this:

```
=== DRIFT RESULTS  ===
5 Resources not managed by Terraform
aws:ec2.ebs_volumes:
- vol-id1
- vol-id2
aws:ec2.instances:
- i-id1
- i-id2
aws:ec2.security_groups:
- sg-id1
93 Resources managed by Terraform (equal IDs)
=== SUMMARY ===
Total number of resources: 98
- 5 not managed by Terraform
- 93 managed by Terraform (equal IDs)
- 94.89% covered by Terraform
```

### Category Breakdown

Results are broken down into 5 categories, and for each category we also list the IDs of the offending resources.

#### N Resources not managed by Terraform

These are the resources that were found in your AWS account but not defined in your Terraform state. So, one can say that these are the manually created resources from the AWS Console, without the use of Terraform.

N Resources in Terraform state but missing on the cloud provider

These are the resources that were deleted from your AWS account, or they simply weren’t ever there. They are still in your tfstate file though, so we are able to detect what’s missing. If you have unexpected results here, check if you’re running the correct TFstate file or fetching the correct AWS account.

#### N Resources managed by Terraform but drifted

You will only see this if you are running drift with deep mode enabled, by either running `scan` with `--deep` or by editing the config. These resources are the ones that match the TFstate file, but not all attributes. You can customize which attributes should be matched with the config, or see what’s happening (which attributes match and which don’t) if you run with `--deep --debug` (which will then print nice tables for you to digest).

#### N Resources managed by Terraform (equal IDs)

These are the resources that exist both on the TFstate file and your AWS account. Here, the potentially long resource list won’t have been printed for you, unless you ran `scan` with the `--list-managed` flag.

#### N Resources managed by Terraform (equal IDs & attributes)

Congratulations, these resources are perfectly in-sync (as far as we can tell) between your AWS account and the TFstate file. Again, the resource IDs won’t be printed unless you’re using the `--list-managed` flag.

### Summary

The Summary block will show a breakdown of number of resources per category, plus a coverage percentage which is calculated using the formula:

> (number_of_resources_managed_by_terraform / total_number_of_resources) * 100

Simply put, what’s not covered are the ones that were either missing from your TFstate file (extra resources on cloud) or missing on your AWS account (extra resources on TFstate)

### Automating Result Handling

You can use the `--output /path/to/file.json` option to get the drift results in JSON format, which is then usable in automation tools. This is where you can show off your jq-fu.