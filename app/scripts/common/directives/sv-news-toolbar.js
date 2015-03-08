(function () {
    'use strict';

    angular.module('common')
        .directive('svNewsToolbar', function (NewsGeneratorService NewsgeneratorService ) {
            return {
                templateUrl: 'scripts/common/directives/sv-news-toolbar.html',
                scope:{},
                link: function ($scope, element, attr) {


                }
            };
        });
})();
