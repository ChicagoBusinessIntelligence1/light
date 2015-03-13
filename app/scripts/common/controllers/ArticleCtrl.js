(function () {
    'use strict';

    angular.module('common')
        .controller('ArticleCtrl', function ($scope,$stateParams,$rootScope) {
         $scope.news = $rootScope.allNews[$stateParams.id];

        });
})();

