(function () {
    'use strict';

    angular.module('widgets')
        .directive('svGasWidget', function () {
            return {
                templateUrl: 'scripts/widgets/gas-widget/sv-gas-widget.html',
                link: function ($scope, element, attr) {

                }
            };
        });
})();
