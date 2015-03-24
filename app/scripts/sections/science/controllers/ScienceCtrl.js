(function () {
    'use strict';

    angular.module('sections.science')
        .controller('ScienceCtrl', function ($scope, $location, NewsCategoriesServ) {
            $scope.news =  NewsCategoriesServ.getCategoryNews($location);
        });
})();

