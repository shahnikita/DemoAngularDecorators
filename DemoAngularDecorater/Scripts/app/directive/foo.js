/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />

var foo = (function () {
    function foo($log) {
        var _this = this;
        this.$log = $log;
        this.restrict = "AE";
        this.replace = true;
        this.template = '<div>This is foo directive</div>';
        this.link = function (scope, element, attrs) {
            _this.$log.debug("sdf");
            if (angular.isDefined(attrs.name)) {
                attrs.name = attrs.name + "!";
            }
        };
    }
    foo.directiveId = "foo";
    return foo;
})();

// Update the app1 variable name to be that of your module variable
app.directive(foo.directiveId, [
    '$log', function ($log) {
        return new foo($log);
    }
]);
//# sourceMappingURL=foo.js.map
