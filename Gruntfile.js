'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: { jshintrc: '.jshintrc' },
            all: [ 'test/{,**/}*.js' ]
        },
        mochaTest: {
            test: {
                options: { reporter: 'dot' },
                src: ['test/spec/**/*.js']
            }
        }
    });

    grunt.registerTask('default', [ 'jshint', 'mochaTest' ]);
};