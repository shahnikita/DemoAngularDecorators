/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />


// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file


interface Ifoo extends ng.IDirective {
   
}

interface IfooScope extends ng.IScope {
   
}

class foo implements Ifoo {
    static directiveId: string = "foo";
    restrict: string = "AE";
    replace:boolean= true;
    template: string = '<div>This is foo directive</div>';
    
    constructor(private $log) {
    }

    link = (scope, element, attrs) => {
        this.$log.debug("sdf");
        if (angular.isDefined(attrs.name)) {
            attrs.name = attrs.name + "!";
        }
    }
}

// Update the app1 variable name to be that of your module variable
app.directive(foo.directiveId, ['$log', $log =>
    new foo($log)
]);
