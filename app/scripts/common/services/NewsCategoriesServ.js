(function () {
    'use strict';

    angular.module('common')
        .factory('NewsCategoriesServ', function ($rootScope) {

            var rusEng = {};
            rusEng['politics'] = 'политика';
            rusEng['culture'] = 'культура';
            rusEng['science'] = 'мир';
            rusEng['money'] = 'экономика';
            rusEng['society'] = 'общество';
            rusEng['archive'] = 'регионы';

            return {
                getCategoryNews: function (location) {
                    var news = [];

                    var categoryEng;
                    var start = location.$$absUrl.lastIndexOf('/') + 1;
                    categoryEng = location.$$absUrl.substr(start);
                    var categoryRus = rusEng[categoryEng].toLowerCase();

                    $rootScope.allNews.forEach(function (n) {
                        n.sections.forEach(function (section) {
                            if (section.indexOf(categoryRus) > -1) {
                                if (news.indexOf(n) === -1) {
                                    news.push(n);
                                }
                            }
                        })

                    })
                    return news;
                }
            };
        });
})();
