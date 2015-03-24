(function () {
    'use strict';

    angular.module('#module#')
        .factory('#name#Serv', function () {

            var meaningOfLife = 42;

            return {
                someMethod: function () {
                    return meaningOfLife;
                }
            };
        });
})();
