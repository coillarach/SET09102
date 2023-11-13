# Working with multiple tables

This tutorial illustrates how to work with a database containing multiple related tables. To keep
things simple, we will only be adding one additional table, but the principles will be the same
for any number. 

##### Contents

## Target

We will add a new table called `category` that will be used to group notes together. One category
can have many notes as illustrated in the entity-relationship diagram below.

![Notes ER diagram](../../images/notes_erd.png)

The following requirements need to be implemented:

1. Create new category
2. Update a category
3. Delete a category - this will delete any related notes
4. Display notes grouped by category on the list page
5. Assign a note to a category on creation

## Create the _**Category**_ model

In addition to its name, a category will also have a priority that is defined by an enum. Use the 
code below to create a new file _**Category.cs**_ in the _**Models**_ directory.

```c#
using SQLite;

namespace Notes.Models;

public class Category
{
    [PrimaryKey, AutoIncrement]
    public int Id { get; set; }
    public string Name { get; set; }
    public Priority Priority { get; set; }
}

public enum Priority
{
    Low,
    Medium,
    High
}
```

