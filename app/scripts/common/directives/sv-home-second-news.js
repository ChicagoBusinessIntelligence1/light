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
                    NewsGeneratorServ.getPoliticalNewsWithImages('http://www.svoboda.org/api/z-pqpiev-qpp',12,true).then(function (news) {
                        $scope.secondNews = news;
                    });
                }
            };
        });
})();
