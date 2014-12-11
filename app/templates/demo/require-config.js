var require = (function (root) {

	var bowerPath = "../../bower_components/";

	var cfg = {
		baseUrl: "./",
		paths: {
			"jquery": "https://code.jquery.com/jquery-1.10.1",
			"knockout": "//cdnjs.cloudflare.com/ajax/libs/knockout/3.2.0/knockout-debug",
			"bootstrap": "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min",
			"lodash": '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
			"stringTemplateEngine": bowerPath + 'knockout-require-templates/stringTemplateEngine',
			"template": bowerPath + 'knockout-require-templates/template',
			"text": bowerPath + 'requirejs-text/text',
		},
		shim:{
			"bootstrap": {
				deps:["jquery"]
			}
		}
	};

	return cfg;
})(this);

if (typeof (exports) === "object") {
	module.exports = require;
}