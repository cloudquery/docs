# Proxy settings

Proxy can be set using standard environment variables for proxy configuration. It allows to run cloudquery traffic through a proxy server. To configure a proxy for https requests set `HTTPS_PROXY` environment variable. For http requests set `HTTP_PROXY` environment variable.

Example:

```bash
export HTTPS_PROXY=http://example.com:3128/proxy
export HTTP_PROXY=http://example.com:3128/proxy
cloudquery fetch 
```

:::tip
`HTTPS` in `HTTPS_PROXY` variable name means that it is a proxy for https requests, not the type of proxy, so value can start with `http://`.
:::
