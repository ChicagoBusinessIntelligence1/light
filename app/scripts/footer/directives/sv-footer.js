(function () {
    'use strict';

    angular.module('footer')
        .directive('svFooter', function () {
            return {
                templateUrl: 'scripts/footer/directives/sv-footer.html',
                scope: {},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
