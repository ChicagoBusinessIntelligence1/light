(function () {
    'use strict';

    angular.module('common')
        .directive('svAsideAd', function () {
            return {
                templateUrl: 'scripts/common/ad/directives/sv-aside-ad.html',
                scope:{},
                link: function ($scope, element, attr) {
                }
            };
        });
})();
