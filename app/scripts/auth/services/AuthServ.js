(function () {
    'use strict';

    angular.module('auth')
        .factory('AuthServ', function ($firebaseAuth, url) {

            var mainRef = new Firebase(url);

            return {
                getObj: function () {
                    return $firebaseAuth(mainRef);
                }
            };
        });
})();
