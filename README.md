# Civicsource Knockout Binding
=================================

yoeman generator for a knockout binding

###Installation
- ```npm install -g generator-civicsource-knockout-binding```

###Usage
- Install [Yeoman]("http://yeoman.io/") if not installed already: ```npm install -g yo```
- run ```yo knockout-binding``` in your working directory

=================================

You should be ready to start now. the source file is in src/{my.binding.name.js}

###Grunt tasks
- Lint files by running ```grunt``` the deafult task
- Test with ```grunt test```: this will open a browswer and run the jasmine test at spec/{my.binding.name.js}
- Test using a headless browswer with ```grunt test:headless```
- Start a watch with ```grunt watch```which will both lint files and run tests headless when a file is saved

###License
MIT


