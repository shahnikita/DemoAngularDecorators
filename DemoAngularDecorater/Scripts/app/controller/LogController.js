/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />

var LogController = (function () {
    function LogController($scope, $log) {
        this.$scope = $scope;
        this.$log = $log;
        $scope.$log = $log;
        $log.debug("sdf");
        $scope.message = 'Hello World!';
        $scope.counter = 0;
        $scope.updateCounter = function () {
            $scope.counter++;
        };
    }
    LogController.controllerId = "LogController";
    return LogController;
})();

// Update the app1 variable name to be that of your module variable
app.controller(LogController.controllerId, [
    '$scope', '$log', function ($scope, $log) {
        return new LogController($scope, $log);
    }
]);
//# sourceMappingURL=LogController.js.map
