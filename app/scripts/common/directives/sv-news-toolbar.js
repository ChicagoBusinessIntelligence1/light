(function () {
    'use strict';

    angular.module('common')
        .directive('svNewsToolbar', function (NewsGeneratorServ) {
            return {
                templateUrl: 'scripts/common/directives/sv-news-toolbar.html',
                scope: {
                    number: '=',
                    panelTitle: '@'
                },
                link: function ($scope, element, attr) {

                    NewsGeneratorServ.getPoliticalNews('http://rss.cnn.com/rss/cnn_topstories.rss').then(function (data) {

                        var news    = (data.data.responseData.feed.entries);
                        $scope.news = _.first(_.shuffle(news), $scope.number);
                        var i       = 1;
                    });
                }
            };
        });
})();
