(function () {
    'use strict';

    angular.module('common.ad')
        .directive('svMainSectionAd', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/ad/directives/sv-main-section-ad.html',
                scope: {},
                link: function ($scope, element, attr) {
                }
            };
        });
})();
