(function () {
    'use strict';
    angular.module('sections.politics')
        .controller('Politics', function ($scope, url, $firebase) {
            console.log('here');
            $scope.articles = [];
            var article1 = {
                url: 'app.sections/politics/:i',
                img: 'scripts/sections/politics/img/politics.jpg',
                title: 'New Political Event'
            }
            $scope.articles.push(article1);
        });
})();

