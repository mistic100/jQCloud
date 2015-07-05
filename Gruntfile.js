module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*!\n' +
    ' * jQCloud <%= pkg.version %>\n' +
    ' * Copyright 2011 Luca Ongaro (http://www.lucaongaro.eu)\n' +
    ' * Copyright 2013 Daniel White (http://www.developerdan.com)\n' +
    ' * Copyright <%= grunt.template.today("yyyy") %> Damien "Mistic" Sorel (http://www.strangeplanet.fr)\n' +
    ' * Licensed under MIT (http://opensource.org/licenses/MIT)\n' +
    ' */',

    uglify: {
      uncompressed: {
        options: {
          banner: '<%= banner %>\n',
          mangle: false,
          beautify: true
        },
        files: {
          'dist/jqcloud.js': ['src/jqcloud.js']
        }
      },
      compressed: {
        options: {
          banner: '<%= banner %>\n'
        },
        files: {
          'dist/jqcloud.min.js': ['src/jqcloud.js']
        }
      }
    },

    less: {
      compressed: {
        options: {
          banner: '<%= banner %>',
          cleancss: true,
          compress: true,
          report: 'min'
        },
        files: {
          'dist/jqcloud.min.css': [
            'src/jqcloud.less'
          ]
        }
      },
      uncompressed: {
        options: {
          banner: '<%= banner %>',
          cleancss: true,
          report: 'min'
        },
        files: {
          'dist/jqcloud.css': [
            'src/jqcloud.less'
          ]
        }
      }
    },
    eslint: {
      options: {quiet: true},
      target: ['src/*.js']
    },
    qunit: {
      all: ['test/*.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default', ['uglify', 'less', 'test']);

  grunt.registerTask('test', ['eslint', 'qunit']);
};
