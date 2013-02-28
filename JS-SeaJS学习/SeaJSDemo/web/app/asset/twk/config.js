
seajs.config({
  // Set aliases for common libraries
  alias: {
    'jquery': 'common/jquery-1.8.0.js',
    'handlebars': 'common/handlebars.js',
    'ember':'common/ember-1.0.0-rc.1.js',
      'test':'twk/test.js',
      'base':'twk/base.js'
  },

  // Add plugins
  plugins: ['shim','combo'],
    debug: true,
  // Configure shim for non-CMD modules
  shim: {
    'jquery': {
        exports:'jQuery'
    },
    'handlebars':{
        exports:'handlebars',
        deps:['jquery']
    },
    'ember' :{
        exports:'ember',
        deps:['handlebars']
    }
  }
});

