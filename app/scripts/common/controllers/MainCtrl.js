'use strict';

angular.module('common')
    .controller('MainCtrl', function ($scope, $mdSidenav, $rootScope, AuthServ, news, toastr) {
        $rootScope.$on('error', function () {
            toastr.error('error');

        });

        $rootScope.allNews = news;

        $rootScope.user = AuthServ.getUser();

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };
        $scope.fenElementActive = {val: 'null'};
        $scope.$watch('auth.user.provider', function (newVal) {
            if (newVal === 'password') {
                $scope.isAdmin = true;
            }
        })

        /**
         * Sidenav
         */
        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle()
                .then(function () {
                    $log.debug("toggle left is done");
                });
        };
        $scope.toggleRight = function () {
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
