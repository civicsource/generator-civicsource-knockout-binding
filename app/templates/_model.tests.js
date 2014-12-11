define(["knockout", "./model",
        "mock-ajax"
    ],
    function(ko, Model) {
        describe("<%= model.name %> binding model", function() {

            var model;

            beforeEach(function() {
                jasmine.Ajax.useMock();
                clearAjaxRequests();
            });

            describe("when ...", function() {

                beforeEach(function() {
                    /*mostRecentAjaxRequest().response({
                      status: 200,
                      responseText: JSON.stringify({})
                    });*/
                });
            });

        });
    });
