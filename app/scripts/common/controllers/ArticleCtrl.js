(function () {
    'use strict';

    angular.module('common')
        .controller('ArticleCtrl', function ($scope, $stateParams, $rootScope) {
            var article = this;
            article.news = $rootScope.allNews[$stateParams.id];
        });
})();

