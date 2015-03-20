(function () {
    'use strict';

    angular.module('common.ad')
        .directive('svAdMbBank', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/ad/directives/sv-ad-mb-bank.html'
            };
        });
})();
