# DevxBase
DevxBase is a code generation tool. Based on an entity model, this tool will generate
code for the following layers:
 
* Server
  * Microsoft .Net Core (using C#)
  * Node.js (using TypeScript)

* Client
  * HTML (Browser)
  * Cordova (Mobile)
  * Electron (Desktop: Windows, Mac, Linux)

##Areas

The following areas will be covered

* Application service (application entry point)
* Entity POxO - plain old C#/TypeScript objects
* Entity specification
* Entity validation
* Entity service
* Entity repository (interface)
* Infrastructure context
* Infrastructure repository

##Our Plan

We use Microsoft Visual Studio Code as the development plattform.

There is a GUI available, which will help configure the generator configuration files.

The **server** side code is implemented twice, once with C# (.NET Core) and once with TypeScript (Node.js).
The reason for this is a proof of concept. We would like to proof:

* can we have the same principles for C# and Node.Js components?
* how about business logic, how about integration (databases, etc.)?
* how does this feel ;-) ?

We will use DDD (Domain Driven Design) principles.

As the data store we will use MS Sql, MySql, MonoDb.

The **client** side code is implemented with HTML, CSS and TypeScript.
We use different technologies to have the application running in the browser, on mobile devices 
(Android, IOS and Windows) and on desktops (Linux, Mac OSX and Windows).
The goal is to only implement the GUI once and deploy the 'same' source files to the different environments.

##Help needed

We are in the process of figuring out, which technology to use here. At the moment we 
are evaluating solutions with TypeScript as a language, Json as configuration files,
template files are just plain text files. **But which template language should be used?**
Frist we will have a try with **yeoman**.

If you are interessted in helping out, please leave a message. Thank you!

#generall

* install Microsoft Visual Code
* install .Net Core (http://dotnet.github.io/getting-started/)
* install Node.js (https://nodejs.org/en/)
