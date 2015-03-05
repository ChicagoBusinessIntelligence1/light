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
                .accentPalette('grey');
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
                    controller: "Politics",
                    templateUrl: "scripts/sections/politics/views/politicsCtrl.html"
                })

                .state("app.politics.article", {
                    url: "/:id",
                    templateUrl: "scripts/sections/politics/views/politics-article.html"
                })




			
//#state
        });

    app.value('url', 'https://svet.firebaseio.com/');

})();