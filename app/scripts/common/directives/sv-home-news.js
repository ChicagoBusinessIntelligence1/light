(function () {
    'use strict';

    angular.module('common')
        .directive('svHomeNews', function ($mdMedia, NewsGeneratorServ) {
            return {
                templateUrl: 'scripts/common/directives/sv-home-news.html',
                replace: true,
                link: function ($scope, element, attr) {

                    NewsGeneratorServ.getPoliticalNewsWithImages('http://www.svoboda.org/api/z-pqpiev-qpp', 3, false).then(function (news) {
                        $scope.topNews = news;

                        $scope.n1 = $scope.topNews[0];
                        $scope.n2 = $scope.topNews[1];
                        $scope.n3 = $scope.topNews[2];
                    });

                    $scope.mainNewsFilter;
                    $scope.secondNewsTitleFilter;
                    $scope.secondNewsBodyFilter;

                    $scope.$watch(function () {
                        return $mdMedia('sm');
                    }, function (isThisSize) {
                        if (isThisSize) {
                            console.log('sm');

                            $scope.mainNewsFilter=150;
                            $scope.secondNewsTitleFilter=30;
                            $scope.secondNewsBodyFilter=0;
                        }
                    });

                    $scope.$watch(function () {
                        return $mdMedia('md');
                    }, function (isThisSize) {
                        if (isThisSize) {

                            $scope.mainNewsFilter=750;
                            $scope.secondNewsTitleFilter=250;
                            $scope.secondNewsBodyFilter=70;
                            console.log('md');
                        }
                    });

                    $scope.$watch(function () {
                        return $mdMedia('lg');
                    }, function (isThisSize) {
                        if (isThisSize) {
                            $scope.mainNewsFilter=850;
                            console.log('lg');
                            $scope.secondNewsTitleFilter=250;
                            $scope.secondNewsBodyFilter=100;
                        }
                    });
                    $scope.$watch(function () {
                        return $mdMedia('gt-lg');
                    }, function (isThisSize) {
                        if (isThisSize) {
                            $scope.mainNewsFilter=100;
                            console.log('gt-lg');
                            $scope.secondNewsTitleFilter=25;
                            $scope.secondNewsBodyFilter=0;
                        }
                    });

                }
            };
        });
})();
