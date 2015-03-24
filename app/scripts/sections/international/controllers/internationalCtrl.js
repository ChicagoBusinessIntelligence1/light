(function () {
    'use strict';

    angular.module('sections.international')
        .controller('InternationalCtrl', function ($scope, $location, NewsCategoriesServ) {
            var international = this;
            international.news = NewsCategoriesServ.getCategoryNews($location);
        });
})();

