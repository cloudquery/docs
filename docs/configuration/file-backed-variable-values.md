# File-backed variable values

It's possible to read a configuration value from the filesystem using the `file()` function. This function reads the contents of the file logically and sets the contents directly to the related variable:

    cloudquery {
      provider "aws" {
        // ...
      }

      connection {
          dsn = file("dsn.txt")
        }
    }

    // ...

In this example, `dsn.txt` is expected to be in the same directory as `config.hcl`. Relative (`../dsn.txt`) and absolute (`/path/to/dsn.txt`) paths are also supported.

:::tip
The file contents are used as-is, watch out for any trailing newlines or other disallowed characters.
:::
