(function () {
    'use strict';

    angular.module('common')
        .directive('svArticleForm', function () {
            return {
                templateUrl: 'scripts/common/article/directives/sv-article-form.html',
                scope: {},
                link: function ($scope, element, attr) {

                },
                controller: function ($scope) {
                    $scope.user = {
                        author: 'Alex Etman',
                        submissionDate: '',
                        title: '',
                        body: ''
                    };
                }
            };
        });
})();
