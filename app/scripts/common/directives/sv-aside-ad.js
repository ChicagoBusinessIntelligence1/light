(function () {
    'use strict';

    angular.module('common')
        .directive('svAsideAd', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-aside-ad.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
