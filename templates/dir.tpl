(function () {
    'use strict';

    angular.module('#module#')
        .directive('#jname#', function () {
            return {
                scope:{},
                link: function ($scope, element, attr) {

                },
                templateUrl: '../views/directives/#dname#.html'
            };
        });
})();
