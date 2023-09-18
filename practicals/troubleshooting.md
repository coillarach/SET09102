# Troubleshooting

Common problems and their solutions will be listed here. Use the page search facility to
see whether your issue is in the list. If you find a solution to a problem that might affect
other people, please ask for it to be added to this page.

<details>
<summary>MAUI project not listed in VS `create project` dialog</summary>

This [SO post](https://stackoverflow.com/questions/70507822/cant-find-net-maui-in-the-list-of-vs) 
provides a solution.

If the `dotnet` command is not recognised by your operating system, the containing directory is
not in your system path. To work around this, find out which directory `dotnet` is in, `cd` to
that directory and run the command from there.

</details>