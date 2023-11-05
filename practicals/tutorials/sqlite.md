# Update the notes app to use SQLite

This tutorial takes you through the process of converting your notes app to use a database instead
of storing notes as a series of text files. It is based on the Microsoft
[ToDo app tutorial](https://learn.microsoft.com/en-us/dotnet/maui/data-cloud/database-sqlite) which
refers to the [sample MAUI apps](https://github.com/dotnet/maui-samples) provided on GitHub.

You need to have completed the initial 
[notes app tutorial](https://learn.microsoft.com/en-us/dotnet/maui/tutorials/notes-app/) **and** the
follow-on [MVVM tutorial](https://learn.microsoft.com/en-us/dotnet/maui/tutorials/notes-mvvm/). The
code that you end up with after the MVVM tutorial provides the starting point for this one.

Here, we will take advantage of the dependency injection framework built into .NET MAUI to
manage access to the database.

##### Contents

1. [Preparation](#preparation)
2. [Install NuGet packages](#install-nuget-packages)
3. [Change the way the binding context is set](#change-the-way-the-binding-context-is-set)
4. [Configure app constants](#configure-app-constants)
5. [Create a database context](#create-a-database-context)
6. [Create the Notes service](#create-the-notes-service)
7. [Update the _**Note**_ model](#update-the-note-model)
8. [Updating the viewmodels](#updating-the-viewmodels)
9. [Updating the views](#updating-the-views)
10. [Conclusion](#conclusion)

## Preparation

Make a backup of your application or commit the current version to a code repository so that you
can start this tutorial over again if necessary.

Open the solution in Visual Studio and check that you have the following viewmodels:

* `AboutViewModel.cs`
* `AllNotesViewModel.cs`
* `NoteViewModel.cs`

If you have `NotesModel.cs` instead of `AllNotesViewModel`, change its name by following these steps:

* Right-click on the viewmodel in the solution explorer and select *Rename...*
* Type in the new name and press *Return*
* Answer *Yes* to the dialog asking whether the rename all references in the project
* Open the file `AllNotesPage.xaml` and update the reference to the viewmodel on line 8

Go through each of the viewmodels and make sure that the accessibility level of the main class is
`public`. Do the same for the _**Note**_ model.

Run the application to check that it behaves as it should.

## Install NuGet packages

Use the NuGet package manager to search for the `sqlite-net-pcl` package and add the latest version 
to your .NET MAUI app project.

There are a number of NuGet packages with similar names. The correct package has these attributes:

* ID: sqlite-net-pcl
* Authors: SQLite-net
* Owners: praeclarum
* NuGet link: [sqlite-net-pcl](https://www.nuget.org/packages/sqlite-net-pcl/)

Despite the package name, use the sqlite-net-pcl NuGet package in .NET MAUI projects.

> SQLite.NET is a third-party library that's supported from the 
> [praeclarum/sqlite-net repo](https://github.com/praeclarum/sqlite-net).

In addition to `sqlite-net-pcl`, you temporarily need to install the underlying dependency that 
exposes SQLite on each platform:

* ID: SQLitePCLRaw.bundle_green
* Version: >= 2.1.0
* Authors: Eric Sink
* Owners: Eric Sink
* NuGet link: [SQLitePCLRaw.bundle_green](https://www.nuget.org/packages/SQLitePCLRaw.bundle_green/)

## Change the way the binding context is set

Currently, the binding context fo a content page is set using a xaml element. For reasons that will 
become clear later, we need to modify the code so that the binding context is set in C# code. We can
do that by removing the relevant lines in each of the two xaml files and replacing them with equivalent
statements in the related code behind C# files. For more details on setting the binding context, see
the [Microsoft documentation](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/data-binding/basic-bindings).

Open _**AllNotesPage.xaml**_, find the lines below (around line 8) and remove them.

```xml
<ContentPage.BindingContext>
    <viewModels.AllNotesViewModel />
</ContentPage.BindingContext>
```

Open _**AllNotesPage.xaml.cs**_ and change the constructor so that it matches the code below. 

```c#
public AllNotesPage()
{
    this.BindingContext = new AllNotesViewModel();
    InitializeComponent();
}
```

You will also need to add the relevant `using` statement at the top of the file.

Make the equivalent changes in _**NotePage.xaml**_ and _**NotePage.xaml.cs**_. We do not need to change 
_**AboutPage**_ because it does not need to access the database.

Run the app to check that it behaves as expected.

## Configure app constants

Configuration data, such as database filename and path, can be stored as constants in your app.
Create a C# class file _**Constants.cs**_ by right-clicking on the project in the solution explorer
and selecting *Add item...*. Once the file is created, replace the default code with the following.

```c#
public static class Constants
{
    public const string DatabaseFilename = "Notes.db3";

    public const SQLite.SQLiteOpenFlags Flags =
        SQLite.SQLiteOpenFlags.ReadWrite |
        SQLite.SQLiteOpenFlags.Create |
        SQLite.SQLiteOpenFlags.SharedCache;

    public static string DatabasePath =>
        Path.Combine(FileSystem.AppDataDirectory, DatabaseFilename);
}
```

The three flag settings open the database in read/write mode, create the database if it does not
already exist and enable multi-threaded access. You may need to specify different flags depending on 
how your database will be used. For more information about SQLiteOpenFlags, see 
[Opening A New Database Connection](https://www.sqlite.org/c3ref/open.html) on sqlite.org.

## Create a database context

A database wrapper class abstracts the data access layer from the rest of the app. 
This class centralizes query logic and simplifies the management of database initialization, 
making it easier to refactor or expand data operations as the app grows. For now, the wrapper class 
will be placed in a directory called _**Data**_ under the project as shown in Fig. 1.

![Data directory](../../images/data_directory.png)

### Lazy initialization

The _**NotesDbContext**_ uses asynchronous lazy initialization to delay creation of the database 
until it is first accessed, with a simple `Init` method that gets called by each method in the class:

```C#
using SQLite;
using Notes.Models;

namespace Notes.Data
{
    public class NotesDbContext
    {
        public SQLiteConnection connection;

        public NotesDbContext() {}

        public void Init()
        {
            string databasePath = Constants.DatabasePath;
            if (connection is not null)
            {
                return;
            }
            connection = new SQLiteConnection(databasePath, Constants.Flags);
            connection.CreateTable<Note>();
        }
    }
}

```

The local variable `databasePath` may seem redundant; however, without this line an error occurs
when trying to access the _**Constants.cs**_ file directly. This implementation uses the 
synchronous API provided by _**sqlite-net-pcl**_ to avoid errors found with the asynchronous API.

## Create the Notes service

In .NET MAUI, a *service* represents a dependency that can be injected into other classes when needed.
A _**Builder**_ class is provided to help define services, amd the _**MauiProgram.cs**_ file acts as a
dependency injection container where services are registered along with views and viewmodels. For
more details on dependency injection, see the 
[Microsoft documentation](https://learn.microsoft.com/en-us/dotnet/architecture/maui/dependency-injection).

The Notes service will handle all database operations on Note objects. 
Creating the service involves x steps.

1. Create a new directory called _**Services**_ under the project root


2. In the new directory, create an interface with the filename _**INotesService.cs**_ and replace its
   default contents with the code below.
   ```c#
   using Notes.Models;

   namespace Notes.Services
   {
       public interface INoteService
       {
           List<Note> GetItems();
           Note GetItem(int id);
           int SaveItem(Note item);
           int DeleteItem(Note item);
       }
   }
   ```

3. Next, create an implementation of the interface by adding the file _**NotesService.cs**_ to the
   _**Services**_ directory. Replace the default `using` statements in the new file with those shown
  below and add a reference to the _**INotesService**_ interface as shown below.

   ```c#
   using Notes.Models;
   using Notes.Data;
   
   namespace Notes.Services
   {
       class NotesService : INoteService
       {
       }
   }
   ```
   
   The interface name will be underlined in red because the body of the class is empty. Add the 
   following code to the body of the class. Note the dependency injection in the constructor and
   the calls to `Init()` in each of the methods. 
   
   ```c#
    public NotesDbContext _dbContext;
    public NoteService(NotesDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    public int DeleteItem(Note item)
    {
        _dbContext.Init();
        return _dbContext.connection.Delete(item);
    }

    public List<Note> GetItems()
    {
        _dbContext.Init();
        return _dbContext.connection.Table<Note>().ToList();
    }

    public Note GetItem(int id)
    {
        _dbContext.Init();
        return  _dbContext.connection.Table<Note>().Where(i => i.Id == id).FirstOrDefault();
    }

    public int SaveItem(Note item)
    {
        _dbContext.Init();
        if (item.Id != 0)
            return _dbContext.connection.Update(item);
        else
            return _dbContext.connection.Insert(item);
    }

   ```

4. Finally, register the service in _**MauiProgram.cs**_. We will take the opportunity to 
   register our views and viewmodels at the same time. Add the following code to the file after the
   definition of the `builder` object. There are three sections related to the services, viewmodels
   and views respectively. 
   
   ```c#
    builder.Services.AddSingleton<NotesDbContext>();
    builder.Services.AddSingleton<INoteService, NoteService>();
    
    builder.Services.AddSingleton<AllNotesViewModel>();
    builder.Services.AddTransient<NoteViewModel>();
    
    builder.Services.AddSingleton<AllNotesPage>();
    builder.Services.AddTransient<NotePage>();
   ```

Microsoft's [dependency injection framework](https://learn.microsoft.com/en-us/dotnet/architecture/maui/dependency-injection)
takes care of the majority of service relationships without you having to write any code. Registering
the services as shown above makes them available for injection automatically. We will see
this in action in the section on viewmodels below.

At this point, you should still be able to run the app and it should behave as it did before.

## Update the _**Note**_ model

The _**Note**_ model needs to be changed to represent a database item rather than a text file.
The existing methods that are used to manipulate notes can all be removed because database operations
will be handled by the _**NoteService**_. We will also replace the `Filename` property with an `Id` 
that will be used as the primary key in the database table. The _**sqlite-net-pcl**_ package simplifies 
the code by allowing the use of *annotations*. These are inline labels enclosed in square brackets that 
trigger the generation of boilerplate code behind the scenes. 

Open the _**Note.cs**_ file and replace the contents with the following:

```C#
using SQLite;

namespace Notes.Models;

public class Note
{
    [PrimaryKey, AutoIncrement]
    public int Id { get; set; }
    public string Text { get; set; }
    public DateTime Date { get; set; }
}
```

The changes to the _**Note**_ model will create errors in the existing viewmodels. These will need
to be fixed before we can run the app again.

## Updating the viewmodels

Starting with the _**NoteViewModel**_, we need to remove references to the old approach of storing 
notes in a text file and replace them with references to our new _**NoteService**_ that will store
them in a database instead. Open the file and look at the errors that are highlighted by Visual
Studio. They either refer to the `Filename` property or the data maintenance methods which have just 
been removed.

Replace the definition of the class property `Filename` with the line below which defines the `Id`
property as the corresponding property of the `_note` object;

```c#
public int Id => _note.Id;
```
We next need to inject the _**NoteService**_ dependency. Do this by defining a private class property,
adding a parameter to the existing parameterless constructor and setting the internal reference as 
shown below. Notice the use of the interface to decouple the viewmodel from the implementation of
the service.

```c#
private INoteService _noteService;
public NoteViewModel(INoteService noteService)
{
    _noteService = noteService;
    _note = new Models.Note();
}
public NoteViewModel(INoteService noteService, Note note)
{
    _note = note;
    _noteService = noteService;
}
```

There is a second constructor that takes a new note object as a parameter, You need to make the
equivalent changes to that constructor as well as shown.

We can now resolve the remaining errors by replacing the calls to the deleted methods with calls to 
the appropriate service methods. This is shown in the code snippet below which can be pasted directly
into the file.

```c#
[RelayCommand]
private async Task Save()
{
    _note.Date = DateTime.Now;
    _noteService.SaveItem(_note);
    await Shell.Current.GoToAsync($"..?saved={_note.Id}");
}

[RelayCommand]
private async Task Delete()
{
    _noteService.DeleteItem(_note);
    await Shell.Current.GoToAsync($"..?deleted={_note.Id}");
}

void IQueryAttributable.ApplyQueryAttributes(IDictionary<string, object> query)
{
    if (query.ContainsKey("load"))
    {
        _note = _noteService.GetItem(int.Parse(query["load"].ToString()));
        RefreshProperties();
    }
}

public void Reload()
{
    _note = _noteService.GetItem(_note.Id);
    RefreshProperties();
}

```

Note the use of the `[RelayCommand]` annotations. These are provided by the 
_**CommunityToolkitMvvm**_ NuGet package and trigger the generation of standard code for 
assigning methods to commands. To use annotations, the class must be declared as `partial`.
The annotations take the place of the lines shown below which can be removed.

```c#
public ICommand SaveCommand { get; private set; }
public ICommand DeleteCommand { get; private set; }

SaveCommand = new AsyncRelayCommand(Save);
DeleteCommand = new AsyncRelayCommand(Delete);
```

Another change in this version is the use of the `Shell.Current.GoToAsync()` command to go
back to the list page after a save or delete operation.

Turning to the _**AllNotesViewModel**_, we need to add dependency injection and use the injected
`NoteService` in the constructor to populate the initial list of notes. This can be done using the
code snippet below.

```c#
private INoteService _noteService;
public AllNotesViewModel(INoteService noteService)
{
    _noteService = noteService;
    AllNotes = new ObservableCollection<NoteViewModel>(
        _noteService.GetItems().Select(n => new NoteViewModel(_noteService, n)));
    NewCommand = new AsyncRelayCommand(NewNoteAsync);
    SelectNoteCommand = new AsyncRelayCommand<NoteViewModel>(SelectNoteAsync);
}
```

Note that the last two lines could be eliminated by using annotations for the command methods.
This is left as an exercise. If you decide to do this, you must remember that the name of the
command generated is related to the name of the method. `NewNoteAsync()`, for example, will
generate a command called `NewNoteCommand`. You will therefore need to update the reference to the
command in _**AllNotesPage.xaml` so that it matches.

The remaining errors either refer to the `Identifier` property of the note object (previously set
to the note filename and now replaced by the `Id` property) or to the old `Load()` method. To resolve
the issues related to the property name, you need to replace `Identifier` with `Id`. This causes a
new error, however, because the new `Id` property is an integer whereas the old `Identifer` 
(= `Filename`) was a string. This can be fixed by converting the value passed in the query to an
integer as shown below.

```c#
NoteViewModel matchedNote = AllNotes.Where((n) => n.Id == int.Parse(noteId)).FirstOrDefault();
```

To fix the final error, replace the line referring to the old `Load()` method with the call to the
_**NoteService**_ as shown below.

```c#
AllNotes.Insert(0, new NoteViewModel(_noteService, _noteService.GetItem(int.Parse(noteId))));
```

The changes to the viewmodels will create some new errors in the views that refer to them. These will
need to be fixed before the app will run.

## Updating the views

In an early conversion step, we changed the way the binding context was set for a page by moving
the operation from the xaml to the C# code. That created a tight dependency between the view and
the viewmodel which we can now delegate to the dependency injection framework. We do this by simply
adding the dependency as a parameter to the constructor. Because we registered the appropriate
services in _**MauiProgram.cs**_, the dependency injection framework will pick them up automatically
for us.

Replace the constructor in _**AllNotesPage.xaml.cs**_ with the following.

```c#
public AllNotesPage(AllNotesViewModel viewModel)
{
    this.BindingContext = viewModel;   
    InitializeComponent();
}
```

Then replace the constructor in _**NotePage.xaml.cs**_ with the following.

```c#
public NotePage(NoteViewModel viewModel)
{
    this.BindingContext = viewModel;   
    InitializeComponent();
}
```

## Conclusion

You should now be able to run the app. When it is first started, any notes that you had created
will have disappeared because the app is now looking for them in the database. You should be able to
create, uodate and delete notes as before.

The complete code for this app can be found in 
[GitHub](https://github.com/edinburgh-napier/Notes-SQLite).
