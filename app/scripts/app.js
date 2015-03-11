(function () {

    'use strict';

    var app = angular.module('app', [

        // modules
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
		'widgets',
	    'widgets',
        'header',
        'aside',
        'common',
        'auth',
        'footer',

        // Site section modules
        'sections.home',
        'sections.politics',
        'sections.money',
        'sections.culture',
        'sections.food',
        'sections.health',
        'sections.archive',
        'sections.contact',
        'sections.subscription',
        'sections.classified',

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
                .state("app.culture", {
                    url: "/culture",
                    controller: "CultureCtrl",
                    templateUrl: "scripts/sections/culture/views/cultureCtrl.html"
                })
                .state("app.food", {
                    url: "/food",
                    controller: "FoodCtrl",
                    templateUrl: "scripts/sections/food/views/foodCtrl.html"
                })
                .state("app.health", {
                    url: "/health",
                    controller: "HealthCtrl",
                    templateUrl: "scripts/sections/health/views/healthCtrl.html"
                })
                .state("app.archive", {
                    url: "/archive",
                    controller: "ArchiveCtrl",
                    templateUrl: "scripts/sections/archive/views/archiveCtrl.html"
                })
                .state("app.contact", {
                    url: "/contact",
                    controller: "ContactCtrl",
                    templateUrl: "scripts/sections/contact/views/contactCtrl.html"
                })
                .state("app.subscription", {
                    url: "/subscription",
                    controller: "SubscriptionCtrl",
                    templateUrl: "scripts/sections/subscription/views/subscriptionCtrl.html"
                })
                .state("app.classified", {
                    url: "/classified",
                    controller: "ClassifiedCtrl",
                    templateUrl: "scripts/sections/classified/views/classifiedCtrl.html"
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