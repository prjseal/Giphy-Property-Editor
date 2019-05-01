function fadeIn() {
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {
            $element.addClass("ng-hide-remove");
            $element.on('load', function () {
                $element.addClass("ng-hide-add");
            });
        }
    };
}
angular.module('umbraco').directive('fadeIn', fadeIn);