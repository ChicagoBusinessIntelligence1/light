(function () {
    'use strict';

    angular.module('common.authors')
        .directive('svAuthorProfileNav', function () {
            return {
                templateUrl: 'scripts/common/authors/directives/sv-author-profile-nav.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
