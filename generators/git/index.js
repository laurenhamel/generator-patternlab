'use strict';

// Require dependencies.
const Generator = require('yeoman-generator');

// Build the generator.
module.exports = class extends Generator {
  
  // Construct the generator.
  constructor(args, options) {
    
    // Setup the generator.
    super(args, options);

  }

  // Initialize the generator.
  initializing() {
    
    // Copy the templates.
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
    
  }
  
};