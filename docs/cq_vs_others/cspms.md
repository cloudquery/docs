# CloudQuery vs CSPMs (Cloud Security Posture Management)

CSPMs are set of closed-source enterprise products to monitor, detect and response to threats and mis-configurations in the cloud.

**Key Differences:**
- **Open Source Pluggable Architecture**: CloudQuery has an open-source [pluggable architecture](https://hub.cloudquery.io) which means you can contribute missing resources to existing providers or you can create your own providers in order to grab data from proprietary APIs or other SaaS applications.
- **Vanilla PostgreSQL**: CloudQuery uses vanilla PostgreSQL which makes it play nicely with the whole SQL eco-system and gives you the ability to re-use other tools like Grafana/BI. CSPMs are usually using a proprietary query languages and databases and thus doesn't give you the ability to re-use other tools easily.
- **Policy Language**: CQ standard SQL as the query engine to define rules. CSPMs use custom query languages and closed source databases.
- **Pricing**: CloudQuery is open-source and thus you will pay only for the hosting of your PostgreSQL (you can use RDS, or any other managed version on whatever cloud provider you would like) and the compute for running [CQ binary](../deployment/helm-chart). Nearly all CSPMs require long term contracts and have variable pricing which makes large accounts and organizations expensive to monitor.

