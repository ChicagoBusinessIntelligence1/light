(function () {

    'use strict';

    var app = angular.module('app', [

        // modules

        'login',
        'login.authors',
        //'login.admins',

        'common.ad',
        'common.news',
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
        'toastr',
        'lumx',
        'ngAnimate',
        'ngMaterial',
        'ui.router'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('app', {
                    abstract: true,
                    controller: 'MainCtrl as main',
                    resolve: {
                        news: function (NewsGeneratorServ) {
                            return NewsGeneratorServ.getPoliticalNews(25, true);
                        },
                        user: function (AuthServ) {
                            return AuthServ.getUser();
                        }
                    },
                    templateUrl: 'scripts/sections/home/views/main.html'

                })
                .state("app.reader", {
                    abstract: true,
                    controller: "ReaderCtrl as reader",
                    templateUrl: "scripts/common/views/readerCtrl.html"
                })
                .state('app.reader.home', {
                    url: '/home',
                    controller: 'HomeCtrl as home',
                    templateUrl: 'scripts/sections/home/views/home.html'
                })
                .state("app.reader.politics", {
                    url: "/politics",
                    controller: "PoliticsCtrl as politics",
                    templateUrl: "scripts/sections/politics/views/politicsCtrl.html"
                })
                .state("app.reader.money", {
                    url: "/money",
                    controller: "MoneyCtrl",
                    templateUrl: "scripts/sections/money/views/moneyCtrl.html"
                })
                .state("app.reader.culture", {
                    url: "/culture",
                    controller: "CultureCtrl",
                    templateUrl: "scripts/sections/culture/views/cultureCtrl.html"
                })
                .state("app.reader.society", {
                    url: "/society",
                    controller: "SocietyCtrl",
                    templateUrl: "scripts/sections/society/views/societyCtrl.html"
                })
                .state("app.reader.science", {
                    url: "/international",
                    controller: "ScienceCtrl",
                    templateUrl: "scripts/sections/science/views/scienceCtrl.html"
                })
                .state("app.reader.contact", {
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
                .state("app.reader.news", {
                    url: "/news/:id",
                    controller: "SvetNewsCtrl",
                    templateUrl: "scripts/common/views/svet-newsCtrl.html"
                })
                .state("app.reader.tags", {
                    url: "/tag/:id",
                    controller: "ArticleCtrl as article",
                    templateUrl: "scripts/common/views/articleCtrl.html"
                })
                .state("app.reader.pdf-archive", {
                    url: "/pdf-archive",
                    controller: "PdfArchiveCtrl",
                    templateUrl: "scripts/common/views/pdf-archiveCtrl.html"
                })

                .state("app.login", {
                    abstract: true,
                    controller: "LoginCtrl as login",
                    templateUrl: "scripts/login/views/loginCtrl.html"
                })
                .state("app.login.author-dashboard", {
                    url: "/author-dashboard",
                    controller: "AuthorDashboardCtrl",
                    templateUrl: "scripts/login/authors/views/author-dashboardCtrl.html"
                })
                .state("app.login.author-articles", {
                    url: "/author-articles",
                    controller: "AuthorArticlesCtrl",
                    templateUrl: "scripts/login/authors/views/author-articlesCtrl.html"
                })
                .state("app.login.create-article", {
                    url: "/create-article",
                    controller: "CreateArticleCtrl",
                    templateUrl: "scripts/common/article/views/create-articleCtrl.html"
                })

                .state("app.svet-login", {
                    url: "/svet-login",
                    controller: "SvetLoginCtrl",
                    templateUrl: "scripts/auth/views/svet-loginCtrl.html"
                })
			
			
//#state
        });

    app.value('url', 'https://svet.firebaseio.com/');

    app.factory('$exceptionHandler', function ($injector) {
        return function (exception, cause) {
            var $rootScope = $injector.get('$rootScope');
            exception.message += ' (caused by "' + cause + '")';
            $rootScope.$broadcast('error');

            throw exception;
        };
    }).config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey', {
                'default': '900'
            })
            .backgroundPalette('grey', {
                'default': '50'
            })
            .accentPalette('red', {
                'default': '600',
                'hue-1': '500'
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

})();