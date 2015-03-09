(function () {
    'use strict';

    angular.module('common')
        .directive('svFooter', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-footer.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
