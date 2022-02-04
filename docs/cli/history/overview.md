# Overview

Achieving better visibility into your cloud infrastructure is key in maintaining security, compliance, cost and operational efficiency, and is why we started CloudQuery [in the first place](https://www.cloudquery.io/blog/announcing-cloudquery-seed-funding). Maintaining historical records of your cloud infrastructure configuration is an integral part of your cloud environment lifecycle.

Check the [configuration](./configuration) section on how to setup history for your CloudQuery instance.

## Why TimescaleDB?

TimescaleDB is an open-source relational database for time-series data. It uses SQL and works as an extension to PostgreSQL, Making it a natural choice to extend CloudQuery's capabilities to support the best in class Cloud Asset Inventory.


### Asset Snapshot History vs Audit Logs

Current native solutions like AWS CloudTrail, GCP Cloud Audit Log, Azure Activity/Resource Logs and any other SaaS services that have audit logs, record only API calls and changes. Obviously, it is advised to enable them (if not already enabled by default), as they can help with investigation & compliance. 

Audit logs are great, although they only focus on what **changed** and not what was the **state** of your whole cloud account at a certain point in time. CloudQuery History provides full historical snapshots of your cloud asset inventory, unlocking the following benefits: 

- **Visualize Historical State:** Enhance your current visualization workflows such as Grafana and re-use the [dashboards](https://www.cloudquery.io/blog/open-source-cloud-asset-inventory-with-cloudquery-and-grafana) to view current and historical state.
- **Alert on change using standard SQL:** Use TimescaleDB's [hyperfunctions](https://docs.timescale.com/api/latest/hyperfunctions/) and [Continuous aggregates](https://docs.timescale.com/api/latest/continuous-aggregates/) to aggregate at predefined intervals and materialize results and find changes that occurred between fetches.
- **Compliance:** To ensure you were compliant not only at a point in time but also over time, you can reuse pre-made and custom [CloudQuery Policies](https://hub.cloudquery.io/policies) to ensure compliance over time.
- **Visibility:** Find resources that might be already deleted but you need to understand where they were created and get metadata about them.
- **Postmortems and incident response:** Full historical snapshots of your cloud assets allow you to gain better insights of what happened in your environment and determine the blast radius. Reuse any standard analytics or BI tools.

:::note
Asset snapshots don't support capturing *ALL* changes, as we can't tell if resources were created and destroyed in the time between fetches.
:::

