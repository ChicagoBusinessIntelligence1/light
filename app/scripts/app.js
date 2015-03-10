(function () {

    'use strict';

    var app = angular.module('app', [

        // Common modules
        'header',
        'aside',
        'common',
        'auth',
        'contactus',
        'footer',

        // Site section modules
        'sections.home',
        'sections.politics',
        'sections.money',

        // 3rd party modules
        'firebase',
        'lumx',
        'ngAnimate',
        'ngMaterial',
        'ui.router'
    ])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .backgroundPalette('grey')
                .accentPalette('red', {
                    'default': '600',
                    'hue-1': '400'
                });
        })
        .config(function ($mdThemingProvider) {
            var svetRedMap = $mdThemingProvider.extendPalette('red', {
                '500': 'C02033'
            });
            // Register the new color palette map with the name <code>neonRed</code>
            $mdThemingProvider.definePalette('svetRed', svetRedMap);
            // Use that theme for the primary intentions
            $mdThemingProvider.theme('accent')
                .primaryPalette('svetRed')
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('app', {
                    abstract: true,
                    templateUrl: 'scripts/sections/home/views/main.html'

                })
                .state('app.home', {
                    url: '/home',
                    controller: 'HomeCtrl',
                    templateUrl: 'scripts/sections/home/views/home.html'
                })
                .state("app.politics", {
                    url: "/politics",
                    controller: "PoliticsCtrl",
                    templateUrl: "scripts/sections/politics/views/politicsCtrl.html"
                })
                .state("app.money", {
                    url: "/money",
                    controller: "MoneyCtrl",
                    templateUrl: "scripts/sections/money/views/moneyCtrl.html"
                })
                //.state("app.politics", {
                //    url: "/politics",
                //    controller: "Politics",
                //    templateUrl: "scripts/sections/politics/views/politicsCtrl.html"
                //})
                //
                //.state("app.politics.article", {
                //    url: "/:id",
                //    templateUrl: "scripts/sections/politics/views/politics-article.html"
                //})
                .state("app.news", {
                    url: "/svet-news/:id",
                    controller: "ArticleCtrl",
                    templateUrl: "scripts/common/views/articleCtrl.html"
                })

//#state
        });

    app.value('url', 'https://svet.firebaseio.com/');

})();