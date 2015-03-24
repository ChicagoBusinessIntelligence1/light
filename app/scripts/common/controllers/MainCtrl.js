'use strict';

angular.module('common')

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
