# Test battles

The format of this week's practical is slightly different from the others. You will be 
working in your team, but rather than collaborating on the main project, you will be 
competing against another team. You will be provided with a new repositories specifically
for the competition which contains code stubs that require implementation.

Each team will implement the required methods and create unit tests for them. After the
session, the tests from one team will be run against the code from a second team.
If the code for an issue 
passes all the tests written by the other team, the first team gets a point; if the code fails 
one or more tests, the testing team gets a point. The winning team is the one with the most 
points.

## Preparation

To create your unit tests, your will need to use 
[MSTest](https://learn.microsoft.com/en-us/visualstudio/test/getting-started-with-unit-testing?view=vs-2022&tabs=dotnet%2Cmstest)
which can be installed as a NuGet package.

If you need to create mock objects, use the 
[Moq](https://learn.microsoft.com/en-us/shows/visual-studio-toolbox/unit-testing-moq-framework) 
framework which can also be installed with NuGet.

Each team will need to clone the template repo and ensure that the whole team can access
it. However, you should not make your repo public because that would make them accessible
to the other team.

Make sure that your repo is accessible to the module tutors.

There are four teams in total. For this exercise, they will be paired up with the pairing 
decided at random.

## Rules of engagement

The signature for each method to be implemented is provided. Teams must use the signature 
provided. If a team changes the signature independently (e.g. by renaming a 
parameter or by changing the number or datatype of parameters), they forfeit the point to
the other team.

Method signature *may* be changed by agreement and consultation with the module tutor.

Trivial tests that simply fail without actually running any code are considered illegal. If 
any such tests are found, the point goes automatically to the coding team.

## Appeals

If a team believes that the testing team has forced a win by contravening any of the rules
above, they may appeal the automatic result. The issue will then be decided by the module
tutor. If the other team is deemed to have acted unfairly, the point will go to the team
making the appeal. 
