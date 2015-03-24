(function () {
    'use strict';

    angular.module('common.ad')
        .directive('svAsideAd', function () {
            return {
                templateUrl: 'scripts/common/ad/directives/sv-aside-ad.html',
                scope:{},
                link: function ($scope, element, attr) {
                }
            };
        });
})();
