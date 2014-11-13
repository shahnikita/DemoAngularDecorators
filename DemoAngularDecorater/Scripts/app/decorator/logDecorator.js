/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
//extend directive
app.config([
    "$provide", function ($provide) {
        $provide.decorator('$log', [
            "$delegate", function ($delegate) {
                //   var a = this.enchanceLogger($delegate);
                var enhancedLogger = function () {
                    var args = [].slice.call(arguments), now = new Date();
                    var callerFunc = arguments.callee.caller.toString();
                    var callerFuncName = (callerFunc.substring(callerFunc.indexOf("function") + 8, callerFunc.indexOf("(")) || "anoynmous");

                    // prepend a timestamp to the original output message
                    args[0] = now + " " + "called from" + callerFuncName + " " + args[0];

                    // Call the original with the output prepended with formatted timestamp
                    debugFn.apply(null, args);
                };

                var debugFn = $delegate.debug;
                $delegate.debug = function () {
                    var args = [].slice.call(arguments), now = new Date();
                    var callerFunc = arguments.callee.caller.toString();
                    var callerFuncName = (callerFunc.substring(callerFunc.indexOf("function") + 8, callerFunc.indexOf("(")) || "anoynmous");

                    // prepend a timestamp to the original output message
                    args[0] = now + " " + "called from" + callerFuncName + " " + args[0];

                    // Call the original with the output prepended with formatted timestamp
                    debugFn.apply(null, args);
                };

                return $delegate;
            }]);
    }]);
//# sourceMappingURL=logDecorator.js.map
