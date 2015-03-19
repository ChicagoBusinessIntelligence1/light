(function () {

    'use strict';

    var app = angular.module('app', [

        // modules
		'common.ad',
		'common.news',
        'common.article',
        'common.authors',
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
    ]).controller('MainCtrl', function ($scope, $firebase, url, $firebaseAuth, $state, $mdSidenav, $log, $rootScope, NewsGeneratorServ, AuthServ, news) {

        $rootScope.allNews = news;

        $rootScope.user = AuthServ.getUser();

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };
        $scope.fenElementActive = {val: 'null'};
        $scope.$watch('auth.user.provider', function (newVal) {
            if (newVal === 'password') {
                $scope.isAdmin = true;
            }
        })

        /**
         * Sidenav
         */
        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle()
                .then(function () {
                    $log.debug("toggle left is done");
                });
        };
        $scope.toggleRight = function () {
            $mdSidenav('right').toggle()
                .then(function () {
                    $log.debug("toggle RIGHT is done");
                });
        };
    })

        .factory('$exceptionHandler', function () {
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
                    controller: 'MainCtrl',
                    resolve: {
                        news: function (NewsGeneratorServ) {
                            return NewsGeneratorServ.getPoliticalNews(25, true);
                        }
                    },
                    templateUrl: 'scripts/sections/home/views/main.html'

                })
                .state("app.reader", {
                    abstract: true,
                    controller: "ReaderCtrl",
                    templateUrl: "scripts/common/views/readerCtrl.html"
                })
                .state('app.reader.home', {
                    url: '/home',
                    controller: 'HomeCtrl',
                    templateUrl: 'scripts/sections/home/views/home.html'
                })
                .state("app.reader.politics", {
                    url: "/politics",
                    controller: "PoliticsCtrl",
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
                //.state("app.archive", {
                //    url: "/archive",
                //    controller: "ArchiveCtrl",
                //    templateUrl: "scripts/sections/archive/views/archiveCtrl.html"
                //})
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
                    controller: "ArticleCtrl",
                    templateUrl: "scripts/common/views/articleCtrl.html"
                })
                .state("app.reader.pdf-archive", {
                    url: "/pdf-archive",
                    controller: "PdfArchiveCtrl",
                    templateUrl: "scripts/common/views/pdf-archiveCtrl.html"
                })
                .state("app.profile", {
                    abstract: true,
                    controller: "ProfileCtrl",
                    templateUrl: "scripts/common/authors/views/profileCtrl.html"
                })
                .state("app.profile.author-dashboard", {
                    url: "/author-dashboard",
                    controller: "AuthorDashboardCtrl",
                    templateUrl: "scripts/common/authors/views/author-dashboardCtrl.html"
                })
                .state("app.profile.author-articles", {
                    url: "/author-articles",
                    controller: "AuthorArticlesCtrl",
                    templateUrl: "scripts/common/authors/views/author-articlesCtrl.html"
                })
                .state("app.profile.create-article", {
                    url: "/create-article",
                    controller: "CreateArticleCtrl",
                    templateUrl: "scripts/common/article/views/create-articleCtrl.html"
                })




//#state
        });

    app.value('url', 'https://svet.firebaseio.com/');

})();