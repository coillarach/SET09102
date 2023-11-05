# Establishing a team workflow

The purpose of this practical is to continue with the team startup process. There are
five main tasks:

* Familiarise yourself with C# and .NET MAUI by building a test app that uses an SQLite database
* Decide on a standard team workflow that everyone should follow when working on a GitHub issue
* Import the list of issues into your team project
* Choose an issue for each person on the team to work on and complete it following the team workflow
* As a stretch goal, implement continuous integration (CI)

## Getting started with .NET MAUI

To get familiar with C# development using MAUI, you need to follow the tutorials that you will
find in the _**Tutorials**_ folder. They use the example of a simple notes application which is
developed in a series of steps to use the MVVM pattern and an SQLite database.


## Team workflow

As a team, you need to decide what your workflow will include. You are advised to build on
the basic [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) and to add any additional steps in the process that you think 
appropriate. Remember not to over-complicate in the early stages.

Once the team has decided on the workflow, it needs to described in a file called 
`workflow.md` in the documentation folder. One person on the team should create the file
and commit it.

## Import the issue list

The issues for the project can be fund in the `issues` folder divided up by the week of their 
release. To transfer an issue to your team repo, copy the content and paste it into the new
issue dialog. Remember to make use of the people on your team who have used GitHub before if
you are unclar how to do this.

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
