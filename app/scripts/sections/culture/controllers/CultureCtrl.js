(function () {
    'use strict';

    angular.module('sections.culture')
        .controller('CultureCtrl', function ($scope,$location, NewsCategoriesServ) {

            $scope.news =  NewsCategoriesServ.getCategoryNews($location);
            console.log($scope.news);
        });
})();

