'use strict';

angular.module('sections.home')
    .controller('HomeCtrl', function ($scope, news, $rootScope) {
        var home = this;
        $rootScope.news = news;

    });
