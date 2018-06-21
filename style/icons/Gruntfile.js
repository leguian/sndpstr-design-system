/*jshint node:true*/
var path = require('path');
module.exports = function (grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);


    grunt.initConfig({
        webfont: {

            iconGeneration: {
                src: 'src/sndpstr/*.svg',
                dest: '../assets/fonts/',
                options: {
                    htmlDemoTemplate: 'src/tpl/cheatsheet.html',
                    rename: function (name) {
                        return path.basename(name).replace(/-/gi, '.');
                    },
                    templateOptions: {
                        baseClass: 'icon',
                        classPrefix: ''
                    },
                    customOutputs: [{
                        template: 'src/tpl/template.css',
                        dest: '../components/_icons-list.scss'
                    }]
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'tasks/*.js', 'test/*.js'],
            options: {
                jshintrc: true
            }
        },
        watch: {
            scripts: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'jscs'],
                options: {
                    debounceDelay: 100,
                    nospawn: true
                }
            }
        },

        jscs: {
            options: {
                config: ".jscs.json"
            },
            all: ['tasks/*.js']
        },

        clean: ['.cache'],

        // convert TTF to WOFF2
        ttf2woff2: {
            default: {
                src: ["../assets/fonts/sndpstr-icons.ttf"],
                dest: '../assets/fonts/'
            }
        }

    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-ttf2woff2');

    grunt.registerTask('build', ['jscs', 'webfont', 'clean', 'ttf2woff2']);

};
