'use strict';

angular.module('footer')
  .directive('svFooterNav', function () {
    return {
      templateUrl: 'scripts/footer/directives/sv-footer-nav.html',
      restrict: 'E'
    };
  });
