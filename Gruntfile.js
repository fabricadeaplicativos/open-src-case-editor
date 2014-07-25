/**
Gruntfile designed for browser-only modules.
*/

module.exports = function (grunt) {

	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
			default: {
				options: {
					hostname: 'localhost',
					port: 8000,
					keepalive: true,
					livereload: true,
					open: 'http://localhost:8000',
				}
			},
		},

		bower: {
			target: {
				rjsConfig: 'amdconfig.js',
				options: {
					baseUrl: './src'
				}
			}
		},

		yuidoc: {
			compile: {
				name: 'os-case-editor',
				version: '0.0.0',
			//	description: '',
			// 	url: '',
				options: {
					paths: 'js/',
				//	themedir: 'path/to/custom/theme/',
					outdir: 'docs/'
				}
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc',
				force: true,
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},

			// tests
			test: {
				src: ['test/**/*.js']
			},

			// src
			src: {
				src: ['js/**/*.js']
			}
		},


		concurrent: {
			target: ['connect', 'watch']
		},


		watch: {
			live: {
				files: ['amdconfig.js', 'js/**/*.js', 'js/**/*.html', 'test/**', 'demo/**', 'docs/**', 'Gruntfile.js'],
				options: {
					livereload: true
				},
				tasks: ['jshint:gruntfile', 'jshint:src']
			},

			bower: {
				files: ['bower.json'],
				tasks: ['bower']
			}
		},

		requirejs: {
			// run r.js to generate a single file as the output
			// minifying and inlining all dependencies.
			file: {
				options: {
					// base url where to look for module files
					// and relative to which the module paths will be defined
					// (must coincide with that defined in mainConfigFile)
					baseUrl: './js',
					// module name
					name: 'os-case-editor',
					// output here
					out: './built/os-case-editor.js',
					// config file
					mainConfigFile: 'amdconfig.js',

					// include these modules
					include: [],

					// exclude these modules AND their dependencies
					// (excluding your bower dependencies)
					exclude: ["bbmv","improved-model"],

					// excludeShallow
					excludeShallow: [],

					optimize: 'uglify2',

					pragmas: {
						exclude: true,
					},
				}
			},

			dev: {
				options: {
					// base url where to look for module files
					// and relative to which the module paths will be defined
					// (must coincide with that defined in mainConfigFile)
					baseUrl: './js',
					// module name
					name: 'os-case-editor',
					// output here
					out: './built/os-case-editor.dev.js',
					// config file
					mainConfigFile: 'amdconfig.js',

					// include these modules
					include: [],

					// exclude these modules AND their dependencies
					// (excluding your bower dependencies)
					exclude: ["bbmv","improved-model"],

					// excludeShallow
					excludeShallow: [],

					optimize: 'none',

					pragmas: {
						exclude: true,
					},
				}
			},
		}
	});

	/**
	 * Task loading
	 */
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-concurrent');

	grunt.loadNpmTasks('grunt-bower-requirejs');
	/**
	Gets dependencies from bower.json and puts them into the require.js
	configuration script (amdconfig.js).
	*/


	grunt.registerTask('default', ['bower', 'yuidoc', 'jshint:gruntfile', 'jshint:src', 'requirejs', 'concurrent']);
};
