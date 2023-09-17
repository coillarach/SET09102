# Establishing a team workflow

*Under development*

The purpose of this practical is to continue with the team startup process. There are
five main tasks:

* Familiarise yourself with C# and .NET MAUI by building a test app that uses an SQLite database
* Decide on a standard team workflow that everyone should follow when working on a GitHub issue
* Import the list of issues into your team project
* Choose an issue for each person on the team to work on and complete it following the team workflow
* As a stretch goal, implement continuous integration (CI)

## Getting started with .NET MAUI

To get familiar with C# development using MAUI, you need to follow two Microsoft
tutorials. The first takes you through the steps to create a simple notes application which
stores notes as text files. The second tutorial shows you how to upgrade your app to
use a local SQLite database instead. The first tutorial will take a little over an hour to 
complete and the second will take around 30 minutes. The links are

* [Getting started](https://learn.microsoft.com/en-us/dotnet/maui/tutorials/notes-app/)
* [Adding a databse](https://learn.microsoft.com/en-us/dotnet/maui/data-cloud/database-sqlite)

## Team workflow

As a team, you need to decide what your workflow will include. You are advised to build on
the basic [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) and to add any additional steps in the process that you think 
appropriate. Remember not to over-complicate in the early stages.

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

The majority of issues on the list will be related to database operations similar to those
in the tutorial app. You can use the tutorial code as a starting point and adapt it to 
complete the issue.

The purpose of this week's practical exercise is to ensure that everyone on the team is familiar
with the team workflow, and knows how to complete all the steps using GitHub. It is not to stretch 
your software development skills. That comes later.

## Continuous integration

A stretch goal this week is to think about automating parts of the team workflow. GitHub offers
a service that builds C# applications and you could use that to check that changes to your 
application work well together when combined. 

## Links

* [Continuous integration for .NET](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-net)
