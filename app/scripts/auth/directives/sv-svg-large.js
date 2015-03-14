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

                    var p = Raphael(element[0], 35, 35);
                    var icon = p.path(icons[$scope.provider]).attr({
                        fill: colors[$scope.provider],
                        stroke: "none",
                        cursor: 'pointer'
                    });
                    icon.transform('s1.1,1.1,0,-20');

                    element.on('click', function () {

                    })

                }
            };
        });
})();
