'use strict';

angular.module('footer')
  .directive('svFooterNav', function () {
    return {
      templateUrl: '../views/directives/sv-footer-nav.html',
      restrict: 'E'
    };
  });
