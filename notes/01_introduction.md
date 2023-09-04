# Introduction

###### Contents

1. [What this module covers (and what it doesn't...)](#what-this-module-covers-and-what-it-doesnt)
2. [A brief historical tour](#a-brief-historical-tour)
3. [What is a software engineer?](#what-is-a-software-engineer)
4. [International standards](#international-standards)
5. [System concepts](#system-concepts)
6. [Links](#links)


## What this module covers (and what it doesn't...).

The focus of this module is firmly on quality, and code quality in particular.
It introduces you to some of the international quality standards that are relevant to
software engineering, and provides practical experience with tools and techniques
that you are already aware of, but with the overriding aim of maximising quality.

By the end of the module, you should be able to

1. Explain software quality in both formal and informal terms
2. Apply design and development practices to optimise the quality of software systems
3. Evaluate software quality
4. Critique software development processes

You will be writing some software and we will be exploring methods for ensuring
that your code meets appropriate quality criteria. That is only part of the jigsaw,
however. We will also be looking at the context in which software is created, the
tools and processes that are used and how to manage them with quality in mind.

As well as traditional skills and technologies, we will also be taking a look at
computer-aided software engineering(CASE) and the use of the new generation of
AI tools such as ChatGPT and StableCode and coding assitants such as
GitHub Copilot. 

The module is not designed to teach you basic programming. It is assumed that you
have done that already and that you are already familiar with the object-oriented
approach and you know your way around an integrated development environment (IDE).
It is also assumed that you have at least a basic understanding of git and GitHub.

The module site provide basic notes on each topic with additional links to other
material. Reading comes in two types: essential reading and further reading. You
are encouraged to read as widely as possible in the field of software engineering
and the reading links provided here are just a starting point. The essential
reading is the minimum you should do, and you will see it marked with this icon:

![Please read](../images/material/outline_menu_book_black_48dp.png)

The reading is typically from the textbooks on the 
[reading list](https://eu.alma.exlibrisgroup.com/leganto/public/44NAP_INST/lists/6676828460002111?auth=SAML)

## A brief historical tour

History can be instructive: it shows you the connections between ideas, illuminates
the emergence of innovations and identifies old ideas that have been left behind.

From the perspective of a student in 2023, some things feel as though they have been
around forever. It pays to remember that every digital innovation has been brought
about by software engineers. The tour below is necessary *extremely* selective. It
is intended to be illustrative rather than compehensive.

<h6 align="center"> Here's you in 2023...

<a href="https://bdavison.napier.ac.uk/set09102/timeline.html" target="_blank" alt="People in software engineering">
    <img src="../images/you_small.png">
</a>
</h6>


## What is a software engineer?

[O'Regen, 2022, Ch. 1](https://link-springer-com.napier.idm.oclc.org/chapter/10.1007/978-3-031-07816-3_1)

[O'Regen, 2022, Ch. 2](https://link-springer-com.napier.idm.oclc.org/chapter/10.1007/978-3-031-07816-3_2)

### Software engineering in overview

[Stephens, 2022, Ch. 1](https://learning.oreilly.com/library/view/beginning-software-engineering/9781119901709/c01.xhtml)

[Ozkaya, 2023](https://doi.org/10.1109/MS.2023.3278056)

SWEBOK guide
[BSI, 2016](https://bsol.bsigroup.com/Bibliographic/BibliographicInfoData/000000000030314312)

### Programming languages

[Stephens, 2022, Ch. 12](https://learning.oreilly.com/library/view/beginning-software-engineering/9781119901709/c12.xhtml)

SEVOCAB
[IEEE, 2023](https://pascal.computer.org/sev_display/index.action)

## International standards



## System concepts

The word *system* is used regularly in everyday language and most people have
a working understanding of what a system is. However, in a technical context it 
is important to have a clear definition. This helps to define the
processes needed to design, create, operate, maintain and communicate with a
system. From a software engineering point of view, we are mainly interested in
systems that consist only of code; however, software control system may interact
with physical devices, humans interact with a software system via its user
interface and systems communicate with each other over standard channels. Ignoring
such concerns can lead to software systems that do not fulfil the purpose they
were designed for. 

The international standard [ISO/IEC/IEEE 15288:2023](https://doi-org.napier.idm.oclc.org/10.1109/IEEESTD.2023.10123367)
sets out to define a common framework for understanding systems and their
lifecycles. It aims to facilitate communication between different stakeholders by
defining a set of generic processes and associated terminology with the overall
goal of delivering high quality products. It defines a system as an

> arrangement of parts or elements that together exhibit a stated behaviour or 
> meaning that the individual constituents do not.

This definition, illustrated in Fig. 1, highlights the need for a designed system to 
have a clear *purpose*. Elsewhere, the standard clarifies that a system can include 
elements that can be 

> hardware elements, software elements, data, humans, 
> processes, services, procedures, facilities, materials, 
> and naturally occurring entities.

![General system](../images/system3.png)

*Fig. 1: General system visualisation*

The [INCOSE Systems Engineering Handbook](https://eu.alma.exlibrisgroup.com/leganto/public/44NAP_INST/citation/6677951920002111?auth=SAML)
extends the general definition to *engineered systems* which are

> designed or adapted to interact with an anticipated operational environment to 
> achieve one or more intended purposes while complying with applicable constraints.

This formulation highlights the need for the system to conform to expectations.
In a software engineering project, such expectations have to be defined at the start
of a project (or smaller unit of work) and then evaluated at the end through an 
appropriate form of testing.

Identifying the *system boundary*, the conceptual interface between the system 
and its environment, is very important in software engineering because the boundary
defines what is part of the system and what is not. From a development point of 
view, that is equivalent to defining the required functionality of the system. From
a project management point of view, it determines the scope of the project. Anything
outside the boundary is not the responsibility of the project.

This is a simplified picture, however. Different stakeholders might identify the 
system boundary differently depending on their interests. In addition, any component
part of the system, or *system element*, can be regarded as a system in its own
right, and may be further decomposed into smaller elements. Thus, there is a 
hierarchical relationship between elements, and a stakeholder may only be concerned
with a subset of these system elements. When focusing on a particular system - 
whether or not it is a component of a larger system - it can be referred to as the
*system of interest* (SOI).

On page 11, [ISO/IEC/IEEE 15288:2023](https://doi-org.napier.idm.oclc.org/10.1109/IEEESTD.2023.10123367) 
defines the following six key characteristics of systems:

* defined boundaries encapsulate meaningful needs and practical solutions;
* there is a hierarchical or other relationship between system elements;
* an entity at any level in the SoI can be viewed as a system;
* a system comprises an integrated, defined set of subordinate system elements;
* humans can be viewed as both users external to a system (e.g. users) and as system
  elements (e.g. operators) within a system;
* a system can be viewed in isolation as an entity, i.e. a product; or as a 
  collection of functions capable of interacting with its surrounding environment, 
  i.e. a set of services.

ISO15288 also defines the concept of a *system of systems* (SOS). In an SOS, 
systems interact to provide capabilities that no one system can deliver on its
own. This is very similar to the relationships among system elements. The 
distinguishing feature of an SOS is that the individual systems are operationally
and managerially independent. Consider a software application that makes use of data 
from a cloud service by calling an API function. There is interaction between the two
systems, but they are managed independently and operate independently. This 
interaction represents an SOS rather than a single system that is decomposed 
into smaller elements. 

The SOS concept also demonstrates a limitation of the illustration in Fig. 1 and the 
subsequent explanation: in the case where your SOI is part of an SOS, it is in
fact necessary to consider communications across the system boundary. For example,
APIs are sometimes unavailable. If the calling application is well-designed, it 
will anticipate the problem and provide a fallback so that it is not dependent on
the external system.

For other definitions of systems and related concepts, see the 
[Software and Systems Engineering Vocabulary (SEVOCAB)](https://pascal.computer.org/sev_display/index.action).

## Links

* [SEVOCAB: System Engineering dictionary of terms](https://pascal.computer.org/sev_display/index.action)
* [ISO/IEC/IEEE 15288:2023](https://doi-org.napier.idm.oclc.org/10.1109/IEEESTD.2023.10123367)

