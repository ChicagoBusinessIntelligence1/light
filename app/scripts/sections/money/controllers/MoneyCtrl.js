(function () {
    'use strict';

    angular.module('sections.money')
        .controller('MoneyCtrl', function ($scope, $location, NewsCategoriesServ) {
            $scope.news = NewsCategoriesServ.getCategoryNews($location);
        });
})();

