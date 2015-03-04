(function () {
    'use strict';

    angular.module('common')
        .directive('svMainRight', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-main-right.html',
                replace:true,
                link: function ($scope, element, attr) {

                }
            };
        });
})();
