(function () {
    'use strict';

    angular.module('widgets')
        .filter('IconProcess', function () {
            return function (icon) {
                var finalIcon;
                switch (true) {
                    case icon.indexOf('clear')>-1:
                        finalIcon = 'weather-sunny'
                        break;
                    case icon.indexOf('cloudy')>-1:
                        finalIcon = 'partly-cloudy'
                        break;
                    case icon.indexOf('rain')>-1:
                        finalIcon = 'rain'
                        break;
                    case icon.indexOf('snow')>-1:
                        finalIcon = 'snow'
                        break;
                    case icon.indexOf('mist')>-1:
                        finalIcon = 'mist'
                        break;
                }
                return finalIcon;
            };
        });
})();
