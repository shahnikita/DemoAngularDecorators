/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />

//extend directive
app.config(function ($provide) {
    $provide.decorator('fooDirective', function ($delegate) {
        var directive = $delegate[0];

       
        var link = directive.link;

        directive.compile = function () {
            return function (scope, element, attrs) {

                link.apply(this, arguments);

                element.bind('click', function () {
                    scope.$apply(function () {
                        attrs.fn;
                    });
                });
            };
        };

        
        return $delegate;
    });
}); 