(function () {
    'use strict';

    angular.module('common')
        .directive('svArticleThumb', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-article-thumb.html',
                replace: true,
                scope: {
                    homeSmall: '=',
                    state: '=',
                    id: '@',
                    img: '@',
                    title: '@',
                    fsize: '=',
                    body: '@'
                },
                link: function ($scope, element, attr) {
                    var width = element.css('width');

                    $scope.$watch('fsize', function (newValue, oldValue) {

                        if ($scope.fsize) {
                            console.log($scope.fsize);
                            var parse = parseInt($scope.fsize.substr(0, $scope.fsize.length-2));
                            element.find('.content').css('font-size', $scope.fsize);
                            element.find('.content').css('line-height', (parse+16)+px);

                        }
                    });

                }
            };
        });
})();
