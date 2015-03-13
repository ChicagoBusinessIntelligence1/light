(function () {
    'use strict';

    angular.module('auth')
        .directive('svLoginForm', function ($rootScope, AuthServ) {
            return {
                templateUrl: 'scripts/auth/directives/sv-login-form.html',
                replace: true,
                scope:{},
                link: function ($scope, element, attr) {
                    $scope.authObj = AuthServ.getObj() ;

                    $scope.signin = function () {
                        $scope.authObj.$authWithOAuthPopup("facebook").then(function(authData) {
                            console.log("Logged in as:", authData.uid);
                        }).catch(function(error) {
                            console.error("Authentication failed:", error);
                        });
                    };

                    $scope.user = {
                        email: '',
                        pass: ''
                    };

                    $scope.cancel = function () {
                        $rootScope.$broadcast('cancel');
                    }

                }
            };
        });
})();
