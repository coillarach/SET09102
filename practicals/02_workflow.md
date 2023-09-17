# Establishing a team workflow

*Under development*

The purpose of this practical is to continue with the team startup process. There are
five main tasks:

* Ensure that your personal development environment includes an SQLite database
* Decide on a standard team workflow that everyone should follow when working on a
  GitHub issue
* Import the list of issues into your team project
* Choose a relatively simple issue for each person on the team to work on and complete
  it following the team workflow
* Implement continuous integration (CI)

## Database

As an application that facilitates communication, the UNDAC app requires shared, persistent 
storage. Eventually, that will be a shared database on a remote server. However, the app
also needs to operate in the absence of an internet connection, and therefore requires a
local database as well. In the early stages, all database operations will be local to simplify 
the development. Synchronisation with the remote database will be added later.

To add an SQLite database to your project, use the NuGet tool built into Visual Studio. 

1. Right-click on the project in the left-hand panel and select `Manage NuGet packages...`.
2. Search for the `sqlite-net-pcl` package and add it

## Team workflow

As a team, you need to decide what your workflow will include. You are advised to build on
the basic [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) and to add any additional steps in the process that you think 
appropriate. Remember not to over-complicate in the esrly stages.

Once the team has decided on the workflow, it needs to described in a file called 
`workflow.md` in the documentation folder. One person on the team should create the file
and commit it.

## Import the issue list

*Under development*

## Individual development tasks

Each person on the team should accept a task from the imported list (product backlog). All the
tasks this week are relatively simple, but some require more familiarity with the technology
than others. As a team, you should decide on an appropriate allocation of tasks so that no-one 
is out of their depth.

The purpose of this week's practical exercise is to ensure that everyone on the team is familiar
with the team workflow, and knows how to complete all the steps using GitHub. It is not to stretch 
your software development skills. That comes later.

## Continuous integration

A stretch goal this week is to think about automating parts of the team workflow. GitHub offers
a service that builds C# applications and you could use that to check that changes to your 
application work well together when combined. 

## Links

* [Continuous integration for .NET](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-net)
