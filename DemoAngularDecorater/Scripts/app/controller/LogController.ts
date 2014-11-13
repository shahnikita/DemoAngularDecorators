/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />


// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file


interface ILogControllerScope extends ng.IScope {
    $log: any;
    message: string;
    counter: number;
    updateCounter: () => void;
}

interface ILogController {
   
}

class LogController implements ILogController {
    static controllerId: string = "LogController";
    
    constructor(private $scope,private $log) {
        $scope.$log = $log;
        $log.debug("sdf");
        $scope.message = 'Hello World!';
        $scope.counter = 0;
        $scope.updateCounter = function () {
            $scope.counter++;
        };
       
    }

   
}

// Update the app1 variable name to be that of your module variable
app.controller(LogController.controllerId, ['$scope', '$log', ($scope, $log) =>
    new LogController($scope, $log)
]);
