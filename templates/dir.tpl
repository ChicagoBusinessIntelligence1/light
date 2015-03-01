(function () {
    'use strict';

    angular.module('#module#')
        .directive('#jname#', function () {
            return {
                scope:{},
                link: function ($scope, element, attr) {

                },
                templateUrl: 'scripts/#module#/directives/#dname#.html'
            };
        });
})();
