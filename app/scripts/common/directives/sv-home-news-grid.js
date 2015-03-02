(function () {
    'use strict';

    angular.module('common')
        .directive('svHomeNewsGrid', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-home-news-grid.html',
                replace:true,
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
