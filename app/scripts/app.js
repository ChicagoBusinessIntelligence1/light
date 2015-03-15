(function () {

    'use strict';

    var app = angular.module('app', [

        // modules
        'common.article',
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
        'sections.society',
        'sections.science',
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
    ]).factory('$exceptionHandler', function () {
        return function (exception, cause) {
            exception.message += ' (caused by "' + cause + '")';
            throw exception;
        };
    }).config(function ($mdThemingProvider) {
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
                .state("app.society", {
                    url: "/society",
                    controller: "SocietyCtrl",
                    templateUrl: "scripts/sections/society/views/societyCtrl.html"
                })
                .state("app.science", {
                    url: "/international",
                    controller: "ScienceCtrl",
                    templateUrl: "scripts/sections/science/views/scienceCtrl.html"
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
                .state("app.tags", {
                    url: "/tag/:id",
                    controller: "ArticleCtrl",
                    templateUrl: "scripts/common/views/articleCtrl.html"
                })
                .state("app.track", {
                    url: "/track",
                    controller: "TrackCtrl",
                    templateUrl: "scripts/sections/test/views/trackCtrl.html"
                })

//#state
        });

    app.value('url', 'https://svet.firebaseio.com/');

})();