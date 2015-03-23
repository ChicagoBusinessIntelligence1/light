(function () {
    'use strict';

    angular.module('sections.money')
        .controller('MoneyCtrl', function ($scope, $location, NewsCategoriesServ) {
            var money = this;
            money.news = NewsCategoriesServ.getCategoryNews($location);
        });
})();

