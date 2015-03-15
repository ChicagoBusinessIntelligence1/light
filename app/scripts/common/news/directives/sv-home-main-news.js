(function () {
    'use strict';

    angular.module('common')
        .directive('svHomeMainNews', function ($mdMedia, NewsGeneratorServ, $rootScope) {
            return {
                templateUrl: 'scripts/common/news/directives/sv-home-main-news.html',
                replace: true,
                link: function ($scope, element, attr) {

                    $scope.$watch('allNews', function (newValue, oldValue) {
                        $scope.n1 = $scope.allNews[0];
                        $scope.n2 = $scope.allNews[1];
                        $scope.n3 = $scope.allNews[2];
                    });

                    $scope.mainNewsFilter;
                    $scope.secondNewsTitleFilter;
                    $scope.secondNewsBodyFilter;

                    $scope.fscale = 1;


                    //$scope.$watch(function () {
                    //    return $mdMedia('max-width: 600px');
                    //}, function (isThisSize) {
                    //    if (isThisSize) {
                    //        console.log('max-width: 600px');
                    //
                    //        $scope.fscale = 1.3;
                    //        $scope.mainNewsFilter = 350;
                    //        $scope.secondNewsTitleFilter = 50;
                    //        $scope.secondNewsBodyFilter = 30;
                    //    }
                    //});
                    //
                    //$scope.$watch(function () {
                    //    return $mdMedia('max-width: 500px');
                    //}, function (isThisSize) {
                    //    if (isThisSize) {
                    //        console.log('max-width: 500px');
                    //
                    //        $scope.fscale = 1.2;
                    //        $scope.mainNewsFilter = 200;
                    //        $scope.secondNewsTitleFilter = 25;
                    //        $scope.secondNewsBodyFilter = 0;
                    //    }
                    //});
                    //
                    $scope.$watch(function () {
                        return $mdMedia('max-width: 400px');
                    }, function (isThisSize) {
                        if (isThisSize) {
                            console.log('max-width: 400px');

                            $scope.fscale = 1;
                            $scope.mainNewsFilter = 100;
                            $scope.secondNewsTitleFilter = 20;
                            $scope.secondNewsBodyFilter = 0;
                        }
                    });

                    $scope.$watchCollection(function () {
                        return $mdMedia('min-width: 400px') && $mdMedia('max-width: 499px');
                    }, function (isThisSize) {
                        if (isThisSize) {
                            console.log('max-width: 400-500');
                            $scope.fscale = 1.2;

                            $scope.mainNewsFilter = 200;
                            $scope.secondNewsTitleFilter = 50;
                            $scope.secondNewsBodyFilter = 0;
                        }
                    });
                    $scope.$watchCollection(function () {
                        return $mdMedia('min-width: 500px') && $mdMedia('max-width: 599px');
                    }, function (isThisSize) {
                        if (isThisSize) {
                            console.log('max-width: 500-600');
                            $scope.fscale = 1.2;

                            $scope.mainNewsFilter = 390;
                            $scope.secondNewsTitleFilter = 50;
                            $scope.secondNewsBodyFilter = 0;
                        }
                    });

                    $scope.$watchCollection(function () {
                        return $mdMedia('min-width: 600px') && $mdMedia('max-width: 768px');
                    }, function (isThisSize) {
                        if (isThisSize) {
                            console.log('max-width: 600-768');
                            $scope.fscale = 1.2;

                            $scope.mainNewsFilter = 250;
                            $scope.secondNewsTitleFilter = 50;
                            $scope.secondNewsBodyFilter = 0;
                        }
                    });



                    $scope.$watchCollection(function () {
                        return $mdMedia('min-width: 769px') && $mdMedia('max-width: 959px');
                    }, function (isThisSize) {
                        if (isThisSize) {
                            console.log('max-width: 769-959');
                            $scope.fscale = 1.4;

                            $scope.mainNewsFilter = 550;
                            $scope.secondNewsTitleFilter = 200;
                            $scope.secondNewsBodyFilter = 70;
                        }
                    });

                    $scope.$watch(function () {
                        return $mdMedia('lg');
                    }, function (isThisSize) {
                        if (isThisSize) {
                            $scope.mainNewsFilter = 245;
                            $scope.fscale = 1.2;
                            console.log('lg');
                            $scope.secondNewsTitleFilter = 250;
                            $scope.secondNewsBodyFilter = 100;
                        }
                    });
                    $scope.$watch(function () {
                        return $mdMedia('gt-lg');
                    }, function (isThisSize) {
                        if (isThisSize) {
                            $scope.mainNewsFilter = 250;
                            console.log('gt-lg');
                            $scope.secondNewsTitleFilter = 62;
                            $scope.secondNewsBodyFilter = 0;

                            $scope.fscale = 1;
                        }
                    });

                    $scope.$watch(function () {
                        return $mdMedia('min-width: 1400px');
                    }, function (isThisSize) {
                        if (isThisSize) {

                            $scope.fscale = 1.1;

                            $scope.mainNewsFilter = 1000;
                            console.log('very large');
                            $scope.secondNewsTitleFilter = 50;
                            $scope.secondNewsBodyFilter = 400;
                        }
                    });
                    $scope.$watch(function () {
                        return $mdMedia('min-width: 1600px');
                    }, function (isThisSize) {
                        if (isThisSize) {

                            $scope.fscale = 1.2;

                            $scope.mainNewsFilter = 1000;
                            console.log('very very large');
                            $scope.secondNewsTitleFilter = 60;
                            $scope.secondNewsBodyFilter = 400;
                        }
                    });

                }
            };
        });
})();
