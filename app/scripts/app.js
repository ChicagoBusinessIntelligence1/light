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
        'sections.international',
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

    app.value('url', 'https://svet.firebaseio.com/');

    app.factory('$exceptionHandler', function ($injector) {
        return function (exception, cause) {
            var $rootScope = $injector.get('$rootScope');
            exception.message += ' (caused by "' + cause + '")';
            $rootScope.$broadcast('error');

            throw exception;
        };
    })

})();
