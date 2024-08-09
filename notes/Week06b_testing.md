# Software testing

<hr class="splash">

![Michael Feathers](../images/michael_feathers.png)

### Code without tests is bad code. <br/>It doesn't matter how well written it is; it doesn't matter how pretty or object-oriented or well-encapsulated it is. <br/>With tests, we can change the behavior of our code quickly and verifiably. <br/>Without them, we really don't know if our code is getting better or worse.

<br/>

*Michael Feathers*

<hr class="splash">


###### Contents

1. [Types of testing](#types-of-testing)
2. [Further reading](#further-reading)

## Types of testing

Although unit testing is of the most immediate concern to developers, there are other
types of testing that it is important to be aware of. Some of the traditional categories
are less relevant in the age of devops, but they are nevertheless stillin common use.
The tour below illustrates a few of the major types.

<h6 align="center"> Here's you, engineering your software...

<a href="https://bdavison.napier.ac.uk/set09102/testing.html" target="_blank" alt="Software testing">
    <img src="../images/you_small.png">
</a>
</h6>


### Integration testing

Once a code change has passed its unit tests, we need to make sure that it will work well
with other parts of the system and that it does not cause any errors. That is the job of
*integration testing* which focuses on the new (or modified) code, and its known 
interactions with other elements of the system. 

### Regression testing

While integration testing is limited in scope, *regression testing* is aimed at ensuring
that the whole system behaves as it should. The concept is very similar to integration
testing except that it is not limited to just the parts of the system that we know are
affected by a recent change.

With modern testing tools and devops, the distinction between integration and regression
testing is not as clear as it used to be. With the majority of our tests in the form of
code files that can be run automatically, the entire system can be regression tested on
a daily basis.

### Load testing

During development, software engineers work with small amounts of data, and only a handful
of users are accessing the system at any one time. Once the system is deployed, there will
typically be much more data and many more simultaneous connections. To ensure that the 
system will be able to withstand the increased workload, *load testing* can be used to
simulate realistic traffic levels. Sometimes called *soak testing*, it is not usually carried
out by software engineers, but if any problems are discovered with the way the software is
built, it will be the software engineers who need to fix it.

### Security testing

To ensure that the system is safe from attack and that the data cannot be accessed without
authorisation, various types of security testing can be used. These can include automated
tests using tools such as 
[SonarQube](https://www.sonarsource.com/lp/solutions/security/?utm_source=bing&utm_medium=paid&utm_campaign=SQ-EMEA-Generic&utm_term=security%20testing&utm_content=SAST&msclkid=7c0d61766bf81327e29704553152e093)
or manual [penetration testing](https://www.ncsc.gov.uk/guidance/penetration-testing) 
carried out by security professionals. Although this type
of test is not carried out by software engineers, they are again the ones who will be
required to fix any issues. In general, it is better to avoid security issues by adopting
secure development practices from the outset as discussed in the 
[secure software developmentsection](Week11b_secure_software_development.md).

### Usability testing

While they are working on an application, software engineers become so familiar with its 
design and structure that the style of the pages, the process flows and the data structures
seem obvious. The operation of the system may not be as straightforward to end users who do not 
have the benefit of knowing its inner workings. *Usability testing* aims to discover any
weaknesses in the user interface that might make it difficult to operate for an ordinary
user. To be effective, this type of testing has to be carried out with the participation of
real people.

### Accessibility testing

While usability focuses on the design choices that the software engineers have made in the 
construction of the system, *accessibility* is concerned with the support for disabled
users. The most significant issue is whether the system works with a screen reader, but there 
are many other guidelines for creating accessible software that are not obvious to those with
no sensory or physical impairments. 

The most widely-used set of rules for software accessibility is the 
[Web Content Accessibility Guidelines](https://wcag.com/resource/what-is-wcag/) 
(WCAG) published by the World Wide Web Consortium (W3C). W3C provide 
[guidance on how to perform accessibility testing](https://www.w3.org/WAI/test-evaluate/) either
in the form of participatory sessions as with usability testing,or through the use of technical
tools that examine the structure an capabilities of the user interface. Automated testing
is possible for web applications because their user interface is rendered in HTML which can
be easily scanned. Some vendors of development tools such as 
[Microsoft](https://learn.microsoft.com/en-us/windows/win32/winauto/inspect-objects)
provide their own inspection tools for testing the accessibility of code during development.

### Acceptance testing

Acceptance criteria are defined for each user story in a development project when it is 
elaborated prior to development. These criteria set out explicitly when the development
task can be considered to be *done*. By this means, the software engineers attempt to 
ensure that the user's needs as expressed in the original user stories are implemented
correctly. However, those intentions still need to be tested with the users themselves.

Although the ultimate aim of acceptance testing is to ensure that the final product is
complete and conforms to the original requirements, it is not necessary to wait until
the end of the project to carry out acceptance testing. It can be integrated into the
flow of the project just like other types of testing. This embodies agile
principles 1, 3, 4 and 7:

> **1**: Our highest priority is to satisfy the customer through early and continuous 
> delivery of valuable software.
> 
> **3**: Deliver working software frequently, from a couple of weeks to a couple of months, 
> with a preference to the shorter timescale.
> 
> **4**: Business people and developers must work together daily throughout the project.
> 
> **7**: Working software is the primary measure of progress.

## Further reading

* Testing ([Stephens, 2022, Ch. 13](https://learning.oreilly.com/library/view/beginning-software-engineering/9781119901709/c13.xhtml))
