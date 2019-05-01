function giphyPropertyEditorController($scope, dialogService) {

    $scope.add = function () {
        $scope.giphyPicker = {
            apikey: Umbraco.Sys.ServerVariables["Giphy"]["ApiKey"]
                ? Umbraco.Sys.ServerVariables["Giphy"]["ApiKey"]
                : $scope.model.config.apikey,
            title: "Animated Gif Search",
            view: "/App_Plugins/GiphyPropertyEditorUmbraco7/giphy.picker.html",
            show: true,
            submit: function (model) {
                $scope.model.value = model.images.original.url;
                $scope.giphyPicker.show = false;
            },
            close: function () {
                $scope.giphyPicker.show = false;
                $scope.giphyPicker = null;
            }
        };
    };

    $scope.remove = function () {
        $scope.model.value = null;
    };
}
angular.module('umbraco').controller("Giphy.PropertyEditor.Controller", giphyPropertyEditorController);