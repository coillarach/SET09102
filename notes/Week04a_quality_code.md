# Quality: code

<hr class="splash">

![Martin Fowler](../images/martin_fowler.png)

### Any fool can write code that a computer can understand. Good programmers write code that humans can understand.

<br/>

*Martin Fowler*

<hr class="splash">

###### Contents

1. [External quality criteria](#external-quality-criteria)
2. [Internal quality criteria](#internal-quality-criteria)
3. [Code weaknesses](#code-weaknesses)
4. [Code smells](#code-smells)
5. [Technical debt](#technical-debt)
6. [Clean Code](#clean-code)
7. [Further reading](#further-reading-and-viewing)

## External quality criteria

Quality is a very difficult concept to pin down with a definition. 
[SEVOCAB](https://pascal.computer.org/) offers three versions from different 
sources:

> ### **quality**
> 
> (1) degree to which the system satisfies the stated and implied needs of its 
> various stakeholders, and thus provides value 
> ([ISO/IEC 25010](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/19n0mho/cdi_bsi_primary_000000000030215101)) 
> 
> (2) ability of a product, service, system, component, or process to meet customer 
> or user needs, expectations, or requirements 
> ([ISO/IEC/IEEE 24765](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/19n0mho/cdi_bsi_primary_000000000030413573)) 
> 
> (3) the degree to which a set of inherent characteristics fulfils the requirements 
> ([PMBOK](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/n96pef/alma9923796446002111))

All of these definitions focus on the final product from the point of view of the
customer. In that sense, quality can only be evaluated with reference to the
*external properties* of the system which include, for example:

* **Reliability**: 
  The degree to which a system, product or component performs specified functions 
  under specified conditions for a specified period of time
  ([ISO/IEC 25010](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/19n0mho/cdi_bsi_primary_000000000030215101))
* **Security**: 
  Protection against intentional subversion or forced failure
  ([ISO/IEC 15288](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/19n0mho/cdi_bsi_primary_000000000030433813))
* **Maintainability**:
  The degree of effectiveness and efficiency with which a product or system can be 
  modified by the intended maintainers
  ([ISO/IEC 25010](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/19n0mho/cdi_bsi_primary_000000000030215101))
* **Portability**:
  The ease with which a system or component can be transferred from one hardware or 
  software environment to another
  ([ISO/IEC 24765](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/19n0mho/cdi_bsi_primary_000000000030346267))
* **Usability**:
  The degree to which a product or system can be used by specified users to achieve 
  specified goals with effectiveness, efficiency and satisfaction in a specified 
  context of use
  ([ISO/IEC 25010](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/19n0mho/cdi_bsi_primary_000000000030215101))

External properties describe the operation of the whole system and therefore need
to be evaluated at the system level. That is, the system has to be tested in use.
This system-level testing is explicitly captured in the 
[V life cycle model](Week03a_lifecycle.md#the-v-model) where it is paired with the 
analysis phase of the waterfall. This type of quality testing is relevant for any 
software development project including those that use an agile approach. The 
derivation of external quality criteria and their evaluation is discussed in more 
detail in the [requirements modelling](Week11a_requirements_modelling.md) section.

## Internal quality criteria

While the external properties of a software product are those that are visible to
the client, they depend to a large extent on the *internal properties* of the code.
These are aspects of the code that can be verified by static analysis or inspection. 
For example, code that is easy to read will necessarily be easier to maintain.
Similarly, code that is systematically tested will be more reliable.

Some languages such as Python require code to be laid out and indented in a 
particular way and this acts as a quality control. Other languages such as C# allow 
the developer more freedom. In that case, a set of best-practice conventions may
evolve around the particular language, and organisations may go further and create
an internal set of coding standards that developers are expected to follow.

As well as indentation rules, coding conventions can cover other aspects of the 
code including

* Acceptable names for variables, functions, classes, namespaces, etc.
* Use of comments
* Use of whitespace
* Preferred methods where alternatives exist
* Exception handling
* etc.

If you are working with the same language on a regular basis, you will gradually 
become aware of the recognised best practices in that context. They are occasionally
documented as is the case for 
[C#](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)
and they are often referred to in technical forums such as 
[Stack Overflow](https://stackoverflow.com/questions/14973642/how-using-try-catch-for-exception-handling-is-best-practice).
This illustrates the dynamic nature of code conventions: an authority such as 
Microsoft may set out their expectations and update them over time as the language
itself develops, and in parallel with that, a further set of preferences will 
evolve among the user community. 

## Code weaknesses

Although coding style is important because of its impact on characteristics such
as maintainability, code may also contain structural weaknesses. These impact 
some of the other external quaity characteristics such as reliability and 
security. While some programming languages may make certain weaknesses impossible, 
they are essentially generic across all programming environments. 
[MITRE](https://www.mitre.org) is an American corporation set up to advise 
various arms of the US government on national security. It maintains a database
of system weaknesses that is useful beyond it main security focus including 445 items
related to software development in 40 categories. The
[Common Weakness Enumeration (CWE)](https://cwe.mitre.org/data/definitions/699.html)
is developed by the user community and provides descriptions of identified 
weaknesses along with observed occurrences and possible solutions. Some examples from
the *Bad Coding Practice* category are

<details>
<summary>CWE-478: Missing Default Case in Multiple Condition Expression</summary>
If a multiple-condition expression (such as a switch in C) omits the default 
case but does not consider or handle all possible values that could occur, then 
this might lead to complex logical errors and resultant weaknesses. Because of this, 
further decisions are made based on poor information, and cascading failure results. 
This cascading failure may result in any number of security issues, and constitutes a 
significant failure in the system.
</details>

<details>
<summary>CWE-1079: Parent Class without Virtual Destructor Method</summary>
A parent class contains one or more child classes, but the parent class does not have a 
virtual destructor method. This issue can prevent the product from running reliably due 
to undefined or unexpected behaviors. If the relevant code is reachable by an attacker, 
then this reliability problem might introduce a vulnerability.
</details>

<details>
<summary>CWE-1092: Use of Same Invokable Control Element in Multiple Architectural Layers</summary>
The product uses the same control element across multiple architectural layers. This 
issue makes it more difficult to understand and maintain the product, which indirectly 
affects security by making it more difficult or time-consuming to find and/or fix 
vulnerabilities. It also might make it easier to introduce vulnerabilities.
</details>

<details>
<summary>CWE-1103: Use of Platform-Dependent Third Party Components</summary>
The product relies on third-party components that do not provide equivalent functionality 
across all desirable platforms. This issue makes it more difficult to maintain the 
product, which indirectly affects security by making it more difficult or time-consuming 
to find and/or fix vulnerabilities. It also might make it easier to introduce 
vulnerabilities.
</details>

Building on the CWE database, the [Object Management Group (OMG)](https://www.omg.org/)
has created a standard for automatic identification of code weaknesses based on 
measures that can be taken from static code analysis. The standard has been adopted by
the ISO as [ISO 5055](https://www.it-cisq.org/standards/code-quality-standards/). The 
standard is used by tools that check code automatically and alert the developer as
they go along. Such tools treat the number of occurrences of weakness patterns as
*metrics* whose value is an indication of code quality. A metric is simply something that 
can be measured, and some metrics are more useful than others. For example, a very easy
metric often used in software development projects is the number of lines of  code, or
more often, thousands of lines of code (KLOC). However, Bill Gates once commented that

> Measuring programming progress by lines of code is like measuring aircraft building 
> progress by weight
> 
> [Stephens, 2022, Ch. 15](https://learning.oreilly.com/library/view/beginning-software-engineering/9781119901709/c15.xhtml)

The metrics that you use in any situation have to be genuinely meaningful. 
Stephens provides the following criteria for choosing a good metric (which with some small
reordering abbreviates to MORSE):

> **Simple**: The easier the attribute is to understand, the better.
> 
> **Measurable**: For the attribute to be useful, you must measure it.
> 
> **Relevant**: If an attribute doesn't lead to a useful indicator, there's no point 
> measuring it.
> 
> **Objective**: It's easier to get meaningful results from objective data than from 
> subjective opinions. The number of bugs is objective. The application's “warmth and 
> coziness” is not.
> 
> **Easily obtainable**: You don't want to realize the team members’ fears by making them 
> spend so much time gathering tracking data that they can't work on the actual project. 
> Gathering attribute data should not be a huge burden.
> 
> [Stephens, 2022, Ch. 15](https://learning.oreilly.com/library/view/beginning-software-engineering/9781119901709/c15.xhtml)

## Code smells

![Code quality](https://imgs.xkcd.com/comics/code_quality.png#figure)
[*Source: xkcd* ](https://xkcd.com/1513/)

The code weaknesses listed in CWE are specific and can be easily identified if you
know what you are looking for. Other issues are less obvious - they emerge from the 
code because of the general way it has been written and not from any one specific
error. In their 1999 book 
[Refactoring: improving the design of existing code](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/n96pef/alma9923667458902111),
Kent Beck and Martin Fowler introduce the concept of the *code smell*. Starting from
the premise that code should be easy to read and understand, a code smell is a clue
that something may not be right. It is a suspicion arising from untidy code or code
that has been put together with little care and attention. A code smell does not 
always indicate that there is a problem. For example, long methods are best avoided
but occasionally a method with more that a dozen lines or so is actually needed. 

Beck and Fowler describe 24 smells which they tabulate for reference at the end of the
book. The table is reproduced below - the various refactoring strategies are described
in other sections of the book. Since publication, other smells have been documented.
This [blog post](https://pragmaticways.com/31-code-smells-you-must-know/) summarises 
31 of them.

*Table 1. Code smells ([Beck & Fowler, 1999](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/n96pef/alma9923667458902111))*

| Smell                                         | Common Refactorings                                                                                                                                                                                                                                   |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alternative Classes with Different Interfaces | Change Function Declaration, Move Function, Extract Superclass                                                                                                                                                                                        |
| Comments                                      | Extract Function, Change Function Declaration, Introduce Assertion                                                                                                                                                                                    |
| Data Class                                    | Encapsulate Record, Remove Setting Method, Move Function, Extract Function, Split Phase                                                                                                                                                               |
| Data Clumps                                   | Extract Class, Introduce Parameter Object, Preserve Whole Object                                                                                                                                                                                      |
| Divergent Change                              | Split Phase, Move Function, Extract Function, Extract Class                                                                                                                                                                                           |
| Duplicated Code                               | Extract Function, Slide Statements, Pull Up Method                                                                                                                                                                                                    |
| Feature Envy                                  | Move Function, Extract Function                                                                                                                                                                                                                       |
| Global Data                                   | Encapsulate Variable                                                                                                                                                                                                                                  |
| Insider Trading                               | Move Function, Move Field, Hide Delegate, Replace Subclass with Delegate, Replace Superclass with Delegate                                                                                                                                            |
| Large Class                                   | Extract Class, Extract Superclass, Replace Type Code with Subclasses                                                                                                                                                                                  |
| Lazy Element                                  | Inline Function, Inline Class, Collapse Hierarchy                                                                                                                                                                                                     |
| Long Function                                 | Extract Function, Replace Temp with Query, Introduce Parameter Object, Preserve Whole Object, Replace Function with Command, Decompose Conditional, Replace Conditional with Polymorphism, Split Loop                                                 |
| Long Parameter List                           | Replace Parameter with Query, Preserve Whole Object, Introduce Parameter Object, Remove Flag Argument, Combine Functions into Class                                                                                                                   |
| Loops                                         | Replace Loop with Pipeline                                                                                                                                                                                                                            |
| Message Chains                                | Hide Delegate, Extract Function, Move Function                                                                                                                                                                                                        |
| Middle Man                                    | Remove Middle Man, Inline Function, Replace Superclass with Delegate, Replace Subclass with Delegate                                                                                                                                                  |
| Mutable Data                                  | Encapsulate Variable, Split Variable, Slide Statements, Extract Function, Separate Query from Modifier, Remove Setting Method, Replace Derived Variable with Query, Combine Functions into Class, Combine Functions into Transform, Change Reference to Value |
| Mysterious Name                               | Change Function Declaration, Rename Variable, Rename Field                                                                                                                                                                                            |
| Primitive Obsession                           | Replace Primitive with Object, Replace Type Code with Subclasses, Replace Conditional with Polymorphism, Extract Class, Introduce Parameter Object                                                                                                    |
| Refused Bequest                               | Push Down Method, Push Down Field, Replace Subclass with Delegate, Replace Superclass with Delegate                                                                                                                                                   |
| Repeated Switches                             | Replace Conditional with Polymorphism                                                                                                                                                                                                                 |
| Shotgun Surgery                               | Move Function, Move Field, Combine Functions into Class, Combine Functions into Transform, Split Phase, Inline Function, Inline Class                                                                                                                 |
| Speculative Generality                        | Collapse Hierarchy, Inline Function, Inline Class, Change Function Declaration, Remove Dead Code                                                                                                                                                      |
| Temporary Field                               | Extract Class, Move Function, Introduce Special Case                                                                                                                                                                                                  |

## Technical debt

According to the [2022 report](https://www.it-cisq.org/the-cost-of-poor-quality-software-in-the-us-a-2022-report/)
by the Consortium for Information and Software Quality (CISQ), the overall annual cost to
industry of poor quality code was $2.41 trillion. Of this overall total, about 
$1.52 trillion was attributed to *technical debt* (TD).

TD arises when short-term priorities are allowed to take precedence over known best 
practices which would ensure a higher quality product. The name comes from an analogy
with financial debt where money that is borrowed has to be paid off in the long term.
Like financial debt, TD is divided into two elements:

> **Principal** refers to the cost of remediating must-fix problems in production code. 
> At a minimum, the principal is calculated from the number of hours required to 
> remediate these problems, multiplied by the fully burdened hourly cost of those 
> involved in designing, implementing, and unit testing these fixes.
> 
> **Interest** refers to the continuing costs, primarily in IT, attributable to 
> must-fix problems so long as they remain in production code. These ongoing costs 
> can result from the excessive effort to modify unnecessarily complex code, greater 
> resource usage by inefficient code, etc. 
> 
> [CISQ, 2018, p. 2](https://www.omg.org/spec/ATDM/1.0/PDF)

The source of the quote above is a specification document for a method of measuring
TD. It is again based on the CWE code weaknesses database, and generates an estimated
value based on the time required to fix a particular problem and the cost of the staff
required to carry out the work. The estimate takes into account 86 CWE items related
to the quality characteristics of **reliability**, **security**, **performance 
efficiency** and **maintainability**. Theoretically, the existence of this 
specification - which is likely to be adopted as a standard - will enable static
analysis tools to calculate the TD of a piece of code automatically. Progress on
this is slow, however, and CISQ expect that it will take another few years for the
management of technical debt to become standardised. In the meantime, some tools
such as [SonarQube](https://docs.sonarsource.com/sonarqube/latest/user-guide/metric-definitions/#maintainability)
include a calculation, but not necessarily one based on agreed standards.

## Clean code

![Code quality](https://imgs.xkcd.com/comics/code_quality_2.png#figure)
[*Source: xkcd* ](https://xkcd.com/1695)

An automated, numerical approach to code quality has its place: it can enable the
developer's IDE to provide useful feedback and refinement hints as the code is being
written. However, it cannot be comprehensive. The potential complexity of a piece of
software and the developer's freedom to structure it however they please means that
there are just too many unknown factors. The concept of the code smell is more useful
because it relies more on intuition. However, familiarity with code smells can only 
be built with experience and must therefore develop over time. Because of these 
drawbacks, it is useful to have an easy-to-follow set of guidelines for writing good
quality code. 

In 2009, Robert C. Martin, one of the signatories to the Agile Manifesto and 
affectionately known as Uncle Bob, published 
[Clean Code: a handbook of agile software craftsmanship](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/13v8mut/alma9923571583602111)
along with six co-authors. Its aim is to provide a solid framework for writing good
code, methods for identifying bad code and methods for turning bad code into good code.
Summarising its contents here is difficult because as the introduction states

> Learning to write clean code is hard work. It requires more than just the knowledge of 
> principles and patterns. You must sweat over it. You must practice it yourself, and 
> watch yourself fail. You must watch others practice it and fail. You must see them 
> stumble and retrace their steps. You must see them agonize over decisions and see the 
> price they pay for making those decisions the wrong way.
> 
> (Clean Code, Introduction)

With that proviso in mind, here are some of the main principles of Clean Code with short
examples and rationales. The book provides more examples and further detail as well as
covering other important concepts. **You are encouraged to read the whole book**.

Clean Code ([Martin, 2009](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/13v8mut/alma9923581530002111#please-read))

### Use meaningful names

Grady Booch said that 

> Clean code reads like well-written prose

One way to make that possible is to use names for variables, functions, classes, etc. 
that are readable, searchable and meaningful within the context. Martin provides the 
following simple java example at the start of Chapter 2:

``` java
public List<int[]> getThem() {
  List<int[]> list1 = new ArrayList<int[]>();
  for (int[] x : theList)
    if (x[0] == 4)
      list1.add(x);
    return list1;
 }
```
(Clean Code, Ch. 2)

It is easy to see that the code is extracting certain values from an `ArrayList`, but
why? What is the developer's *intent*? Simply renaming the variables reveals that the
code is identifying flagged items.

### Functions

In his lecture series presenting Clean Code, Martin summarises the approach as 
[*polite*](https://youtu.be/7EmboKQH8lM?si=lSU5Z4T6WLIsxQVf&t=3160). It should read like 
a newspaper article which follows certain conventions concerning the structure of the
paragraphs, the length of the paragraphs and the level of detail in each part. By
analogy, functions should

* Have names that are *verbs*
* Be short
* Have a small number of parameters
* Do one thing
* Have no side effects
* Confine themselves to a single level of abstraction

To arrive at a set of functions that adhere to these rules typically involves getting
something working first and then refining it through iterative refactoring.

### Comments

Clean Code should be self-documenting in the sense that simply reading the code 
reveals the intent of the developer and the purpose of the code. Occasionally, that
is difficult and a comment has to be used. Whenever you are tempted to add a comment, 
Martin recommends that you consider rewriting the code instead to make it more expressive.
In the book he says

> The proper use of comments is to compensate for our failure to express ourselves in code. 
> Note that I used the word failure. I meant it. Comments are always failures. We must 
> have them because we cannot always figure out how to express ourselves without them, 
> but their use is not a cause for celebration.
> 
> (Clean Code, Ch. 4)

The Clean Code approach to comments is at odds with some traditional views which suggest
that abundant comments are a sign of good code. When trying to understand someone else's
code, which would you prefer?

### Objects and data structures

Using an object-oriented (OO) approach to describe geometical shapes, you might think
of an abstract class `Shape` that defines a virtual method `area`. Each specific shape
such as `Square` or `Circle` would override the virtual method using the relevant area
formula. Martin suggests a different approach in which there is a major distinction
between *objects* and *data structures* which aids code clarity:

> **Objects** hide their data behind abstractions and expose functions that operate on 
> that data. 
> 
> **Data structures** expose their data and have no meaningful functions.
> 
> (Clean Code, Ch. 6)

Martin provides an example where the area calculation is a utility function inside a
general `Geometry` class. While more procedural, this approach is easier to follow
and makes certain maintenance tasks easier.

## Software engineering principles

As a further guide to good programming, there are several well-known principles and
rules of thumb that you need to be aware of. They come with mnemonics that help you
to remember them, and to a large extend they are included in the principles of Clean
Code.

### KISS

Standing for *Keep It Simple, Stupid*, the KISS principle targets the readability of code
by eliminating unnecessary complexity. The test is whether you would be able to return to 
your own code after a couple of months and still be able to understand its operation
perfectly.

### DRY

The situation often arises, especially when building code iteratively, that you need a
code block that is either identical to one used previously, or something very similar.
The quick and dirty method is to copy the previous block and to make any minor
modifications needed to make it run. The proper way to handle this situation would be 
to extract the code you are re-using into a separate function with parameters to control
any variations. This would be an exampe of the DRY principle: Do Not Repeat Yourself.

### YAGNI

In the interests of avoiding unnecessary complexity, a developer should only add code
when necessary rather than pre-emptively. This cautious approach avoids the risk of
redundant, partially-implemented or dead code accumulating in a system. When tempted
to do this, say to youself, "You Ain't Gonna Need It".

### SOLID

The SOLID acronym actually represents a set of five separate principles of code design:

> **Single Responsibility Principle**
> 
> Classes and methods should only perform a single responsibility. All the elements that 
> form a single responsibility should be grouped together and encapsulated.
> 
> **Open/Closed Principle**
> 
> Classes and methods should be open for extension and closed for modification. When a 
> change to the software is required, you should be able to extend the software without 
> modifying any of the code.
> 
> **Liskov Substitution**
> 
> Your function has a pointer to a base class. It must be able to use any class derived 
> from the base class without knowing it.
> 
> **Interface Segregation Principle**
> 
> When you have large interfaces, the clients that use them may not need all the methods. 
> So, using the Interface Segregation Principle (ISP), you extract out methods to 
> different interfaces. This means that instead of having one big interface, you have 
> many small interfaces. Classes can then implement interfaces with only the methods they 
> need.
> 
> **Dependency Inversion Principle**
> 
> When you have a high-level module, it should not be dependent upon any low-level 
> modules. You should be able to switch between low-level modules freely without 
> affecting the high-level module that uses them. Both high-level and low-level modules 
> should depend upon abstractions.
> 
> (Clean Code in C# ([Alls, 2020](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/n96pef/alma9923706264502111)))

## Further reading (and viewing)

* [Clean Code with Uncle Bob](https://www.youtube.com/playlist?list=PLmmYSbUCWJ4x1GO839azG_BBw8rkh-zOj) (video lectures)
* Trends and Findings in Measuring Software Quality Metrics in the Industry 
  [Falco & Rabiolo, 2022](https://doi.org/10.1109/ARGENCON55245.2022.9939935)
* Clean Code in C# ([Alls, 2020](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/n96pef/alma9923706264502111))
