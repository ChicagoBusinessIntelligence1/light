(function () {
    'use strict';

    angular.module('auth')
        .directive('svTestMe', function () {
            return {
                replace:true,
                templateUrl: 'scripts/auth/directives/sv-test-me.html',
                 bindToController: {
                      someObject: '=',
                      someString: '@',
                      someExpr: '&'
                    }
                    controller: function () {
                      this.name = 'Pascal';
                    },
                    controllerAs: 'ctrl'
            };
        });
})();
