# Pattern Lab Yeoman Generator

> A [Yeoman][Yeoman] generator for [Pattern Lab][Pattern Lab] for creating [Atomic Design Systems][Atomic Design].

## Prerequisites

This generator uses [Yeoman][Yeoman] to scaffold a boilerplate [Pattern Lab][Pattern Lab] project. Once scaffolded, this Pattern Lab instance requires the use of [Node.js][Node.js] for core processiong and [npm][npm] for mangement of project dependencies. Additionally, this instance also uses [Grunt][Grunt] as a taskrunner and to interface with the core library. It's also highly recommended that you use [git][git] for installation and version control.

## Installation

- Install Yeoman `npm i -g yo` (one-time global installation).
- Install the generator `npm i -g laurenhamel/generator-patternlab` (one-time global installation)
- Create and open your project folder `mkdir <your_project> && cd <your_project>`
- Scaffold your new project `yo patternlab`

## Getting Started

If you have successfully completed installation, the Pattern Library should now be loaded on your system and ready to use. To get help with how to manage, build, and deploy patterns, please refer to Pattern Lab's [documentation][Docs]. 

## Development

For developers using this Pattern Library, all changes should take place in the `source/` directory. In addition, Grunt has been preloaded with some helpful commands. You can find more information on each available command below:

- `grunt`

  Executing the default `grunt` command will initialize development mode. See `grunt dev` for more details.
  
- `grunt init`

  This command will initialize the Pattern Library on a fresh installation of this package. Executing this command will build the `public/` directory on your system by running `grunt dist` as well as pull in standard dependencies and components that are needed in order to make Pattern Lab accessible via `localhost`. **This task is run automatically when your project is generated with Yeoman.**
  
- `grunt dev`

  This command will initiate development mode for the Pattern Library. This includes instantiating the `public/` directory, then broadcasting it to a local server available at `localhost:3000`, where any changes made to the Pattern Library should be reflected in real-time. Note, this live browser synchronization relies on a `watch` script, which is also executed and activated when the `grunt dev` command is invoked. The `watch` script will continue to run in the terminal window until exited (`CTRL+C`) or the terminal window is closed.
  
  > It's worth noting that, while the `watch` script will attempt to account for all changes that take place within the `source/` directory, newly created and/or deleted files may not be synced automatically. If adding/deleting patterns, stylesheets, or anything else while running `grunt dev`, the `grunt dev` command will likely need to be canceled then restarted in order to account for any changes to the folder structure.
  
- `grunt dist`

  This command is intended to simulate a production build. Executing this command will copy selected folders and files and output them to a versioned subfolder within a `dist/` directory for your distribution.

- `grunt release`

  This command will run the `grunt dist` command, then push a tagged release to GitHub. It will also deploy a copy of your distribution files to your SSH server using [`grunt-ssh-deploy`](github.com/dasuchin/grunt-ssh-deploy) and a `secret.json` configuration.

[Yeoman]: yeoman.io
[Node.js]: nodejs.org
[npm]: npmjs.com
[Grunt]: gruntjs.com
[git]: git-scm.com
[Pattern Lab]: patternlab.io
[Docs]: patternlab.io/docs
[Atomic Design]: atomicdesign.bradfrost.dom
