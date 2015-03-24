(function () {
    'use strict'

    angular.module('app')
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
                    controller: "MoneyCtrl as money",
                    templateUrl: "scripts/sections/money/views/moneyCtrl.html"
                })
                .state("app.reader.culture", {
                    url: "/culture",
                    controller: "CultureCtrl as culture",
                    templateUrl: "scripts/sections/culture/views/cultureCtrl.html"
                })
                .state("app.reader.society", {
                    url: "/society",
                    controller: "SocietyCtrl as society",
                    templateUrl: "scripts/sections/society/views/societyCtrl.html"
                })
                .state("app.reader.international", {
                    url: "/international",
                    controller: "InternationalCtrl as international",
                    templateUrl: "scripts/sections/international/views/internationalCtrl.html"
                })
                .state("app.reader.contact", {
                    url: "/contact",
                    controller: "ContactCtrl as contact",
                    templateUrl: "scripts/sections/contact/views/contactCtrl.html"
                })
                .state("app.subscription", {
                    url: "/subscription",
                    controller: "SubscriptionCtrl as subscription",
                    templateUrl: "scripts/sections/subscription/views/subscriptionCtrl.html"
                })
                .state("app.classified", {
                    url: "/classified",
                    controller: "ClassifiedCtrl as classified",
                    templateUrl: "scripts/sections/classified/views/classifiedCtrl.html"
                })
                .state("app.reader.article", {
                    url: "/news/:id",
                    controller: "ArticleCtrl as article",
                    templateUrl: "scripts/common/views/articleCtrl.html"
                })
                .state("app.reader.pdf-archive", {
                    url: "/pdf-archive",
                    controller: "PdfArchiveCtrl as archive",
                    templateUrl: "scripts/common/views/pdf-archiveCtrl.html"
                })
                .state("app.login", {
                    abstract: true,
                    controller: "LoginCtrl as login",
                    templateUrl: "scripts/login/views/loginCtrl.html"
                })
                .state("app.login.author-dashboard", {
                    url: "/author-dashboard",
                    controller: "AuthorDashboardCtrl as authorDashboard",
                    templateUrl: "scripts/login/authors/views/author-dashboardCtrl.html"
                })
                .state("app.login.author-articles", {
                    url: "/author-articles",
                    controller: "AuthorArticlesCtrl as author-articles",
                    templateUrl: "scripts/login/authors/views/author-articlesCtrl.html"
                })
                .state("app.login.create-article", {
                    url: "/create-article",
                    controller: "CreateArticleCtrl as createArticle",
                    templateUrl: "scripts/common/article/views/create-articleCtrl.html"
                })
                .state("app.svet-login", {
                    url: "/svet-login",
                    controller: "SvetLoginCtrl as svetLogin",
                    templateUrl: "scripts/auth/views/svet-loginCtrl.html"
                })


			.state("app.controller", {
				url: "/controller", 
				controller:"ControllerCtrl as controller",
				templateUrl: "scripts/auth/views/controllerCtrl.html"
			})
//#state'

        });

})();