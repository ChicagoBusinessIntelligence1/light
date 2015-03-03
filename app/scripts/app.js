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
    'ngAnimate',
    'ngMaterial',
    'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'scripts/sections/home/views/main.html'

            })
            .state('app.home', {
                url: '/home',
                controller: 'Home',
                templateUrl: 'scripts/sections/home/views/home.html'
            })

            .state('app.contact', {
                url: '/contact',
                controller: 'ContactusCtrl',
                templateUrl: '../views/contactus.html'
            })
            .state('app.admin', {
                url: '/admin',
                controller: 'LoginCtrl',
                templateUrl: '../views/login.html'
            })

			.state("app.politics", {
				url: "/politics",
				controller:"PoliticsCtrl",
				templateUrl: "scripts/sections/politics/views/politics.html"
			})
//#state
    });

app.value('url', 'https://svet.firebaseio.com/');

})();
