# Software design

<hr class="splash">

![Mario Fusco](../images/mario_fusco.png)

### The code you write makes you a programmer. The code you delete makes you a good one. The code you don’t have to write makes you a great one.

<br/>

*Mario Fusco*

<hr class="splash">

###### Contents

1. [Design activities](#design-activities)
2. [High-level design](#high-level-design)
3. [Low-level design](#low-level-design)
4. [Further reading](#further-reading)

## Design activities

Although some aspects of software design are fairly routine and have simple established
processes that the designer can follow, it is in general a creative process that requires
the application of skill and experience. It should be thought of as an iterative process 
just like development where the first version is just good enough. Later versions improve
the design through repeated conversations with the client and the development team.

As a creative process, it is important to keep options open until the later stages. That
is sometimes difficult, as are the creative jumps needed to move from an adequate design
idea to a good one. To help guide the process, it is useful to structure the activities.
One common distinction is between high-level design which focuses on the abstract 
description of the system and low-level design which concentrates more on how to
implement the abstract structures and processes. A major concern of high-level design that 
requires some major decisions at the start of a new project is the *system architecture*. 
Because that is the topic of a 
[later module](https://www.modules.napier.ac.uk/Module.aspx?ID=SET10101). We will concentrate
here on other aspects.

## High-level design

One way to think about high-level design is as the part of the process that does not 
require any software to be built. Everything at the high level can be described in
abstract terms, typically using appropriate diagrams.

In general, design activities can be split into the following categories

> **Architecture design of system (with all sub-systems)**
> 
> Definition of all the major components of a system and how they communicate. 
> [Block diagrams](https://en.wikipedia.org/wiki/Block_diagram) are often used to
> capture system structure at this level.
> 
> **Abstract specification of each sub-system**
> 
> Decomposition of each major component and its description using appropriate methods
> such as [user stories](https://www.agilealliance.org/glossary/user-stories/), 
> [design patterns](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/n96pef/alma9923811554702111), 
> etc.
>
> **Interface design (for each subsystem)**
> 
> Specification of how data is exchanged across component boundaries. This includes the
> *user interface* (UI) as well as software interfaces such as method signatures and APIs. 
> UI design techniques such as [wireframes](https://designerrs.com/what-is-wireframing-in-ui-ux-design/)
> are often used during the [requirements modelling process](Week11a_requirements_modelling.md)
> using tools such as [Figma](https://www.figma.com/). API designs can be described with
> toolssuch as [Swagger](https://swagger.io/).
> 
> **Component design**
> 
> Detailed design of major components using appropriate methods such as 
> [UML diagrams](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/n96pef/alma9923410250502111)
> 
> **Data structure design**
> 
> Data modelling including relational or non-relational database design and the design of
> structures used for transferring data from one component or system to another.
> 
> **Algorithm design**
> 
> The design of optimised deterministic routines for a specified purpose. UML sequence
> diagrams, state charts and activity diagrams are often useful here.
> 
> ([O'Regen, 2022, Ch. 6](https://link-springer-com.napier.idm.oclc.org/chapter/10.1007/978-3-031-07816-3_6))

In addition to the items above, in his [chapter 6](https://eu.alma.exlibrisgroup.com/leganto/public/44NAP_INST/citation/6676830220002111?auth=SAML), 
Stephens suggests that the following topics should also be covered in high-level design:

* Security including authentication, role-based access and general data protection strategies.
* Hardware, and by extension, the operating environment that the software will run in.
* Reports - that is to say, any formatted output data from the system

## Low-level design

You can think of low-level design as the actual implementation of the high-level design.
It describes *how* things are done rather than *what* needs to be done. 
In his [chapter 7](https://eu.alma.exlibrisgroup.com/leganto/public/44NAP_INST/citation/6676830220002111?auth=SAML), Stephens focuses on the two most common design approaches which
are object-oriented design (OOD) and database design. However, he also points
out that there are other complementary perspectives that might be useful. These are
summarised in the table below.

| Approach                | Description                                                                                                                 |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Design-to-schedule      | In a time-constrained project, simpler designs might be preferred                                                           |
| Design-to-tools         | The preferred toolset in use might predetermine certain aspects of the design                                               |
| Process-oriented design | This approach models process first and then determines the data structures that are needed. It is not an alternative to OOD |
| Data-oriented design    | This approach prioritises data structure design over processes                                                              |

### Object-oriented design

In OOD, a software system is modelled as a set of interacting software objects, each of
which has associated data (*properties*) and behaviour (*methods*). Because there may be
many objects of the same type, objects are defined by an abstract definition called a 
*class*. The creation of an object of a particular class is known as *instantiation* in
which a complex software data structure is created and populated with the relevant data.

Most classes correspond to some real-world object, person, place or event. They can be 
identified from user interviews because they correspond to the nouns and noun phrases
that are used. The box below shows an example.

> When a need is identified, the UNDAC Deputy Team Leader will approve the creation
> of an operational team to address it.

This example includes three nouns/noun phrases, *need*, *UNDAC Deputy Team Leader* and
*operational team*, each of which would become a class in the system design. Design
can then progress to identifying the data properties required by each class, how the class
related to other classes, it can be storedin a database and the behaviours that need
to be implemented as class methods.

A major benefit of OOD is the ability to represent classes as special cases of other classes
in the form of a hierarchy. In the example above, the UNDAC Deputy Team Leader is just one
of the roles in an UNDAC team. Others include the Team Leader, the Team Support and Logistics 
Manager and the Disaster Management Coordinator. Common features of all roles such as
names, privilege level, appointment dates, etc. could be part of the parent class, Team
Member. At a higher level of abstraction, a Team Member is a Person. The class hierarchy 
could therefore be represented in a diagram like the one in Fig. 1.

``` mermaid
classDiagram
  Person <|-- Volunteer
  Person <|-- TeamMember
  TeamMember <|-- TeamLeader
  TeamMember <|-- DeputyTeamLeader
  TeamMember <|-- DisasterManagementCoordinator
  Person : string name
  Person : date dateOfBirth
  Person : getAge()
  Volunteer : List~int~ yearsExperience
  Volunteer : previousMissions()
  TeamMember : int payrollNumber
  TeamMember : currentAccommodation()
```

*Fig. 1. Example class hierarchy

Classes can be split into subclasses to make handling the different types of object
more convenient as the TeamMember class is split up in Fig. 1. This is known as 
*refinement*, and the creation of a more general class such as Person in Fig. 1 is
known as *generalisation*. Whether these actions are needed depends on the requirements
of the project. Remember the KISS and YAGNI principles.

Another major part of OOD is making decisions about object composition. Although the
class definitions in Fig. 1 are not complete, the Volunteer class coontains a method,
`previousMissions`. That assumes the existence of a `Mission` class, and some kind
of relationship between volunteers and missions. One way to model that relationship
would be for the Volunteer class to include a property which is a list of Mission objects.

### Database design

Until recently, database design implied the use of a relational database in which data
is represented by tables with relationships between them. This century, non-relational
database have become more common in which data is represented as complex objects. 
Non-relational database seem to be a better match with OO structures since objects 
can be stored and retreived directly. With relational databases, there is additional 
processing required to convert an OO structure into a relational structure and vice versa.
However, non-relational database have some performance bottlenecks when the data structures 
are complex which relastional structures are optimised in various ways. If the data is
simple - that is there are few examples of nested objects - then a non-relational database
may perform better.

Relational databases can be modelled in a top-down fashion similar to the way a class
hierarchy can be built up from the information in user interviews. The process, illustrated
in Fig. 2, is iterative and continues until there are no further changes.

![Entity relationship modelling](../images/entity_relastionship_modelling.png)

*Fig. 2: Entity relationship modelling*

The standard method for representing the relationships between entities in a relational
database structure is the *entity-relastionship diagram* (ERD). It closely resembles a
simplified UML class diagram, and an example built using 
[draw.io](https://www.drawio.com/) is shown in Fig. 3.

![Example entity-relationship diagram](../images/themepark_erd.png)

*Fig. 3: Example entity-relationship diagram*

Relational structures are defined by mathematical rules and can be checked for validity 
by using the process of [normalisation](https://bdavison.napier.ac.uk/db/Notes/Normalisation/intro/).

Because non-relational structures allow the application to store objects directly, the structure
of a non-relational database is best described using a standard UML class diagram. Developers
are sometimes attracted to non-relational databases because they think it allows them to 
avoid defining a database schema and verifying the database structures with normalisation
which is perceived as difficult. However, the freedom that is permitted by non-relational
structures can create many problems it is not properly controlled. Because modern 
non-relational databases such as [MongoDB](https://www.mongodb.com/) use 
[JSON](https://www.json.org/json-en.html) syntax, structures can be defined, controlled
and validated by using [JSON schemas](https://json-schema.org/understanding-json-schema/index.html).

## Further reading

* User experience design [Stephens, 2022, Ch. 9](https://eu.alma.exlibrisgroup.com/leganto/public/44NAP_INST/citation/6676830220002111?auth=SAML)
* Algorithms [Stephens, 2022, Ch. 11](https://eu.alma.exlibrisgroup.com/leganto/public/44NAP_INST/citation/6676830220002111?auth=SAML)
