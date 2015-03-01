(function () {
    'use strict';

    angular.module('auth')
        .directive('svLoginIcon', function () {
            return {
                link: function ($scope, element, attr) {
                    var p = Raphael(element[0],100,100);

                    p.path('M25.566,2.433H6.433c-2.2,0-4,1.8-4,4v19.135c0,2.199,1.8,4,4,4h19.135c2.199,0,4-1.801,4-4V6.433C29.566,4.232,27.768,2.433,25.566,2.433zM25.309,16.916h-3.218v11.65h-4.819v-11.65h-2.409V12.9h2.409v-2.411c0-3.275,1.359-5.224,5.229-5.224h3.218v4.016h-2.011c-1.504,0-1.604,0.562-1.604,1.608L22.091,12.9h3.644L25.309,16.916z').attr({
                        fill: "blue",
                        stroke: "none"
                    }).transform('s2,2,0,0');
                },
                templateUrl: 'scripts/auth/directives/sv-login-icon.html'
            };
        });
})();
