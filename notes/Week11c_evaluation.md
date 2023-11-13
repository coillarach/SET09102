# Evaluating code quality

GQM 
Goal Question Metric

## Product Quality Evaluation Method (PQEM)

PQEM [(Falco & Robolio, 2020)](https://doi.org/10.1109/ARGENCON49523.2020.9505405),
illustrated in Fig. 1, is a five-step method based on 
[ISO/IEC 25010](https://napier.primo.exlibrisgroup.com/permalink/44NAP_INST/19n0mho/cdi_bsi_primary_000000000030215101)
that produces a single value between 0 and 1 that represents the overall product quality synthesised 
from measurements of selected quality attribute requirements (QARs).
It uses the goal-question-metric (GQM) approach 
([Basili, Caldiera & Rombach, 1994](https://www.ecs.csun.edu/~rlingard/COMP587/gqm.pdf)) 
to define the quality criteria relevant to a project, the questions that examine each criterion
using natural language and finally the corresponding quantitative metric. 

``` mermaid
flowchart LR
    classDef invisible stroke:none,fill:none
    classDef mainStep fill:#fbc69f,stroke:#ef9f65
    classDef subStep fill:#d3ebfc,stroke:#ef9f65

    subgraph id2["&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Elicitation of Quality<br/>Attributes Requirements (QARs)"]
        subgraph spacer [ ]
            direction TB
            id2a --> id2b
            id2b --> id2c
            id2c --> id2d
        end
    end

    id1([1. Product<br/>setup])
    id2a(["a. Select quality characteristics<br/>and sub-characteristics"])
    id2b(["b. Specify quality attributes<br/>requirements"]) 
    id2c(["c. Define metrics of each<br/>quality attribute requirement"])
    id2d(["2. Define the<br/>acceptance criteria for the<br/>expected quality level"])
    id3(["3. Measure and test<br/>each quality attribute<br/>requirement"])
    id4(["4. Collect and<br/>synthesize<br/>results"])
    id5(["5. Assessment of<br/>the product<br/>quality level"])
    
    id1 --> id2
    id2 --> id3
    id3 --> id4
    id4 --> id5

    class spacer invisible
    class id1 mainStep
    class id2 mainStep
    class id3 mainStep
    class id4 mainStep
    class id5 mainStep
    class id2a subStep
    class id2b subStep
    class id2c subStep
    class id2d subStep
```

*Fig. 1: PQEM process*

## Code quality metrics

Over time, a set of commonly-used metrics has been developed to evaluate code quality. 
Falco and Robiolo ([2019](https://doi.org/10.1007/978-3-030-35333-9_51)) identify 269
metrics in total from a review of software quality literature; however, only a small
number of these are typically implemented in development tools. Listed below are the
six metrics that can be generated from Visual Studio.

> **Maintainability Index**
>
> A value between 0 and 100 that represents the relative ease of maintaining the code 
> where higher values indicate better maintainability. The Visual Studio interface 
> colour-codes the results for easy reference:
> * Green (20 - 100): good 
> * Yellow (10 - 19): moderate
> * Red (0 - 9): low 
> 
> **Cyclomatic Complexity**
>
> An indication of the structural complexity of the code created by calculating the number 
> of different code paths in the flow of the program. High complexity implies more tests
> and lower maintainability. 
> 
> **Depth of Inheritance**
> 
> Indicates the number of different classes that inherit from one another where a
> higher number, the higher the potential for base class modifications to 
> result in a breaking change.
> 
> **Class Coupling**
> 
> Measures the coupling to unique classes through parameters, local variables, return 
> types, method calls, generic or template instantiations, base classes, interface 
> implementations, fields defined on external types, and attribute decoration. Good 
> software design dictates that types and methods should have high cohesion and low 
> coupling. High coupling indicates a design that is difficult to reuse and maintain 
> because of its many interdependencies on other types.
> 
> **Lines of Source code**
> 
> Indicates the exact number of source code lines that are present in your source file,
> including blank lines.
> 
> **Lines of Executable code**
> 
> Indicates the approximate number of executable code lines or operations. This is a count 
> of number of operations in executable code.
> 
> [Microsoft](https://learn.microsoft.com/en-us/visualstudio/code-quality/code-metrics-values?view=vs-2022)

The first four metrics in the list are generally useful and widely used. The last two are
debatable. The *Lines of Source Code* metrics includes blank lines and comments and is
therefore highly dependent on coding style and standards. The *Lines of Executable Code*
on the other hand is just an indication of the size of the application. It could be 
argued that applying the Clean Code approach of maximum extraction would tend to increase
the overall number of executable lines of code but would at the same time improve
maintainability and reduce cyclomatic complexity. In this instance it is worth bringing to 
mind this quote from Bill Gates:

> Measuring programming progress by lines of code is like measuring aircraft building 
> progress by weight.

## Application of human judgement

It is important ot remember that quantitative metrics either have to be quite simple
for them to be calculated reliably, or they become difficult to understand. For example, 
the maintainability index used in Visual Studio is calculated as shown below.

```
Maintainability Index = 
    Max(0, (171 - 5.2 * ln(Halstead Volume) - 
            0.23 * (Cyclomatic Complexity) - 
            16.2 * ln(Lines of Code)
           ) * 100 / 171)
```

It includes some hard-coded coefficients, references to two measures of complexity,
cyclomatic complexity and the 
[Halsead volume](https://www.verifysoft.com/en_halstead_metrics.html) as well as the 
logarithm of the lines of code metric. While the results may be useful as a rough guide,
the formula does not lend itself to easy interpretation.

Along with numerical metrics, therefore, it is important to include human judgement.
The main method for doing that is the code review process which in turn relies on the 
knowledge and experience of the development team.

## Further reading

* OOCQM: Object Oriented Code Quality Meter ([Shaheen et al., 2019](https://doi.org/10.1007/978-3-030-25225-0_11))
