(function () {
    'use strict';

    angular.module('common')
        .directive('svArticleThumb', function () {
            return {
                templateUrl: 'scripts/common/article/directives/sv-article-thumb.html',
                replace: true,
                scope: {
                    state: '=',
                    id: '@',
                    img: '@',
                    title: '@',
                    fscale: '='
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
