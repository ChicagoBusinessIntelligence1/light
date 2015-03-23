(function () {
    'use strict';

    angular.module('common')
        .controller('ArticleCtrl', function ($scope,$stateParams,$rootScope,$location,NewsCategoriesServ) {
            var article = this;
            var id = $stateParams.id;
            article.tag = $rootScope.allCateg[id];

            article.news =  NewsCategoriesServ.getCategoryNews($location);

        });
})();

