'use strict';
module.exports = function(grunt) {

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // watch for changes and trigger sass, concat, uglify and livereload
    watch: {
      icons: {
        files: ['icons/*.svg'],
        tasks: ['webfont']
      },
      sass: {
        files: ['scss/**/*', 'scss/*'],
        tasks: ['sass']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          '../dist/*.html',
          '../dist/css/*',
          '../dist/fonts/*'
        ]
      }
    },

    // To generate the icon fonts from the files in my ./src/icons/ directory
    webfont: {
      icons: {
        src: "icons/*.svg",
        dest: "../dist/fonts",
        options: {
          hashes: false,
          htmlDemo: false,
          stylesheet: false
        }
      }
    },

    // sass and scss
    sass: {
      dist: {
        options: {
          sourcemap: true,
          style: 'indented',
          precision: '2',
          compass: true,
          cache: 'delete/'
        },
        files: {
          '../dist/css/ccp-color.css':'scss/style.scss'
        }
      }
    }

  });
// register task
grunt.registerTask('default', ['watch']);

};
