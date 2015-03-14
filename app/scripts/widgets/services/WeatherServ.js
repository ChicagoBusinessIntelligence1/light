(function () {
    'use strict';

    angular.module('widgets')
        .factory('WeatherServ', function ($http, $q, $firebaseObject, url) {
            var urlApi = 'http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=metric&callback=JSON_CALLBACK';
            var urlWeather = url + '/weather';
            var refWeather = new Firebase(urlWeather);

            function celciusToFar(degrees) {
                var degreeN = degrees;
                if (!_.isNumber(degrees)) {
                    degreeN = parseFloat(degrees);
                }
                return Math.floor(degreeN * 9 / 5 + 32);
            }

            var weatherImages = {};
            weatherImages['01d'] = 'weather-sunny';
            weatherImages['02d'] = 'few-clouds';
            weatherImages['03d'] = 'scattered-clouds';
            weatherImages['04d'] = 'broken-cloud';
            weatherImages['09d'] = 'shower-rain';
            weatherImages['10d'] = 'rain';
            weatherImages['11d'] = 'thunderstorm';
            weatherImages['13d'] = 'snow';
            weatherImages['50d'] = 'mist';


            return {
                getForeCast: function (days) {
                    var weather = {};

                    var deferred = $q.defer();
                    var objWeather = $firebaseObject(refWeather);
                    objWeather.$loaded().then(function () {
                        if (objWeather.$value === null) {

                            $http.jsonp(urlApi)
                                .success(function (data) {

                                    weather.celc = data.main.temp.toFixed(1);
                                    weather.humidity = data.main.humidity;
                                    weather.f = celciusToFar(weather.celc);
                                    var weatherIcon = data.weather['0'].icon;
                                    weather.icon = weatherImages[weatherIcon];
                                    objWeather.$add(weather);

                                    deferred.resolve(weather);

                                }).error(function (error) {
                                    console.log(error);
                                });
                        }
                    });
                    return deferred.promise;
                }
            };
        });
})();
