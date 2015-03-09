(function () {
    'use strict';
    angular.module('sections.politics')
        .controller('Politics', function ($scope, $stateParams) {
            var newsId = $stateParams.id;
            console.log($stateParams);
           console.log($scope.topNews[newsId]);
        });
})();

