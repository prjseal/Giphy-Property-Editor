function giphyPropertyEditorController($scope, $http) {
    // macro parameter editor doesn't contains a config object,
    // so we create a new one to hold any properties
    if (!$scope.model.config) {
        $scope.model.config = {};
    }

    if (!$scope.model.config.maxChars) {
        // 500 is the maximum number that can be stored
        // in the database, so set it to the max, even
        // if no max is specified in the config
        $scope.model.config.maxChars = 500;
    }

    $scope.model.change = function () {
        $http({
            method: 'GET',
            url: 'https://api.giphy.com/v1/gifs/search?api_key=59RQWmqS3CsdVbgjd6XfrnUOA8UvbcPY&q=' + $scope.model.search,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            if (response !== null && response !== undefined && response.data !== undefined) {
                $scope.model.value = response.data.data[0].images.original.url;
            }
            else {
                $scope.model.value = '';
            }
        });
    };
    //$scope.model.change();

}
angular.module('umbraco').controller("giphyPropertyEditorController", giphyPropertyEditorController);