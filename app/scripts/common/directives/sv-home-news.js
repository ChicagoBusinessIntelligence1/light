(function () {
    'use strict';

    angular.module('common')
        .directive('svHomeNews', function ($mdMedia, NewsGeneratorServ) {
            return {
                templateUrl: 'scripts/common/directives/sv-home-news.html',
                replace: true,
                link: function ($scope, element, attr) {

                }
            };
        });
})();
