'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('knockout-binding:app', function() {
    before(function(done) {
        helpers.run(path.join(__dirname, '../app'))
            .inDir(path.join(__dirname, './temp-test'))
            .withOptions({
                'skip-install': true,
                test: true
            })
            .withPrompt({
                inputBindingName: 'theBestBindingNameEver',
                packageName: 'the name',
                description: 'a really good description'
            })
            .on('end', done);
    });

    it('creates files', function() {
        assert.file([
            'demo/require-config.js',
            'demo/index.html',
            'demo/main.js',
            'template/index.html',
            'main.js',
            'model.tests.js',
            'tests.js',
            'model.js'
        ]);
    });
});
