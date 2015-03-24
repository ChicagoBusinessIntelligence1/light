(function () {
    'use strict';

    angular.module('sections.society')
        .controller('SocietyCtrl', function ($scope, $location, NewsCategoriesServ) {
            $scope.news = NewsCategoriesServ.getCategoryNews($location);
        });

})();

