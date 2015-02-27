(function () {
'use strict';

angular.module('auth')
  .directive('svSvetAuth', function () {
    return {
      templateUrl: '../views/directives/sv-svet-auth.html',
      restrict: 'E'
    };
  });
})();
