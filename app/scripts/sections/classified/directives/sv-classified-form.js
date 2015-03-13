(function () {
    'use strict';

    angular.module('sections.classified')
        .directive('svClassifiedForm', function () {
            return {
                templateUrl: 'scripts/sections/classified/directives/sv-classified-form.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
