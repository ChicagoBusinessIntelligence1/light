(function () {
    'use strict';

    angular.module('common')
        .directive('svOneArticle', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-one-article.html',
                replace:true,
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
