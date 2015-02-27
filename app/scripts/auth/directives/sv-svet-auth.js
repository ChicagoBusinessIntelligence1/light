(function () {
'use strict';

angular.module('auth')
  .directive('svSvetAuth', function () {
    return {
      templateUrl: 'scripts/auth/directives/sv-svet-auth.html',
      restrict: 'E'
    };
  });
})();
