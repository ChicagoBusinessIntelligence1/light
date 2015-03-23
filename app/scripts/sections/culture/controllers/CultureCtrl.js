(function () {
    'use strict';

    angular.module('sections.culture')
        .controller('CultureCtrl', function ($scope, $location, NewsCategoriesServ) {
            var culture = this;
            culture.news = NewsCategoriesServ.getCategoryNews($location);
        });
})();

