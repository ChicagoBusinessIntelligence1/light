(function () {
    'use strict';

    angular.module('common.ad')
        .directive('svMbBank', function () {
            return {
                replace:true,
                templateUrl: 'scripts/common/ad/directives/sv-mb-bank.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
