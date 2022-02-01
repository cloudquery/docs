# Docker

It is possible to use CloudQuery in an isolated container, you can pull the relevant image with the docker commands shown on [getting started](../getting-started/getting-started-with-aws) guide.

## Configuration

CloudQuery uses a HCL file as the primary means of configuration, you can execute the [`cloudquery init`](commands/init) to generate a file if you do not already have one. For the CloudQuery docker container to use this configuration file you will need to mount the volume to the container like so:

```docker
docker run \
  -v <PATH TO CONFIG>/config.hcl:/config/config.hcl \
  ghcr.io/cloudquery/cloudquery:latest \
  fetch --config /config/config.hcl
```

As with running any `cloudquery` command on your CLI you can override the config with the [optional flags](commands/options) with the docker container. You will also need to make sure you load any ENV variables for providers, such as your `AWS_*` keys etc.

:::tip
If you are running Docker on an ARM Apple device and you see a segmentation fault when running the container like so `qemu: uncaught target signal 11 (Segmentation fault) - core dumped`; please make sure you are running the latest Docker for Mac release.
:::

## Caching

Due to the way `cloudquery` is [architected](../developers/architecture) it downloads all the components to interact with providers and policies. This means that with a docker container it runs the download step each state as the local cache is lost between executions. To avoid this we recommend mounting a volume to cache the data and configuring `cloudquery` to use this via the `--plugin-dir` and `--policy-dir` optional flags. An example of this would be:

```docker
docker run \
  -v <PATH TO CACHE>/.cq:/cache/.cq \
  -v <PATH TO CONFIG>/config.hcl:/config/config.hcl \
  ghcr.io/cloudquery/cloudquery:latest \
  fetch --config /config/config.hcl \
    --plugin-dir /cache/.cq/providers \
    --policy-dir /cache/.cq/policies
```

:::note
Depending on your operating system, the built components maybe different between your local system and the container. To avoid the different please use a separate cache directory for the container than a local instance of `cloudquery`.
:::

## Fetching data

For the specifics of how `cloudquery fetch` works, and what additional flags it uses please consult the [command page](commands/fetch). The command will check the `config.hcl` provided and proceed to download any providers defined, uploading the schema to the database, and retrieving the service data from the provider. An example of this command using it with AWS would be:

```docker
docker run \
  -e AWS_ACCESS_KEY_ID=<YOUR AWS ACCESS KEY ID> \
  -e AWS_SECRET_ACCESS_KEY=<YOU AWS SECRET ACCESS KEY> \
  -v ~/Development/cloudquery-grafana/config.hcl:/config/config.hcl \
  ghcr.io/cloudquery/cloudquery:latest \
  fetch --config /config/config.hcl
```
:::note
The docker container is set to be verbose by default, which produces a lot of console logs. This is by design.
:::

## Running a Policy

After getting data from your providers with `fetch`, at this point you can run policies against this data, to do this you need to `download` and `run` a policy. To download and add a policy you can execute the following command:

```docker
docker run \
  -v <PATH TO CACHE>/.cq:/data/.cq \
  -v <PATH TO CONFIG>/config.hcl:/config/config.hcl \
  ghcr.io/cloudquery/cloudquery:latest \
  policy download aws-cis-1.2.0 --config /config/config.hcl
    --plugin-dir /data/.cq/providers \
    --policy-dir /data/.cq/policies
```

To check for the specific options for `cloudquery policy download` please consult the [command page](commands/policy-download).

This will return a block for you to add to your `config.hcl` that should be similar to:

```bash
Add this block into your CloudQuery config file:
policy "cloudquery-policies-aws-cis-1.2.0" {
  type = "remote"
  source = "https://github.com/cloudquery-policies/aws-cis-1.2.0.git"
  sub_path = ""
  version = ""
}
```

Now that the policy has been downloaded and cached you can execute the `cloudquery policy run` command to execute the policy:

```docker
docker run \
  -v <PATH TO CACHE>/.cq:/data/.cq \
  -v <PATH TO CONFIG>/config.hcl:/config/config.hcl \
  ghcr.io/cloudquery/cloudquery:latest \
  policy run --config /config/config.hcl \
    --plugin-dir /data/.cq/providers \
    --policy-dir /data/.cq/policies
```

To check for the specific options for `cloudquery policy run` please consult the [command page](commands/policy-run).
