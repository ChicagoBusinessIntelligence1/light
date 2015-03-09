(function () {
    'use strict';

    angular.module('common')
        .directive('svHomeSecondNews', function ($http, NewsGeneratorServ,$rootScope) {

            return {
                templateUrl: 'scripts/common/directives/sv-home-second-news.html',
                scope: {
                    number: '='
                },
                link: function ($scope, element, attr) {
                    $rootScope.$watch('allNews', function (newValue, oldValue) {
                        $scope.secondNews = _.take(_.shuffle(_.rest(newValue,12)), $scope.number);

                    });
                }
            };
        });
})();
