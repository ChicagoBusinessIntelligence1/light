(function () {
    'use strict';

    angular.module('common.article')
        .directive('svSocialShare', function () {
            return {
                replace:true,
                templateUrl: 'scripts/common/article/directives/sv-social-share.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
