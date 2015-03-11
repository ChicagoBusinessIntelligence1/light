(function () {
    'use strict';

    angular.module('common')
        .directive('svGasWidget', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-gas-widget.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
