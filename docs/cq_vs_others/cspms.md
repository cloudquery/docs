# CloudQuery vs CSPMs (Cloud Security Posture Management)

CSPMs are set of closed-source enterprise products to monitor, detect and response to threats and mis-configurations in the cloud.

**Key Differences:**
- **Open Source Pluggable Architecture**: CloudQuery has an open-source [pluggable architecture](https://hub.cloudquery.io) which means you can contribute missing resources to either official APIs or even create your own integrations to proprietry APIs or SaaS applications.
- **Vanilla PostgreSQL**: CloudQuery uses vanilla PostgreSQL which makes it play nicely with the whole SQL eco-system and gives you the ability to re-use other tools like Grafana/BI. CSPMs are usually using a proprietary query languages and databases and thus doesn't give you the ability to re-use other tools easily.
- **Policy Language**: CQ uses an HCL configuration with SQL as the query engine to define rules. CSPMs use custom query languages and closed source databases.
- **Pricing**: CloudQuery is open-source and thus you will pay only for the hosting of your PostgreSQL (you can use RDS, or any other managed version) and the compute for running [CQ binary](../deployment/helm-chart). CSPMs can sometimes cost alot of money for big accounts.

