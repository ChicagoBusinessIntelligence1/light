(function () {
    'use strict';

    angular.module('common.article')
        .directive('svArticleThumbMain', function () {
            return {
                templateUrl: 'scripts/common/article/directives/sv-article-thumb-main.html',
                scope: {
                    homeSmall: '=',
                    state: '=',
                    id: '@',
                    img: '@',
                    title: '@',
                    fscale: '=',
                    body: '@'
                },

                link: function ($scope, element, attr) {
                    var width = element.css('width');

                    $scope.$watch('fscale', function (newValue, oldValue) {

                        if ($scope.fscale) {
                            element.find('.content').css('font-size', 100 * $scope.fscale + '%');
                            element.find('.content').css('line-height', 1.1 * $scope.fscale);
                        }
                    });
                }

            };
        });
})();
