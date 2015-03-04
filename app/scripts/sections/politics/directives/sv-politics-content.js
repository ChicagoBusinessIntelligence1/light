(function () {
    'use strict';

    angular.module('sections.politics')
        .directive('svPoliticsContent', function () {
            return {
                templateUrl: 'scripts/sections/politics/directives/sv-politics-content.html',
                replace:true,
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
