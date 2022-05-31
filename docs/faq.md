# FAQ

### Does CloudQuery access any application data in my cloud?

No. CloudQuery only access meta-data and configuration data. It never pulls data from your application databases or cloud storage files.

### What is "//"? How is it different from "/" and where should it go? {#what-is-double-slash}

The `//` indicator is used when specifying a subpolicy/subquery for `cloudquery policy run`. It is an idiosyncrasy of the way the `cloudquery` CLI works - it separates the "path to the policy" from the "path to the subpolicy (in the policy)". It must always appear **right after the root policy**.

So, if the policy I'd like to run is `./my_policy`, and I would like
to run the `old-stopped-ec2-instances` query in the `ec2` subpolicy, I would use:

```bash
cloudquery policy run ./my_policy//ec2/old-stopped-ec2-instances
```

It is worth mentioning here that the `cloudquery` CLI also supports running policies from 
[our official github](https://github.com/cloudquery-policies). The `//` separator serves the same function 
described above - separating the "path to the policy" from the "path inside the policy". In case of running
policies from github, it helps the `cloudquery` CLI to know which repository to clone.

So, to run the `foundational_security` **subpolicy** in the `aws` **policy**, we run.

```bash
cloudquery policy run aws//foundational_security
```