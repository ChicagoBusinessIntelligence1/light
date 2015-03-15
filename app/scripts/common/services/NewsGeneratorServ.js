(function () {
    'use strict';

    angular.module('common')
        .factory('NewsGeneratorServ', function ($http, $q) {

            var gUrl = 'http://api.feedzilla.com/v1/categories.json';

            function getUniqueCategories(news) {
                var categories = [];
                news.forEach(function (n) {
                    var indCateg = n.categories;

                    indCateg.forEach(function (nin) {
                        nin = nin.replace('Новости - ', '');
                        nin = nin.replace('Новости', '').toLowerCase();
                        if (nin.length > 0 && categories.indexOf(nin) === -1) {
                            categories.push(nin);

                        }

                    })

                })
                return categories;

            }

            function classify(news) {
                news.forEach(function (n) {
                    n.sections = [];
                    var indCateg = n.categories;

                    indCateg.forEach(function (nin) {
                        nin = nin.replace('Новости - ', '');
                        nin = nin.replace('Новости', '').toLowerCase();
                        if (nin.length > 0) {
                            n.sections.push(nin);

                        }

                    })

                    n.categories = null;
                })
                return news;

            }

            return {
                getPoliticalNews: function () {

                    var deferred = $q.defer();
                    var urlCom = 'http://www.svoboda.org/api/';
                    var svobodaUrls = ['zoprp_egjrpy','z_oqpvergqpr', 'zmgrpqe$mqpo','zjkqp_eymopy','zykoeqmqi']
                    var promises = [];

                    var allNews = [];
                    for (var i = 0; i < svobodaUrls.length; i++) {
                        var urlEnd = svobodaUrls[i];
                        var url = urlCom + urlEnd;
                        promises.push(this.getPoliticalNewsWithImages(url).then(function (value) {
                            allNews.push(value);
                        }));
                    }
                    $q.all(promises).then(function () {
                        var uniqueNews=[];
                        var uniqueImgs=[];
                        var counter = 0;
                        allNews.forEach(function (oneNews) {
                            for (var i = 0; i < oneNews.length; i++) {
                                var singleNews = oneNews[i];
                                var img = singleNews.img;
                                if (uniqueImgs.indexOf(img) === -1) {
                                    uniqueImgs.push(img);
                                    singleNews.id = counter++;
                                    uniqueNews.push(singleNews);
                                }

                            }
                        });
                        deferred.resolve(uniqueNews);
                    });

                    return deferred.promise;
                },

                getPoliticalNewsWithImages: function (url, number, shuffle) {
                    number = number || 50;
                    var deferred = $q.defer();

                    var result = $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json_xml&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));

                    function parseXml(xml) {
                        var start = 0;
                        var end = 0;
                        var imgs = [];
                        while (true) {
                            start = xml.indexOf('enclosure', start);
                            if (start === -1) {
                                break;
                            }

                            start = xml.indexOf('http', start);

                            end = xml.indexOf('"', start);
                            var img = xml.substring(start, end);
                            imgs.push(img);
                            start = end;

                        }
                        return imgs;
                    }

                    function joinNewsImages(news, imgs) {
                        for (var i = 0; i < news.length; i++) {
                            var n = news[i];
                            var img = imgs[i];
                            n.img = img;
                        }
                        return news;
                    }

                    result.then(function (data) {
                        var finalNews;
                        var xml = data.data.responseData.xmlString;
                        var imgs = parseXml(xml);
                        var news = (data.data.responseData.feed.entries);
                        news = joinNewsImages(news, imgs);
                        if (shuffle) {
                            news = _.rest(news, 3);
                            finalNews = _.first(_.shuffle(news), number);
                        } else {
                            finalNews = _.first(news, number);
                        }

                        var counter = 0;
                        //finalNews = _.map(finalNews, function (n) {
                        //    var breakPoint = 1;
                        //    n.id = counter++;
                        //    return n;
                        //});
                        var categories = getUniqueCategories(finalNews);
                        finalNews = classify(finalNews);
                        console.log(categories);

                        deferred.resolve(finalNews);
                    }).catch(function (e) {
                        deferred.reject('Error in rss request. Due to: ' + e);
                    });

                    return deferred.promise;

                }

            };
        });
})
();
