(function () {
    'use strict';

    angular.module('common')
        .directive('svHomeSecondNews', function ($http, NewsGeneratorServ) {

            return {
                templateUrl: 'scripts/common/directives/sv-home-second-news.html',
                scope: {
                    number: '='
                },
                link: function ($scope, element, attr) {
                    NewsGeneratorServ.getPoliticalNews('http://www.svoboda.org/api/z-pqpiev-qpp').then(function (news) {
                        console.log(news);
                    });
                }
            };
        });
})();
