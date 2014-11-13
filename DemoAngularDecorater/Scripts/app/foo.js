/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />

var foo = (function () {
    function foo($window) {
        this.$window = $window;
        this.restrict = "A";
        this.replace = true;
        this.template = '<div>This is foo directive</div>';
        this.link = function (scope, element, attrs) {
        };
    }
    foo.directiveId = "foo";
    return foo;
})();

// Update the app1 variable name to be that of your module variable
app.directive(foo.directiveId, [
    '$window', function ($window) {
        return new foo($window);
    }
]);
//# sourceMappingURL=foo.js.map
