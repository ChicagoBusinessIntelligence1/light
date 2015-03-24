(function () {
    'use strict';

    angular.module('login.authors')
        .directive('svAuthorProfileNav', function () {
            return {
                templateUrl: 'scripts/login/authors/directives/sv-author-profile-nav.html',
                scope:{},
                link: function ($scope, element, attr) {

                }
            };
        });
})();
