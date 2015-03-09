'use strict';

angular.module('sections.home')
    .controller('HomeCtrl', function ($scope, url, $firebase) {

        $scope.articles = [];
        $scope.politics1 = {
            state: 'app.politics.article({id:1})',
            id: '1',
            img: 'img/articles/weapon.jpg',
            title: 'Czech Republic rejects accusations of selling American and German weapons to Russia',
            author: 'John Doe',
            body: 'Czech Ministry of Industry and Trade has denied reports that the country sells modern American and German weapon to Russia against the EU embargo.',
            date: '03.04.2015'
        }
        $scope.articles.push($scope.politics1);
    });
