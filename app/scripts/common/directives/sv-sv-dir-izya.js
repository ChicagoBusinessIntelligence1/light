(function () {
    'use strict';

    angular.module('common')
        .directive('svSvDirIzya', function () {
            return {
                replace:true,
                templateUrl: 'scripts/common/directives/sv-sv-dir-izya.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
