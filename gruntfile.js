module.exports = function(grunt) {
    const sass = require('node-sass');
    //require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'assets/js/*.js',
                ],
                dest: 'build/js/scripts.js',
            }
        },

        uglify: {
            build: {
                src: 'build/js/scripts.js',
                dest: 'build/js/scripts.min.js'
            }
        },
        sass: {
          dist: {
            options: {
              style: 'expanded'
            },
            files: {
              'assets/css/styles.css': 'assets/scss/styles.scss',
            }
          }
        },
        autoprefixer:{
          dist:{
            files:{
              'assets/css/styles.css':'assets/css/styles.css',
            }
          }
        },

        cssmin: {
          options: {
            mergeIntoShorthands:false,
            roundingPrecision:-1
          },
          target: {
            files: {
              'build/css/style.min.css': ['assets/css/styles.css'],
            }
          },
        },
        notify: {
            cssmin:{
                options:{
                    title: "CSS",
                    message: "Files have been compiled successfully"
                }
            },
            uglify:{
                options:{
                    title: "Javascript",
                    message: "Files have been compiled successfully"
                }
            },
        },

        watch: {
            scripts: {
                files: ['assets/js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['assets/scss/**/*.scss'],
                tasks: ['sass', 'autoprefixer','cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer','cssmin',]);

};
