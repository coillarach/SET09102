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
2. List categories
3. Update a category
4. Delete a category - this will delete any related notes
5. Display notes grouped by category on the list page
6. Assign a note to a category on creation

The upgrade to the existing application will be done in stages to make each change clear.
Initially, changes will be made using the existing material as a template, but later
there will be some refactoring to remove a lot of the obvious duplication.

## Preparation

SQLite can be configured to enfore foreign key relationships, but to make use of them easily
in C# code, we need to add another NuGet package. Use the package manager in Visual Studio
to find and install [SQLite-Net Extensions](https://bitbucket.org/twincoders/sqlite-net-extensions/src/master/).
This package adds support for the definition of foreign key relationships in models and for
performing joins in queries.

## Create the _**Category**_ model

This is needed for all the category operations.

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

### Create the _**Category**_ service

Copy the Notes service & change relevant details

## Creating categories

Requirements: 

* View
* ViewModel
* Navigation

### Create the _**CategoryPage**_ view

Copy the NotePage.xaml 

Change the relevant details:
x.Class
Title
Change `Editor` to `Entry` for text string instead of text area and change name
Add Picker to choose priority for a new category

### Create the _**Category**_ viewmodel

Copy the NoteViewModel

Change the relevant details

Add the priority list

### Navigarion

Add toolbar item for the CategoryPage

Run app & add some categories

## List categories

Requirements:

* View
* Viewmodel
* Navigation

### View

Copy AllNotesPage & change relevant details

### Viewmodel

Copy AllNotesViewNodel & change relevant details

## Add a tab

Use the current convention of putting categories on another tab. This may not be sustainable
if we add a large number of other object types to the app in the future.

Add images to the Resources->Images folder

Add tab in AppShell.xaml


