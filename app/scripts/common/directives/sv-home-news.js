(function () {
    'use strict';

    angular.module('common')
        .directive('svHomeNews', function ($mdMedia, NewsGeneratorServ) {
            return {
                templateUrl: 'scripts/common/directives/sv-home-news.html',
                replace: true,
                link: function ($scope, element, attr) {

                    NewsGeneratorServ.getPoliticalNewsWithImages('http://www.svoboda.org/api/z-pqpiev-qpp',3,false).then(function (news) {
                        $scope.topNews = news;

                        $scope.n1 = $scope.topNews[0];
                        $scope.n2 = $scope.topNews[1];
                        $scope.n3 = $scope.topNews[2];
                    });

                }
            };
        });
})();
