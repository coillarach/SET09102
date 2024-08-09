# Team workflows

<script type="module">
	import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
	mermaid.initialize({
		startOnLoad: true,
		theme: 'default'
	});
</script>

<hr class="splash">

![Merlin Mann](../images/merlin_mann.png)<br/>*Photo by [Thomas Hawk](https://www.flickr.com/photos/thomashawk/2298694177)*

### Workflow is understanding your job, understanding your tools, and then not thinking about it any more.

<br/>

*Merlin Mann*

<hr class="splash">

###### Contents

1. [Environments](#environments)
2. [Branching and merging](#branching-and-merging)
3. [GitHub Flow](#github-flow)
4. [Issues and issue-related workflow](#issues-and-issue-related-workflow)
5. [Definition of Ready](#definition-of-ready)
6. [Definition of Done](#definition-of-done)
7. [Summary](#summary)
8. [Further reading](#further-reading)

When you are working on a string of similar tasks using the same tools it can get a
bit boring. A natural tendency is to internalise short and reliable patterns for 
getting the work done. Perhaps it involves remembering to save your work at a 
particular point before going on to the next step, or creating stub tests as you go 
along so that you don't have to think too hard later on. As time goes on, you can 
reach the point where you just do these things on autopilot. What you are doing is
creating and maintaining a *workflow*. Just as with design patterns and many other 
aspects of software development, the way you organise your work is up to you. If you 
are working alone, creating your own workflows is convenient, but in a team situation 
it becomes vital going far beyond simply alleviating the boredom of repetition. 

One of the issues that needs to be addressed in a team context is that different
people prefer to do things in different ways. That is OK up to the point that it starts 
to reduce the overall efficiency of the team effort. That can occur for example if one 
person on a team fails to take into account someone else's needs. In that case, 
something does not get done at the most efficient moment, and time is lost later. 
Another case is where a developer finishes the task they are on but fails to update the 
documentation or let the rest of the team know that the task is complete. The solution 
to these and many other types of communication and coordination issues is to establish 
team workflows and to make sure that the whole team sticks to them.

## Environments

Before getting into the topic of team work flows, it is important to have a clear idea of the typical
context in which a software development team works. 
An *environment* is the working context of a software system. The term is widely used and it
is important to understand its full implications. The major distinction is between the *live*
environment (also referred to as the *production* environment) where a system is in actual use, 
and the *development* environment where software developers are making changes. As the software 
system evolves over time, code changes will be introduced into the live environment, but this has 
to be done very carefully to avoid any disruption to the users. The development environment 
replicates the live environment including code and supporting infrastructure such as databases. 
Because each member of the development team will be working on different changes to the codebase, 
each one will have their own development environment. This is an important detail: the development 
environment is not shared - each member of the team has their own copy which includes the last known 
good configuration of the codebase, plus the changes they are currently working on.

![Environments](../images/environments.png#figure)
*Fig 1: System environments*

Code repositories such as GitHub are excellent tools for managing the synchronisation of the
various environments in use. Once developers have completed the changes they are working on, 
they *push* the code to the repository. Once any quality assurance procedures have been 
completed, the code can then be *deployed* to the live environment. Fig. 1 illustrates this
and also includes a test environment where integrated code can be tested before deployment.
Like the live environment, the test environment is a shared instance of the code that is
hosted on a server or on the cloud. Development environments, in contrast, are located on 
the workstation belonging to the individual developer. In order for their personal development
environment to be kept up to date, developers need to *fetch* changes from the repository on
a regular basis. Typically, this is done just before starting a new development task. During
work on a task, it is important that developer's working environment remains stable. Changes
from other developers are only introduced between one task and the next.

As well as being used for synchonising code across different environments, GitHub has 
many other useful features that can be used to manage projects. In a team situation, 
the risks and problems quickly balloon compared to working on an individual project,
and it is a good investment of time to establish robust working routines. Using GitHub 
is not the only way to do this - there are other tools and platforms such as 
[Jira](https://www.atlassian.com/software/jira). However, as one of the most popular 
services, GitHub has reliability and recognition value in its favour.

Before discussing the details of a team workflow it is important to cover the concept of *branching*.

## Branching and merging

A software application can be thought of as a consistent set of files including code, 
settings, images, documentation, etc. Typically, each file will have its  own revision
number, and the term for the set of versioned files that work together is a *configuration*.
A released version of the application represents a stable configuration. Between releases,
the development team will be working on changes to the codebase, thus introducing instabilities.
As mentioned in the previous section, the process of code deployment is carefully controlled
to avoid users coming into contact with any errors caused by these instabilities. If they,
however, it still has to be possible for the development team to fix any errors in the released 
code and release an emergency patch. In this scenario, we need to different configurations,
the one representing the released version of the application,and the one representing the
next release where a lot of development work is going on. Because the next release builds on
the current one, we can imagine taking a copy of the codebase at the point of release. That 
way, we can fix emergencies with the live code in parallel with the new development work 
because the two configurations are independent. In GitHib and other similar systems, this 
is referred to as a *branch* in the code as illustrated in Fig. 2. Note that the branch 
representing the current release is called `main` - this is a common convention.

<pre class="mermaid figure">
gitGraph
   commit id: " "
   commit id: "release"
   branch next_release
   checkout next_release
   commit id: "change 1"
   checkout main
   commit id: "bug fix 1"
   checkout next_release
   commit id: "change 2"
   checkout main
   commit id: "bug fix 2"
</pre>
*Fig. 2: Release branch*

Once the code configuration for the new release is stable, the parallel code branch can be 
*merged* with the main branch as illustrated in Fig. 3. During this process, it is possible
for code conflicts to arise. This is where changes have occurred to the same file in 
both branches and keeping one version would mean losing the changes in the other. Some such
conflicts can be handled in an automated way, but others will require the two versions of the file
to be merged manually to create a third composite version that preserves the changes from both
branches.

<pre class="mermaid figure">
gitGraph
   commit id: " "
   commit id: "Release 1"
   branch next_release
   checkout next_release
   commit id: "change 1"
   checkout main
   commit id: "bug fix 1"
   checkout next_release
   commit id: "change 2"
   checkout main
   commit id: "bug fix 2"
   checkout next_release
   commit id: "change 3"
   checkout main
   merge next_release id: "Release 2"
   commit id: " "
</pre>
*Fig. 3: Merging branches*

A further complication that needs to be managed is that several pieces of development work will be
going on simultaneously, each being worked on by a different developer. It is essential that these 
changes do not conflict with each other. A good way to manage this extra complication is to create
a separate branch for each piece of work as illustrated in Fig. 4. In the example, one developer
creates a branch to work on feature 1 and a second developer creates a parallel branch to work on 
feature 2. Once both pieces of work are complete they are merged into the new release branch. The 
same procedure would be done for the bug fixes in the main branch.

<pre class="mermaid figure">
gitGraph
   commit id: " "
   commit id: "Release 1"
   branch next_release
   checkout next_release
   commit id: "change 1"
   checkout main
   commit id: "bug fix 1"
   checkout next_release
   branch feature_1
   branch feature_2
   checkout feature_2
   commit id: "F2 change 1"
   checkout feature_1
   commit id: "F1 change 1"
   checkout next_release
   merge feature_1
   checkout main
   commit id: "bug fix 2"
   checkout feature_2
   commit id: "F2 change 2"
   checkout next_release
   merge feature_2
   checkout main
   merge next_release id: "Release 2"
   commit id: " "
</pre>
*Fig 4: Parallel feature branches*

A merge operation is triggered by a *pull request* (PR). With a PR, the developer is indicating that the
code changes and testing are complete,and that the modified code is ready to be pulled into the parent
branch. Between the PR and the actual merge, it is good practice for the code changes to be reviewed by
another developer to identify any defects. The original developer then addresses the review comments
before completing the merge.

## GitHub Flow

GitHub defines a basic workflow called 
[GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow) that teams 
can follow when making changes to code. 

> 1. Create a branch
> 2. Make code changes
> 3. Create a pull request
> 4. Address review comments
> 5. Merge your pull request
> 6. Delete your branch

GitHub Flow assumes the simple branching strategy discussed above. If a team is working on multiple
versions of an application at the same time, a more complicated strategy might be needed to keep
the different versions from interfering with each other. 

The process defined above only takes care of problems that are directly related to code changes. 
however, it can form the basis of a more complete procedure that also includes the management of 
tasks on a task board and any other procedural requirements that the team agrees on.

## Issues and issue-related workflow

Most code management platforms provide features to help manage projects. In GitHub, a project can be
represented in a tabular format, as a roadmap or in the form of a Kanban-style task board. The choice
of format is up to the team, but for the purposes of these notes, we will assume the use of a task board.

By default, a task board in GitHub contains the three swimlanes, `Todo`, `In Progress` and `Done` as 
shown in Fig. 5. Further columns can be added if needed - this depends on how the team decides to 
manage the work. For example, a swimlane for stalled tasks could be added, or for tasks in review. 
The task board can be as complicated as required, but in general, the simpler the structure, the 
more intuitive it is to use.

![Default GitHub task board](../images/github_task_board.png#figure)
*Fig 5: Default GitHub task board*

Tasks in GitHub are represented by [issues](https://docs.github.com/en/issues). They can be added
directly on the task board using the button at the bottom of each swimlane. If you take that option,
you will need to explicitly attach the new issue to the relevant code repository. This is because 
the relationship between projects and repositories doesnot have to be one-to-one. You can also create
issues using the issues tab on the repository page. If you take that option, you will need to say
explicitly which project the issue should be added to. This is done using the controls on the right of
the issue creation page as shown in Fig. 6.

![New issue page](../images/new_issue.png#figure)
*Fig. 6: GitHub new issue page*

When using a task board, an item gradually accumulates detail and moves through the swimlanes from left
to right as the work progresses. Exactly *when* an item is moved from one swimlane to the next needs to
be defined in the team workflow so that there is no ambiguity. Once defined, these rules can be 
performed and enforced manually, but GitHub can help to automate some of the steps. Clicking on the
three-dots icon in the top right-hand corner of the task board (see Fig. 5) allows you to select a
`Workflows` option. Here, you can define several actions to be triggered automatically. The options
are more or less self-explanatory and require some experimentation. The main point is that a team
should make explicit decisions about how their task board should operate and which steps are to be
automated. Thos decisions should be clearly documented sothat they are easy for team members to
follow.

## Definition of Ready

It is a simple observable fact that the majority of developers like to get started working on
code changes as quickly as possible. However, that is not always the most efficient approach
and it can lead to dead ends, delays and re-work. To counter this, a *Definition of Ready* (DoR)
can be used. Essentially, it is a checklist that defines the criteria for starting on a 
development task. The DoR might include items such as:

* Requirements are clear
* Requirements are testable
* Acceptance criteria are defined
* Dependencies have been identified

A good way to decide whether a development task is ready to be worked on is to use the INVEST
method:

> **Independent**:
> It should be possible to work on a task independently of any other
> 
> **Negotiable**:
> A task should not be over-constrained; instead, there should be room for negotiatioon about 
> the best way to implement it
> 
> **Valuable**:
> The value of the task for the project/client should be clear. This is usually captured by 
> acceptance criteria
> 
> **Estimable**:
> It should be possible to make a reasonably accurate estimate of the time required for the task.
> If a task is too complex this will be difficult and the task may need splitting.
> 
> **Small**:
> (See previous point) Ideally a single task should represent a few person-days of work.
> 
> **Testable**:
> Another indication that a task needs to be split is when the tests required are hard to define
> or are very complex.

## Definition of Done

In Scrum, the *Definition of Done* (DoD) is a checklist of things that need to ticked off
before a product configuration is considered ready to release. An example of a simple DoD might be:

* All acceptance criteria are met
* Unit test coverage > 80%
* Functional tests passed
* No known defects
* Documentation is up-to-date

The DoD defines the threshold for release of the product, but at the point a development task
is completed it also needs to be checked against the DoD. This ensures that acceptance
criteria are checked at the earliest opportunity, for example, and avoids the accumulation
of hidden problems.

## Summary

In light of the previous sections, two main phases of activity can be identified around
any piece of development work as shown in Fig.7. The time required for each stage depends on the 
complexity of the original issue. 

![Development process](../images/dev_process.png#figure)
*Fig. 7: Two-phase development process*

The rules that a team sets for itself in defining a standard workflow are intended to help 
with communication and to avoid errors and conflicts. Although there are examples of good
practice available, there is no golden standard - each team needs to define its own specific
workflow. Some steps are entirely procedural in the sense that they are the responsibility of
the individual developer and cannot be automated. Others are made trivially easy by using the
digital tools available. It must be stressed, however, that the team workflow needs to be 
actively managed. If assumptions are made about how team members will behave, serious difficulties
may arise if they do not behave as expected. It is also tempting to try to define a complicated 
workflow from the outset in order to keep tight control over the project. This can be 
counter-productive, however, making the workflow difficult to understand. A good approach is
often to set up a relatively simple workflow using default or standard options,and then to 
introduce changes when it becomes clear that the workflow can be improved.

## Further reading

* [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
* [Definition of Ready](https://resources.scrumalliance.org/Article/pros-cons-definition-ready)
* [Definition of Done](https://www.scrum.org/resources/blog/done-understanding-definition-done)


