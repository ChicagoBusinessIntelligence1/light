'use strict';

angular.module('sections.home')
    .controller('HomeCtrl', function ($scope, news) {
        $scope.news = news;

    });
