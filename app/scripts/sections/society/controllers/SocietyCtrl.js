(function () {
    'use strict';

    angular.module('sections.society')
        .controller('SocietyCtrl', function ($scope, $location, NewsCategoriesServ) {
            var society = this;
            society.news = NewsCategoriesServ.getCategoryNews($location);
        });

})();

