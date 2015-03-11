'use strict';

angular.module('aside')
  .directive('svNewsTagsNav', function () {
    return {
      templateUrl: 'scripts/aside/directives/sv-news-tags-nav.html',
      restrict: 'E',
        controller: function ($scope) {
        }
    };
  });
