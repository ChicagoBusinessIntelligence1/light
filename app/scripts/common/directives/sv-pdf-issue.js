(function () {
    'use strict';

    angular.module('common')
        .directive('svPdfIssue', function () {
            return {
                templateUrl: 'scripts/common/directives/sv-pdf-issue.html',
                scope:{},
                link: function ($scope, element, attr) {
                var flip = element.find('.flipbook');
                    flip.turn({

                        width:922,

                        // Height

                        height:600,

                        // Elevation

                        elevation: 50,

                        // Enable gradients

                        gradients: true,

                        // Auto center this flipbook

                        autoCenter: true

                    });
                }
            };
        });
})();
