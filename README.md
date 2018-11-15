# Pattern Lab Yeoman Generator

> A [Yeoman][Yeoman] generator for [Pattern Lab][Pattern Lab] for creating [Atomic Design Systems][Atomic Design].

## Prerequisites

This generator uses [Yeoman][Yeoman] to scaffold a boilerplate [Pattern Lab][Pattern Lab] project. Once scaffolded, this Pattern Lab instance requires the use of [Node.js][Node.js] for core processiong and [npm][npm] for mangement of project dependencies. Additionally, this instance also uses [Grunt][Grunt] as a taskrunner and to interface with the core library. It's also highly recommended that you use [git][git] for installation and version control.

## Installation

- Install Yeoman `npm i -g yo` (one-time global installation).
- Clone the repo to your system `npm clone https://github.com/laurenhamel/generator-patternlab`
- Open a terminal and `cd` to the location where you cloned the repo
- Install the generator globally with `npm link`
- Create and open a folder for your new project `mkdir <your_project> && cd <your_project>`
- Scaffold your new project `yo patternlab`

## Getting Started

If you have successfully completed installation, the Pattern Library should now be loaded on your system and ready to use. To get help with how to manage, build, and deploy patterns, please refer to Pattern Lab's [documentation][Docs]. 

[Yeoman]: yeoman.io
[Node.js]: nodejs.org
[npm]: npmjs.com
[Grunt]: gruntjs.com
[git]: git-scm.com
[Pattern Lab]: patternlab.io
[Docs]: patternlab.io/docs
[Atomic Design]: atomicdesign.bradfrost.dom
