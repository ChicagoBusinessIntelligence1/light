(function () {
    'use strict';

    angular.module('aside')
        .directive('svNavLink', function () {
            return {
                templateUrl: 'scripts/aside/directives/sv-nav-link.html',
                replace:true,
                scope:{
                    url:'@',
                    title:'@',
                    icon:'@'
                },
                link: function ($scope, element, attr) {

                }
            };
        });
})();
