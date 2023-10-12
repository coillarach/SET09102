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

If the .NET MAUI is already installed using Visual Studio Installer, uninstall it together with .NET and 
follow these steps:

1. Delete all files and folders in `C:/Program Files (x86)/dotnet`
2. Run the command `dotnet new install Microsoft.Maui.Templates`
3. Install .NET MAUI and .NET again using Visual Studio Installer

</details>

<details>
<summary>Setting up unit tests in Visual Studio</summary>
<br/>
This is not as simple as it first appears because there are several unit test frameworks 
available with different dependencies. .NET MAUI requires the .NET 7.0 build framework and
so we need a test framework that is compatible. These notes explain how to install the 
[xUnit](https://xunit.net/) framework and use it to create a test. Unless otherwise
specified, default options are accepted wherever they exist. One implication of that is that 
the project folders are assumed to be siblings within the standard `repos` folder.

### Prepare project

There are three unnecessary `using` statements ate the start of the `GamePage.xaml.cs` file.
Usually, they are just ignored, but once a test project is included in the solution, they
cause import errors. These lines need to be removed.

Check to make sure the app project builds and runs correctly before carrying on.

### Create the test project

Open the project you wish to test in Visual Studio. In the Solution Explorer, right-click
on the solution (topmost) element and select _**Add/New Project...**_ from the context menu.

Type `xunit` into the search box and select the xUnit Test Project for C# as shown below.

![Adding an xUnit test project](../images/xunit_project.png)

Give the project an appropriate name and select the .NET 7.0 build framework before clicking
the *Create* button. As soon as the new project appears, you can right-click it and select
_**Run Tests**_ from the context menu. An empty test has been created by default which 
should pass.

### Link the app and test projects

The next step is to add the main project as a dependency. Right-click the *Dependencies*
folder and select _**Add Project Reference...**_. When the dialog appears, click the
checkbox next to the name of your original project and click *OK*.

At this stage, you may see warning symbols appear against the app project in the test project's
dependencies. These will disappear once the next step has been completed.

### Update the app project's `.csproj` file

Open the app project's `.cproj` file by double-clicking the project item in the solution
explorer. You should see lines similar to the snippet below

```xml
<PropertyGroup>
    <TargetFrameworks Condition="$([MSBUILD]::IsOSPlatform('windows'))">$(TargetFrameworks);net7.0-windows10.0.19041.0</TargetFrameworks>
    <OutputType>Exe</OutputType>
```

Your copy of the file may have an additional line immediately after the `<PropertyGroup>` 
element. If so, add `net7.0` to the list of target frameworks. Otherwise, add the line as 
shown below.

Your copy may have some comment lines before the `<OutputType>` element - just ignore these.

```xml
<PropertyGroup>
    <TargetFrameworks>net7.0</TargetFrameworks>
    <TargetFrameworks Condition="$([MSBUILD]::IsOSPlatform('windows'))">$(TargetFrameworks);net7.0-windows10.0.19041.0</TargetFrameworks>
    <OutputType>Exe</OutputType>
```

There is one more change to this file, and that is to modify the output type. Currently,
the project is configured to generate a `.exe` file, but the test requires a `.dll`. Because
`.dll` is the default, we can create that output type when running a test and a `.exe` 
otherwise by adding a condition to the `<OutputType>` element as shown below.

```xml
<PropertyGroup>
    <TargetFrameworks>net7.0</TargetFrameworks>
    <TargetFrameworks Condition="$([MSBUILD]::IsOSPlatform('windows'))">$(TargetFrameworks);net7.0-windows10.0.19041.0</TargetFrameworks>
    <OutputType Condition="'$(TargetFramework)' != 'net7.0'">Exe</OutputType>
```

After making the changes, save the file and reload the project when prompted.

### Update the test project's `.csproj` file

Now open the test project's `.csproj` file by double-clicking the solution explorer item
and locate the following lines.

```xml
<PropertyGroup>
    <TargetFrameworks>net7.0</TargetFrameworks>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
```

Add an additional line after the `<Nullable>` element as shown below. The rest
of the file remains the same.

```xml
<PropertyGroup>
    <TargetFrameworks>net7.0</TargetFrameworks>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <UseMaui>true</UseMaui>
```

Save the file and reload the project when prompted.

You will need to reload the project for the changes to take effect (restarting Visual
Studio will do this). Afterwards, you should be able to reference code from the app
project in your unit tests.

### Potential issues

<details>
<summary>Deployment error</summary>
Because we added a new target framework to the project (`net7.0`), Visual Studio has two
targets to choose from at the point you tell it to run the app. If yoou see the error below, 
it has chosen the wrong one:

![VS deployment error](../images/deploy_error_message.png)

To fix the problem, select the Windows framework option in the debug target field in the 
Visual Studio toolbar as illustrated below.

![VS debug target selection](../images/vs_target_framework.png)

</details>

<details>
<summary>Namespace not found error</summary>
<br/>
If you see error like those shown below, your test project folder is nested inside your
app project folder. This will not work - they need to be siblings in the same parent folder.

![Errors due to nested projects](../images/nesting_errors.png)

To fix this problem

1. Use the solution explorer to remove the test project from the solution
2. Remove the test project folder from the file system using your operating system file explorer
3. Back in the solution explorer, recreate the test project by right-clicking on the solution
   folder. Pay close attention to the part where you specify the location for the new project.

</details>

### Example test code

The example below shows how you would configure a test assuming that there is a method
called `DumbMethod()` in the `GamePage` class:

```c#
using Hangman;

namespace TestHangman
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            string gameType = "Easy";

            GamePage gamePage = new GamePage(gameType);

            Assert.Equal(1, gamePage.DumbMethod());
        }
    }
}
```

**NB**: Please note that to be accessible to the test project, the methods in the app
project need to be declared as `public`.

</details>

<details>
<summary>Adding app and test projects to the same git repo</summary>
<br/>
By default, Visual Studio creates a new folder of its own in a standard root directory.
(On Windows, this is `C:\Users\&lt;your username&gt;\source\repos`). When you create a
git repository for a project, the project folder is used as the repo root folder.

When you create a test project for your app, Visual Studio adds it as a sibling to the
app project, and for that reason it cannot be included in the original git repo.

One solution is to rearrange the folder structure as shown below.

```
repos
└───HangmanSolution/
    ├───Hangman/
    ├───TestHangman/
    └───Hangman.sln
```

The steps to rearrange your folders are as follows.

### Remove all existing git repos

To remove a local repo, use your OS file explorer or a command windows to remove the
following files from the project root directory

    .git
    .gitattributes
    .gitignore

### Remove projects from solution

In Visual Studio, right-click on both projects in the solution explorer and select
_**Remove**_ from the context menu. This removes the project from the solution, but
does not delete the underlying directory.

Once the projects have been removed, save the solution and close Visual Studio.

### Rearrange directories

In your OS file explorer or a command window, create the hierarchy shown above. The
steps are

1. Create the solution directory
2. Move both project directories into the solution directory
3. Move the solution file from its original location inside one of the project directories
   into the solution directory

### Add the projects back into the solution

Open Visual Studio and select the option to open an existing solution. Choose the solution
file in the solution directory.

In the solution explorer, right-click the solution and select _**Add/Existing Project...**_.
Select the `.csproj` for one of the projects and click *Open*. Do the same for the second
project.

### Recreate the git repo

In Visual Studio, select _**Create Git Repository**_ from the _**Git**_ menu. The 
solution folder is automatically selected as the location for the new repo and this
includes both of the projects.

</details>
