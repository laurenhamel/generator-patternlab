'use strict';

// Require dependencies.
const _ = require('lodash');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const extend = _.merge;

// Build the generator.
module.exports = class extends Generator {
  
  // Construct the generator.
  constructor( args, opts ) {
    
    // Setup the generator.
    super(args, opts);
    
  }
  
  // Initialize the generator.
  intializing() {
    
    // Read package data.
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    
    // Also, read the package template.
    const temp = this.fs.readJSON(this.templatePath('_package.json'), {});
    
    // Start building project properties.
    this.props = extend({}, temp, this.pkg);
    
    // Parse package data if it exists.
    if( !_.isEmpty(this.props) ) { 

      // Parse the repository string.
      if( _.has(this.props, 'repository') && _.isObject(this.props.repository) ) this.props.repository = this.props.repository.url;
      
    }
    
  }
  
  // Prompt the user.
  prompting() { }
  
  // Write to the project.
  writing() {
  
    // Copy the templates.
    this.fs.copy(
      this.templatePath('_secret.example.json'),
      this.destinationPath('secret.example.json')
    );
    this.fs.copy(
      this.templatePath('_README.md'),
      this.destinationPath('README.md')
    );
  
  }
  
  // Generate the project.
  default() { 
    
    // Create a `package.json` if one doesn't already exist.
    if( _.isEmpty(this.fs.readJSON(this.destinationPath('package.json'))) ) { 
      
      // Run `npm init`.
      this.composeWith(require.resolve('generator-npm-init/app'), {
        
        // Skip some package initialization options.
        'skip-test': true,
        'skip-main': true,
        
        // Set default package name.
        name: this.props.name || path.basename(this.destinationPath()),
        version: this.props.version || '1.0.0',
        keywords: this.props.keywords,
        author: this.props.author,
        license: this.props.license || 'ISC'
        
      });
      
    }
    
    // Create configuration files.
    this.composeWith(require.resolve('../editorconfig'));
    this.composeWith(require.resolve('../git'));
    this.composeWith(require.resolve('../grunt'));
    this.composeWith(require.resolve('../eslint'));
    this.composeWith(require.resolve('../jshint'));
    this.composeWith(require.resolve('../babel'));
    
    // Create pattern lab structure.
    this.composeWith(require.resolve('../patternlab'));
    
    // Create scripts and stylesheets.
    this.composeWith(require.resolve('../js'));
    this.composeWith(require.resolve('../scss'));
    
    // Create gruntfile.
    this.composeWith(require.resolve('../grunt'));
    
    // Repackage the `package.json` file.
    this.fs.writeJSON(this.destinationPath('package.json'), this.props);
    
  }
  
  // Install project dependencies.
  installing() {
    
    // Install npm dependencies.
    this.npmInstall();
    
  }
  
  // Done.
  end() {
    
    // Alert the user that the generator is done.
    this.log();
    this.log(chalk.green.bold('Your project is ready.'));
    this.log();
    this.log(`For more information about ${chalk.blue.bold('Pattern Lab')} ` +
             `visit ${chalk.blue.underline('patternlab.io')}, ` +
             `or to learn more about ${chalk.blue.bold('Atomic Design')}, ` +
             `visit ${chalk.blue.underline('atomicdesign.bradfrost.com')}.`);
    this.log();
    this.log(yosay('Thanks for using Yeoman!'));
    
  }
  
};