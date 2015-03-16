(function () {
    'use strict';

    angular.module('#module#')
        .factory('#name#Serv', function ($q) {

            return {
                get: function () {
                    var deferred =$q.defer();

                    return meaningOfLife;
                }
            };
        });
})();
