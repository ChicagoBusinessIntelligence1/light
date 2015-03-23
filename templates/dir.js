(function () {
    'use strict';

    angular.module('#module#')
        .directive('#jname#', function () {
            return {
                replace:true,
                templateUrl: 'scripts/#moduleDirectirized#/directives/#dname#.html',
                 bindToController: {
                      someObject: '=',
                      someString: '@',
                      someExpr: '&'
                    }
                    controller: function () {
                      this.name = 'Pascal';
                    },
                    controllerAs: 'ctrl'
            };
        });
})();
