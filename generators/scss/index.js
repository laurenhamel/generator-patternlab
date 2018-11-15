'use strict';

// Require dependencies.
const Generator = require('yeoman-generator');
const path = require('path');
const _ = require('lodash');
const extend = _.merge;

// Build the generator.
module.exports = class extends Generator {
  
  // Construct the generator.
  constructor(args, options) {
    
    // Setup the generator.
    super(args, options);
    
    // Extend the context.
    this.fs = extend(this.fs, require('../../lib/fs.js')(this));

  }

  // Initialize the generator.
  initializing() {
    
    // Copy the templates.
    this.fs.copy(
      this.templatePath('_scss'),
      this.destinationPath('src/scss')
    );
    // Copy the templates.
    this.fs.copy(
      this.templatePath('_fonts'),
      this.destinationPath('src/fonts')
    );
    
  }
  
  // Write to the project.
  writing() {
    
    // Build a list of folders that may contain dot files.
    const dotFolders = [
      this.destinationPath('src/fonts'),
      this.destinationPath('src/scss')
    ];
    
    // Rename all dot files.
    this.fs.store.each((file) => { 
      
      // Get the file path.
      file = _.isArray(file.history) ? file.history[0] : file.history;
      
      // Rename all dot files within the given folder.
      if( this.fs.containsAny(file, dotFolders) ) {
      
        // Rename the dot files within the folder.
        this.fs.renameIf(
          file,
          (src) => !path.extname(src) && path.basename(src).indexOf('_') === 0,
          (filename) => filename.replace(/^_/, '.')
        );
        
      }
      
    });
    
  }
  
};