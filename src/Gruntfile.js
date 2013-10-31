'use strict';
module.exports = function(grunt) {

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // watch for changes and trigger sass, concat, uglify and livereload
    watch: {
      sass: {
        files: ['scss/**/*', 'scss/*'],
        tasks: ['sass']
      },
      livereload: {
        options: { livereload: true },
        files: ['../dist/*', '../dist/**/*', '../dist/***/**/*']
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
