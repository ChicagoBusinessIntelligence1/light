(function () {
'use strict';

angular.module('auth')
  .directive('svDialog', function () {
    return {
      templateUrl: '../views/directives/sv-dialog.html',
      restrict: 'E'
    };
  });
})();
