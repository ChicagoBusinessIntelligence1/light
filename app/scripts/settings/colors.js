(function () {
    angular.module('app').config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('red', {
                'default': '900'
            })
            .backgroundPalette('grey', {
                'default': '50'
            })
            .accentPalette('red', {
                'default': '600',
                'hue-1': '500'
            });
    });
})();
