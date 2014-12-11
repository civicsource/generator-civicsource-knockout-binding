'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var changeCase = require('change-case');
var fs = require('fs');
var path = require('path');
var walk = require('walk');

module.exports = yeoman.generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
    },

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the doozie' + chalk.red(' Civicsource Knockout Binding') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'inputBindingName',
            message: 'What is the name of the binding as it would be used in code? ie. "myCustomBinding"',
            default: 'myCustomBinding'
        }];

        this.prompt(prompts, function(props) {
            this.inputBindingName = props.inputBindingName;

            this.model = {};
            this.model.name = changeCase.camelCase(this.inputBindingName);
            this.model.nameSentenceCase = changeCase.sentenceCase(this.inputBindingName);
            done();
        }.bind(this));
    },

    writing: {
        templates: function() {

            if (this.options.test) {
                this.mkdir('test/temp-test');
                this.destinationRoot('test/temp-test')
            }

            this.mkdir('demo');

            var walkOptions = {
                listeners: {
                    file: function(root, fileStats, next) {

                        var fullpath = path.join(root, fileStats.name);
                        var relativePath = fullpath.split('templates\\')[1].replace(fileStats.name, "");
                        var relativePathToTemplate = path.join(relativePath, fileStats.name);

                        console.log(relativePathToTemplate);
                        var destination;

                        if (!fileStats.name.indexOf('!') == 0) {

                            if (fileStats.name.indexOf('_') == 0) {
                                destination = path.join(relativePath, fileStats.name.substring(1));
                                console.log(destination);
                                this.fs.copyTpl(
                                    this.templatePath(relativePathToTemplate),
                                    this.destinationPath(destination), {
                                        model: this.model
                                    }
                                );
                            } else {
                                destination = path.join(relativePath, fileStats.name);
                                console.log(destination);
                                this.fs.copy(
                                    this.templatePath(relativePathToTemplate),
                                    this.destinationPath(destination)
                                );
                            }
                        }

                        next();
                    }.bind(this)
                }
            };

            var walker = walk.walkSync(this.sourceRoot(), walkOptions);
        },

        copy: function() {

        },

        install: function() {
            this.installDependencies({
                skipInstall: this.options['skip-install']
            });
        }
    }
});
