(function () {
    'use strict';

    angular.module('sections.food')
        .controller('FoodCtrl', function ($scope, $location, NewsCategoriesServ) {
            $scope.news = NewsCategoriesServ.getCategoryNews($location);
        });
})();

