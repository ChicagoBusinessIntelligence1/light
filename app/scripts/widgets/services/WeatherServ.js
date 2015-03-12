(function () {
    'use strict';

    angular.module('widgets')
        .factory('WeatherServ', function ($http, $q) {
            var url = 'http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=metric&callback=JSON_CALLBACK';

            function celciusToFar(degrees) {
                var degreeN = degrees;

                if (!_.isNumber(degrees)) {
                    degreeN = parseFloat(degrees);
                }
                return Math.floor(degreeN*9/5+32);

            }

            return {
                getForeCast: function (days) {

                    var deferred = $q.defer();

                    var weather = {};

                    $http.jsonp(url)
                        .success(function (data) {

                            weather.celc = data.main.temp;
                            weather.humidity = data.main.humidity;
                            weather.f = celciusToFar(weather.celc);
                            console.log(weather);
                        }).error(function (error) {
                            console.log(error);
                        });

                    return deferred.promise;

                }

            };
        });
})();
