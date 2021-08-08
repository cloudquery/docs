# completion

Installs shell completion for CloudQuery CLI.

## Usage
cloudquery completion [bash|zsh|fish|powershell]

### Bash

```bash
$ source <(cloudquery completion bash)

# To load completions for each session, execute once:
# Linux:
$ cloudquery completion bash > /etc/bash_completion.d/cloudquery
# MacOS:
$ cloudquery completion bash > /usr/local/etc/bash_completion.d/cloudquery
```

### Zsh

```shell
# If shell completion is not already enabled in your environment, you will need
# to enable it. You can execute the following once:

$ echo "autoload -U compinit; compinit" >> ~/.zshrc

# To load completions for each session, execute once:
$ cloudquery completion zsh > "${fpath[1]}/_cloudquery"

# You will need to start a new shell for this setup to take effect.
```

### Fish

```shell
$ cloudquery completion fish | source

# To load completions for each session, execute once:
$ cloudquery completion fish > ~/.config/fish/completions/cloudquery.fish
```

### Powershell

```powershell
PS> cloudquery completion powershell | Out-String | Invoke-Expression

# To load completions for every new session, run:
PS> cloudquery completion powershell > cloudquery.ps1
# and source this file from your powershell profile.
```
