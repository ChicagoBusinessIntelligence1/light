(function () {
    'use strict';

    angular.module('common')
        .directive('svToolBar', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-tool-bar.html',
                replace:true,
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
