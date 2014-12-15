define(['knockout', 'jquery', './model',
        "./main"
    ],
    function(ko, $, ViewModel) {

        describe('<%= model.name %> binding', function() {
            var viewModel;
            var element;
            var root;

            describe('when binding to an element', function() {
                beforeEach(function() {

                    root = document.createElement('div');
                    root.innerHTML = '<div id="binding" data-bind="<%= model.name %>: obs"></div>';
                    document.body.appendChild(root);
                    element = document.getElementById('binding');

                    viewModel = {
                        obs: ko.observable()
                    };

                    ko.applyBindings(viewModel, root);
                });

                afterEach(function() {
                    ko.cleanNode(root);
                    $(root).remove();
                });

                it('should be bound', function() {
                    expect(ko.dataFor(element)).toBe(viewModel);
                });
            });

        });
    });
