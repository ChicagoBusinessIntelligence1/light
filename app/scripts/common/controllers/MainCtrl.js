'use strict';

angular.module('common')
    .controller('MainCtrl', function ($scope, $mdSidenav, $rootScope, user, news, toastr,$log) {
        var main = this;


        $rootScope.$on('error', function () {
            toastr.error('error');

        });

        $rootScope.allNews = news;

        $rootScope.user = user;

        /**
         * Managing SideBars
         */
        main.toggleLeft = function () {
            $mdSidenav('left').toggle()
                .then(function () {
                    $log.debug("toggle left is done");
                });
        };
        main.toggleRight = function () {
            $mdSidenav('right').toggle()
                .then(function () {
                    $log.debug("toggle RIGHT is done");
                });
        };
    })

    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.$on('close:SideBars', function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close Right is done");
                });
        })

        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });

        };
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };
    })
