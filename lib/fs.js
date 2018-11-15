// Require dependencies
const path = require('path');
const _ = require('lodash');

// Build helpers for handling files.
module.exports = ( context ) => {
  
  // Define utility methods.
  const utils = {
    
    // Rename a single file.
    rename( src, callback ) {

      // Extract the path parts.
      let basename = path.basename(src);
      let dirname = path.dirname(src);

      // Rename the file.
      basename = _.isFunction(callback) ? callback(basename) : (callback || basename);

      // Determine the new path.
      const renamed = path.resolve(dirname, basename);

      // Rename the file.
      context.fs.move(src, renamed);

    },
    
    contains( string, match ) {
      
      return string.indexOf(match) > -1;
      
    }
    
  };
  
  // Return public methods.
  return {

    // Rename a single file.
    rename( file, callback ) {

      // Verify that the path exists.
      if( context.fs.exists(file) ) {

        // Rename the file.
        utils.rename(file, callback);

      }

    },

    // Rename a single file if it meets some criteria.
    renameIf( file, criteria, callback ) {

      // Verify that the path exists.
      if( context.fs.exists(file) ) {

        // Determine whether or not the criteria has been met.
        const proceed = _.isFunction(criteria) ? criteria(file) : criteria;

        // Only proceed to rename the file if the criteria has been met.
        if( proceed ) utils.rename(file, callback);

      }

    },
    
    // Check if a file's path contains any of the given substrings.
    containsAny( file, matches ) {
      
      // Handle multiple matches.
      if( _.isArray(matches) ) {
        
        // Check each match individually.
        for( let i = 0; i < matches.length; i++ ) {
          
          // Get the match data.
          const match = matches[i];
          
          // Immediately exit if a match is found.
          if( utils.contains(file, match) ) return true;
          
        }
        
        // Return.
        return false;
        
      }
      
      // Otherwise, handle single matches.
      else return utils.contains(file, matches);
      
    },
    
    // Check if a file's path contains all of the given substrings.
    containsAll( file, matches ) {
      
      // Handle multiple matches.
      if( _.isArray(matches) ) {
        
        // Check each match individually.
        for( let i = 0; i < matches.length; i++ ) {
          
          // Get the match data.
          const match = matches[i];
          
          // Immediately exit if a match is found.
          if( !utils.contains(file, match) ) return false;
          
        }
        
        // Return.
        return true;
        
      }
      
      // Otherwise, handle single matches.
      else return utils.contains(file, matches);
      
    }
    
  };
  
};