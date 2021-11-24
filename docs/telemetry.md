# Telemetry

CloudQuery collects anonymous usage information about how the software is used.

## What is Stored

- Which operation (fetch, policy, drift, ...) was executed
- How long the operation took and whether it succeeded
- Whether you're running CloudQuery in a CI environment
- Installed CloudQuery providers on your system along with their versions
- Version and build date of the `cloudquery` binary you're using
- Basic OpenTelemetry trace data about which part of the operation took how long

### For identification purposes

- A unique user "cookie", which is a randomly generated UUID
- A SHA1 hash of your IP address
- Your geographical location based on the IP address

> The identification cookie is stored in the `.cq/telemetry-cookie` file. If you wish to anonymize your requests further but still keep sending us usage information, you could remove this file before every invocation (or create a directory with the same name, which also stops the cookie from getting created)

## What is NOT Stored

- We don't store your IP address
- We don't store any of the command arguments or options (as they might contain sensitive information)
- We don't store the contents of the error messages (as they might also contain sensitive information)
- We don't store any credentials
- We don't store any logs

## Inspecting Telemetry Contents

To check what kind of data is collected, invoke `cloudquery` executable with the `--inspect-telemetry` option. This will stop sending telemetry information and write it to a local file in the current directory, `cq-telemetry.txt`. You can then inspect file contents and decide whether to opt-out or not.

```bash
# Invoke CloudQuery
cloudquery --inspect-telemetry [operation] [arguments]

# Inspect telemetry output
cat cq-telemetry.txt | less
```

## Opting out of Telemetry

To opt out of telemetry, simply invoke `cloudquery` executable with the `--no-telemetry` option, or set the `CQ_NO_TELEMETRY` environment variable.

```bash
# Set the environment variable
export CQ_NO_TELEMETRY=1

# Invoke CloudQuery. No telemetry information will be sent
cloudquery [operation] [arguments]
```

## Sending Debug Info with Telemetry

If you wish to send us more information, use the `--debug-telemetry` option or set the `CQ_DEBUG_TELEMETRY` environment variable. This will send the contents of the error messages (if there are any) and might help us iron out any issues.
