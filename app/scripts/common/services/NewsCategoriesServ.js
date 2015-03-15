(function () {
    'use strict';

    angular.module('common')
        .factory('NewsCategoriesServ', function ($rootScope, NewsGeneratorServ) {

            var rusEng = {};

            var avoidCategories = [];
            avoidCategories.push('видео');
            avoidCategories.push('свободы');
            avoidCategories.push('письма');

            rusEng['politics'] = ['политика'];
            rusEng['money'] = ['экономика', "экономическая среда", "экономика"];
            rusEng['culture'] = ['культура', "время джаза"];
            rusEng['society'] = ['общество', "культ личности", 'с христианской точки зрения', "дороги к свободе"];
            rusEng['international'] = ['мир', "украина"];

            return {
                getCategoryNews: function (location) {
                    var news = [];

                    var categoryEng;
                    var start = location.$$absUrl.lastIndexOf('/') + 1;
                    categoryEng = location.$$absUrl.substr(start);
                    var indexTag = parseInt(categoryEng);

                    var categoriesRus;
                    if (!_.isNaN(indexTag)) {
                        var allCateg = $rootScope.allCateg;
                        categoriesRus = [allCateg[indexTag].name];

                    } else {
                        categoriesRus = rusEng[categoryEng];

                    }

                    $rootScope.allNews.forEach(function (n) {
                        n.isEligible = true;

                        for (var i = 0; i < n.sections.length; i++) {
                            var section = n.sections[i].toLowerCase();

                            if (avoidCategories.indexOf(section) > -1) {
                                n.isEligible = false;
                                break;
                            }

                            categoriesRus.forEach(function (rusCategory) {
                                rusCategory = rusCategory.toLowerCase();
                                if (section.indexOf(rusCategory) > -1) {

                                    if (news.indexOf(n) === -1) {
                                        news.push(n);
                                    }
                                }
                            });
                        }

                    });
                    return news;
                }
            };
        });
})();
