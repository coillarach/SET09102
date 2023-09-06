# UN Disaster Assessment and Coordination (UNDAC) App

## Introduction

UNDAC teams are deployed by the Office for the Coordination of Humanitarian 
Affairs ([OCHA](https://www.unocha.org/)) of the United Nations (UN) to parts of the 
world affected by natural or socio-political disasters to provide humanitarian 
assistance. This primarily takes the form of food, shelter and medical supplies. The 
centre of operations for an UNDAC team is the On-Site Operations Coordination Centre 
(OSOCC).

The system you have been asked to build aims to provide all UNDAC team members with 
the functions they need to manage their role. 

The (simplified) operational structure of an UNDAC team is shown in the figure 1.

![UNDAC team structure](../images/undac_team.png)

*Fig. 1: UNDAC team structure*

Descriptions of the various team roles are given below.

<details>
<summary>Team Leader</summary>

* Plan of Action, mission objectives and operational updates
* Direct link/liaison with RC/HC, HCT, Government, partners, clusters, OCHA regional office and/or headquarters
* Strategic planning/direction
* Ensure cohesion/connectivity within the team
* Sign-off on external reporting
* Focal point for security matters
* Focal point for general team matters
* Media policy approval
* Safety and security management

</details>

<details>
<summary>Deputy Team Leader</summary>

* Stand in for Team Leader when necessary and fulfil Team Leader’s functions
* Assign/track physical locations of team members
* Liaison with operational sub-teams
* Daily management of team/mission, OSOCC management
* Safety and security planning for the team
* Manage team handover/exit strategy to subsequent teams, national authorities, OCHA, etc.
* UNDAC Mission Software workspace
* Oversee reporting and information management
* Maintains Internal communications

</details>

<details>
<summary>Team Support and Logistics Manager</summary>

* Coordination of internal logistics
* Logistical support to inter-agency missions
* Management of team resources and technical support staff
* Organization of accommodation, transport, local support, translators, etc.
* Establish/enforce filing system
* Finance management

</details>

<details>
<summary>Disaster Management Coordinator</summary>

* Advises Team Leader and works with concerned authorities and disaster management partners, including:
* Optimizing use of available resources and prioritising response activities
* Coordination of international teams
* Support to coordination of needs assessment
* Reporting and information management including with affected communities and authorities
* Input on safety and security management
* Liaison, including creating the link between civil protection and UN/international response mechanisms
* Management of UNDAC support teams
* Input to public information initiatives
* Handover to longer term OCHA team/exit strategy

</details>

<details>
<summary>Analyst</summary>

* Advises Team Leader and works with concerned authorities, disaster management and humanitarian partners, including:
* Analysis of information, including situational analyses
* Providing expertise in assessment methodologies e.g., MIRA, etc.
* Developing, agreeing and applying shared assessment capacities, tools and methodologies
* Coordination of assessments
* Presentations and feedback to key decision-makers including sector/cluster leads and operational agencies
* Preparation of assessment information for public disclosure
* Ensuring accountability for the correct use and dissemination of assessment information
* Working closely with operational agencies and coordinators on follow up assessments and monitoring impact and progress of interventions within an accountable humanitarian framework

</details>

<details>
<summary>Operational Team Leader</summary>

* Coordinate the work of the team during the operation
* Ensure the safety of all team members
* sure the effective use of resources
* Report on the final outcomes of the operation

</details>

<details>
<summary>Team Member</summary>

* Carry out responsibilities as assigned
* Provide feedback to the UNDAC team management on the running of the OSOCC
* Provide operational intelligence to UNDAC team management based on personal experience 

</details>

The [UNDAC Field Handbook](https://reliefweb.int/report/world/un-disaster-assessment-and-coordination-undac-field-handbook-7th-edition-2018) 
provides comprehensive details on the operation of a team. 

## Technical notes

The system is potentially large and complex and an agile approach will be taken to 
deliver essential features quickly and to add further features incrementally over time.
The system is envisaged as a stand-alone, cross-platform application that communicates 
with a remote database for sharing information among users. This architecture has been 
chosen because an internet connection cannot be guaranteed, and the application must 
continue to operate in isolation if necessary.

The .NET framework has been selected as the development environment with C# as the main 
programming language. Cross-platform compatibility will be achieved by using the .NET 
Multi-platform App UI (MAUI) framework.

Initial design work has already been completed for some of the basic features and your 
team will be provided with the following in week 3 of the trimester

* A set of documented user stories
* An installation of SQL Server to use as a shared database

As a team, you will need to work through the backlog of user stories as directed during 
the practical sessions. Please note that there is no benefit to doing a larger number 
of users stories than is required. All the marks are for product and process quality, 
not quantity.

## Links

* [UNDAC Field Handbook](https://reliefweb.int/report/world/un-disaster-assessment-and-coordination-undac-field-handbook-7th-edition-2018)
* [C# documentation](https://learn.microsoft.com/en-us/dotnet/csharp/)
* [.NET MAUI tutorials](https://dotnet.microsoft.com/en-us/learn/maui)
* [.NET MAUI video tutorials by James Montemagno](https://www.youtube.com/playlist?list=PLdo4fOcmZ0oUBAdL2NwBpDs32zwGqb9DY)
