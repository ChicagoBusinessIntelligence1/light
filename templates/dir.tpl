(function () {
    'use strict';

    angular.module('#module#')
        .directive('#jname#', function () {
            return {
                templateUrl: 'scripts/#moduleDirectirized#/directives/#dname#.html',
                replace:true,
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
