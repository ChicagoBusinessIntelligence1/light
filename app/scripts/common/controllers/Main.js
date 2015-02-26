'use strict';

angular.module('common')
    .controller('Main', function ($scope, $firebase, url, $firebaseAuth, $state) {

        $scope.fenElementActive = {val: 'null'};

        $scope.$watch('auth.user.provider', function (newVal) {

            if (newVal === 'password') {
                $scope.isAdmin = true;
            }
        })

        var mainRef = new Firebase(url);
        $scope.authObj = $firebaseAuth(mainRef);

        $scope.loginFb = function () {

            $scope.authObj.$authWithOAuthPopup("facebook").then(function(authData) {
                console.log("Logged in as:", authData.uid);
            }).catch(function(error) {
                console.error("Authentication failed: ", error);
            });

        }
    });
