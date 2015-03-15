(function () {
    'use strict';

    angular.module('common')
        .controller('SvetNewsCtrl', function ($scope,$stateParams,$rootScope) {

            $scope.news = $rootScope.allNews[$stateParams.id];

        })
})();

