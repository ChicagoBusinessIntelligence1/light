(function () {
    'use strict';

    angular.module('sections.politics')
        .controller('PoliticsCtrl', function ($scope, $location, NewsCategoriesServ) {
            var politics = this;
            politics.news = NewsCategoriesServ.getCategoryNews($location);
        });
})();

