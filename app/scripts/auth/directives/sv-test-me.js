(function () {
    'use strict';

    angular.module('auth')
        .directive('svTestMe', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-test-me.html',
                scope: {},
                bindToController: {
                    someObject: '=',
                    someString: '@',
                    someExpr: '&'
                },

                controller: function ($scope) {
                    var ctrl = this;

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
