(function () {
    'use strict';

    angular.module('common')
        .controller('ArticleCtrl', function ($scope,$location,NewsCategoriesServ) {
            $scope.news =  NewsCategoriesServ.getCategoryNews($location);

        });
})();

