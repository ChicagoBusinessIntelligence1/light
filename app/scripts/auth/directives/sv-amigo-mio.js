(function () {
    'use strict';

    angular.module('auth')
        .directive('svAmigoMio', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-amigo-mio.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
