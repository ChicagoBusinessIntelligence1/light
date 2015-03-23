(function () {
    'use strict';

    angular.module('#module#')
        .factory('#name#Serv', function ($q) {
            return {
                get: function () {
                    function resolve () {

                    }
                    function reject () {

                    }
                    return $q(resolve, reject);
                }
            };
        });
})();
