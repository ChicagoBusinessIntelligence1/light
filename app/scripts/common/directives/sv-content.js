(function () {
    'use strict';

    angular.module('common')
        .directive('svContent', function ($mdBottomSheet) {
            return {
                templateUrl: 'scripts/common/directives/sv-content.html',
                replace: true,

                link: function ($scope, element, attr) {
                    $scope.showGridBottomSheet = function ($event) {
                        $scope.alert = '';
                        $mdBottomSheet.show({
                            templateUrl: 'scripts/footer/templates/social-media-links.html',
                            controller: 'GridBottomSheetCtrl',
                            targetEvent: $event
                        }).then(function (clickedItem) {
                            $scope.alert = clickedItem.name + ' clicked!';
                        });
                    };
                }
            };
        }).controller('GridBottomSheetCtrl', function ($scope, $mdBottomSheet) {
            $scope.items = [
                {name: 'Hangout', icon: 'hangout'},
                {name: 'Mail', icon: 'mail'},
                {name: 'Message', icon: 'message'},
                {name: 'Copy', icon: 'copy'},
                {name: 'Facebook', icon: 'facebook'},
                {name: 'Twitter', icon: 'twitter'},
            ];
            $scope.listItemClick = function ($index) {
                var clickedItem = $scope.items[$index];
                $mdBottomSheet.hide(clickedItem);
            };
        });

})();
