(function () {
    'use strict';

    angular.module('sections.politics')
        .controller('PoliticsCtrl', function ($scope, $location, NewsCategoriesServ) {
            $scope.news =  NewsCategoriesServ.getCategoryNews($location);

        });
})();

