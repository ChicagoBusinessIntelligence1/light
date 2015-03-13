(function () {
    'use strict';

    angular.module('auth')
        .directive('svSvgLarge', function (icons, colors, AuthServ, $rootScope, $mdDialog) {
            return {
                templateUrl: 'scripts/auth/directives/sv-svg-large.html',
                scope: {
                    provider: '@'
                },
                link: function ($scope, element, attr) {
                    element.css('cursor', 'pointer');

                    var p = Raphael(element[0], 120, 120);
                    var icon = p.path(icons[$scope.provider]).attr({
                        fill: colors[$scope.provider],
                        stroke: "none",
                        cursor: 'pointer'
                    });
                    icon.transform('s4,4,0,0');

                    element.on('click', function () {

                        AuthServ.authProvider($scope.provider).then(function (user) {
                            $rootScope.user = user;
                            $mdDialog.hide();

                        }).catch(function (error) {
                            console.error("Authentication failed:", error);
                        });
                    })

                }
            };
        });
})();
