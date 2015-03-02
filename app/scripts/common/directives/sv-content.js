(function () {
    'use strict';
    angular.module('common')
        .directive('svContent', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-content.html',
                replace: true
            };
        });
})();
