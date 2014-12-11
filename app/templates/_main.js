define(['knockout', 'jquery', './model',
        'knockout.punches',
        'template!./template/index.html!<%= model.name %>-main',
    ],
    function(ko, $, ViewModel) {
        
        ko.punches.enableAll();

        ko.bindingHandlers.<%= model.name %> = {
            init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                var value = ko.utils.unwrapObservable(valueAccessor());
                element.model = new ViewModel();
                ko.renderTemplate("<%= model.name %>-main", element.model, null, element, "replaceChildren");

            },
            update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                element.value = ko.utils.unwrapObservable(valueAccessor());
            }
        };
    });
