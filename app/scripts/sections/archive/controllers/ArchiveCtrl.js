(function () {
    'use strict';

    angular.module('sections.archive')
        .controller('ArchiveCtrl', function ($scope, $location, NewsCategoriesServ) {
            $scope.news = NewsCategoriesServ.getCategoryNews($location);
        });
})();

