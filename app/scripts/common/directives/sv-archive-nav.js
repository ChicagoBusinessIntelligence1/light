(function () {
    'use strict';

    angular.module('common')
        .directive('svArchiveNav', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-archive-nav.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
