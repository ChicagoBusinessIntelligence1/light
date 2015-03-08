(function () {
    'use strict';

    angular.module('common')
        .directive('svHomeSecondNews', function ($http, NewsGeneratorServ) {

            return {
                templateUrl: 'scripts/common/directives/sv-home-second-news.html',
                scope: {
                    number:'='
                },
                link: function ($scope, element, attr) {
                    function parseXml(xml) {
                        var start = 0;
                        var end   = 0;
                        var imgs  = [];
                        while (true) {
                            start = xml.indexOf('enclosure', start);
                            if (start === -1) {
                                break;
                            }

                            start = xml.indexOf('http', start);

                            end     = xml.indexOf('"', start);
                            var img = xml.substring(start, end);
                            imgs.push(img);
                            start   = end;

                        }
                        return imgs;
                    }

                    function joinNewsImages(news, imgs) {
                        for (var i = 0; i < news.length; i++) {
                            var n   = news[i];
                            var img = imgs[i];
                            n.img = img;
                        }
                        return news;
                    }

                    $scope.secondTiles = [];
                    var images         = [];

                    NewsGeneratorServ.getPoliticalNews('http://www.svoboda.org/api/z-pqpiev-qpp').then(function (data) {
                        var xml     = data.data.responseData.xmlString;
                        var imgs    = parseXml(xml);
                        var news    = (data.data.responseData.feed.entries);
                        news        = joinNewsImages(news, imgs);
                        $scope.secondNews = _.first(_.shuffle(news), $scope.number);
                    });


                }
            };
        });
})();
