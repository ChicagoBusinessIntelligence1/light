(function () {
    'use strict';

    angular.module('common')
        .factory('NewsGeneratorServ', function ($http, $q) {

            var gUrl = 'http://api.feedzilla.com/v1/categories.json';
            return {
                getPoliticalNews: function (url) {

                    return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json_xml&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));

                },
                getPoliticalNewsWithImages: function (url) {

                    return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json_xml&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));

                }

            };
        });
})
();
