(function () {
    'use strict';

    angular.module('auth')
        .directive('svNewDir', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-new-dir.html',
                scope: {},
                bindToController: {
                    someObject: '=',
                    someString: '@',
                    someExpr: '&'
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
