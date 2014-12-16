define(['knockout', 'jquery', 'lodash', './model',
        'knockout.punches',
        'template!./template/index.html!<%= model.name %>-main',
    ],
    function(ko, $, _, ViewModel) {
        
        ko.punches.enableAll();

        ko.bindingHandlers.<%= model.name %> = {
            init: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                var value = ko.utils.unwrapObservable(valueAccessor());
                element.model = new ViewModel();
                element.model.instanceName = allBindingsAccessor.get('id') || _.uniqueId("<%= model.name %>--");
                ko.renderTemplate("<%= model.name %>-main", element.model, null, element, "replaceChildren");
                return { controlsDescendantBindings: true };
            },
            update: function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                element.value = ko.utils.unwrapObservable(valueAccessor());
            }
        };

        //ko.virtualElements.allowedBindings.<%= model.name %> = true;
    });
