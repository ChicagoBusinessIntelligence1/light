(function () {
    'use strict';

    angular.module('common')
        .controller('PdfArchiveCtrl', function ($scope) {
            $scope.archive = [];
            for (var i = 1; i < 13; i++) {
                $scope.archive.push(i);

            }

            console.log($scope.archive);

        });
})();

