'use strict';

angular.module('common')
    .controller('Main', function ($scope, $firebase, url, $firebaseAuth, $state, $mdSidenav, $log, $rootScope, NewsGeneratorServ) {


        NewsGeneratorServ.getPoliticalNewsWithImages('http://www.svoboda.org/api/z-pqpiev-qpp', 50, false).then(function (news) {
            $rootScope.allNews = news;
        });

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };
        $scope.fenElementActive = {val: 'null'};
        $scope.$watch('auth.user.provider', function (newVal) {
            if (newVal === 'password') {
                $scope.isAdmin = true;
            }
        })

        var mainRef = new Firebase(url);
        $scope.authObj = $firebaseAuth(mainRef);

        $scope.loginFb = function () {
            $scope.authObj.$authWithOAuthPopup("facebook").then(function (authData) {
                console.log("Logged in as:", authData.uid);
            }).catch(function (error) {
                console.error("Authentication failed: ", error);
            });
        }
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
    });
