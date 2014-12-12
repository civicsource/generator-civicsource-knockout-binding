define(["jquery", "knockout", "../main"],
    function($, ko) {
        var viewModel = {
            value: ko.observable()
        };
        ko.applyBindings(viewModel, $('html')[0]);
    });
