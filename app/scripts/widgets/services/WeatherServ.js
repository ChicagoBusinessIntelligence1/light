(function () {
    'use strict';

    angular.module('widgets')
        .factory('WeatherServ', function ($http, $q, $firebaseObject) {
            var urlWeather = 'https://publicdata-weather.firebaseio.com/chicago';
            var refWeather = new Firebase(urlWeather);
            var weatherObj = $firebaseObject(refWeather);

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
                getWeatherObj: function () {
                    return weatherObj;
                }
            };
        });
})();
