(function () {
    'use strict';

    angular.module('common')
        .controller('ArticleCtrl', function ($scope,$stateParams,$rootScope,$location,NewsCategoriesServ) {
            var id = $stateParams.id;
            $scope.tag = $rootScope.allCateg[id];

            $scope.news =  NewsCategoriesServ.getCategoryNews($location);

        });
})();

