(function () {
    'use strict';

    angular.module('common')
        .directive('svHomeSecondNews', function ($http, NewsGeneratorServ, $rootScope) {

            return {
                templateUrl: 'scripts/common/news/directives/sv-home-second-news.html',
                scope: {
                    news: '=',
                    number: '='
                },
                link: function ($scope, element, attr) {
                    if (!$scope.news) {
                        $rootScope.$watch('allNews', function (newValue, oldValue) {
                            $scope.secondNews = _.take(_.shuffle(_.rest(newValue, 12)), $scope.number);

                        });

                    } else {

                        $scope.secondNews = $scope.news;
                        console.log($scope.secondNews);
                    }

                }
            };
        });
})();
