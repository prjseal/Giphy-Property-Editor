function giphyPropertyEditorController($scope, $http) {

    if (!$scope.model.config) {
        $scope.model.config = {};
    }

    if (!$scope.model.config.maxChars) {
        $scope.model.config.maxChars = 500;
    }

    $scope.model.change = function () {
        $http({
            method: 'GET',
            url: 'https://api.giphy.com/v1/gifs/search?api_key=59RQWmqS3CsdVbgjd6XfrnUOA8UvbcPY&limit=10&q=' + $scope.model.search,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            if (response !== null && response !== undefined && response.data !== undefined) {
                $scope.model.results = response.data.data;
            }
            else {
                $scope.model.results = null;
            }
        });
    };

    $scope.model.click = function (result) {
        $scope.model.value = result.images.original.url;
        $scope.model.results = null;
    };

    $scope.model.remove = function () {
        $scope.model.search = '';
        $scope.model.value = null;
        $scope.model.results = null;
    };
}
angular.module('umbraco').controller("giphyPropertyEditorController", giphyPropertyEditorController);