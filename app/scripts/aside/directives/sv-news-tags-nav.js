'use strict';

angular.module('aside')
  .directive('svNewsTagsNav', function (NewsGeneratorServ) {
    return {
      templateUrl: 'scripts/aside/directives/sv-news-tags-nav.html',
      restrict: 'E',
        controller: function ($scope) {
            var tagClasses = [];

            tagClasses.push('tag-books txt-darkBlue f-18');
            tagClasses.push('tag-illinois txt-blue f-20');
            tagClasses.push('tag-illinois txt-darkGrey f-14');
            tagClasses.push('tag-chicago txt-darkBlue f-15');
            tagClasses.push('tag-usa txt-lightRed f-26');
            tagClasses.push('tag-ukraine txt-deepBlue f-16');
            tagClasses.push('tag-russia txt-deepBlue f-20');
            tagClasses.push('tag-politics txt-darkRed f-16');
            tagClasses.push('tag-events txt-lightRed f-22');
            tagClasses.push('tag-economy txt-pink f-16');
            tagClasses.push('tag-movie txt-darkBlue f-14');
            tagClasses.push('tag-opinion f-16');
            tagClasses.push('tag-electronics txt-coral  txt-15');
            tagClasses.push('tag-israel txt-darkBlue f-16');
            tagClasses.push('tag-economy txt-darkGrey f-16');
            tagClasses.push('tag-latvia txt-green f-14');
            tagClasses.push('tag-europe txt-lightPurple f-13');
            tagClasses.push('tag-health txt-darkBlue  txt-14');
            tagClasses.push('tag-fasion txt-darkRed f-16');
            tagClasses.push('tag-medicine txt-pink');

            $scope.tagClasses = tagClasses;
            $scope.tags = NewsGeneratorServ.getCategories();
        }
    };
  });
