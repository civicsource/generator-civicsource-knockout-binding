define(["jquery", "knockout"],
    function($, ko) {
        var viewModel = {
            value: ko.observable()
        };
        ko.applyBindings(viewModel, $('html')[0]);
    });
