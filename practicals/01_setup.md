# Setup: Visual Studio and GitHub

*Under development*

Several of the practical exercises in this module require you to work as part of a team.
The goal this week is to ensure that everyone has a properly-configured working 
environment. That includes 

* Creating a shared GitHub repository for the team
* Setting up a project in GitHub with an integrated task board
* Configuring a personal copy of Visual Studio appropriately
* Cloning the shared repository

That is the extent of the practical work. However, the team as a whole will need to make 
some decisions. 

## Recommendations

The majority of people will have done SET08103, but some may be direct entrants and
will not have done that module. As a team, you will need to organise a buddy system
which pairs experienced people with less experienced people to help bring them up to
speed.

We will be using C# and Visual Studio (VS). Similarly, some people will have experience 
with that IDE but some may not. You will need to organise a similar buddy system to help
those who are unfamiliar with VS find their way around. If you can combine the two 
requirements (SEM & VS) it will make your familiarisation process more efficient.

It is important that the whole team uses the same configuration. Decide on one or two people
who are familiar with GitHub to set up a repository for the whole team to share.

Likewise, choose one or two people who know their way around Visual Studio to create the
initial project and check it into GitHub so that it can be cloned by the rest of the team.

Please note that you may need to install the .NET MAUI templates before you can create a
new MAUI app in Visual Studio. To do this

* In Visual Studio, search for the .NET MAUI App template. If it is not available,
  follow the instructions [here](https://learn.microsoft.com/en-us/dotnet/maui/get-started/installation?tabs=vswin)
* Start a Windows CMD shell as administrator
* `cd` to C:/Program Files/dotnet
* Run the command `dotnet new install Microsoft.Maui.Templates`
* Restart Visual Studio

## Documentation

The one content requirement for this week is to create a documentation folder in the
shared repository and create a document called `setup.md` containing instructions
on how to set up a personal working environment. You need to decide on the best
approach for doing this as a team, but the content needs to be checked to make sure
that the instructions are clear and correct.

## The scenario

The last task this week is to read about the requirements for the team development 
project so that you understand it at least in outline. It has been specifically
chosen because it is very complex. It is unlikely that you will be able to fully
understand every aspect on one reading. You can find the details on the 
[scenario page](scenario.md).
