(function () {
    'use strict';

    angular.module('common')
        .directive('svArchiveNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-archive-nav.html',
                scope:{},
                link: function ($scope, element, attr) {
                }
            };
        });
})();
