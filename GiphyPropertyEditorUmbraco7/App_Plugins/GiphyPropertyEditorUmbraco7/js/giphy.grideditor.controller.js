function giphyGridEditorController($scope, editorService) {

    $scope.overlay = {
        apikey: Umbraco.Sys.ServerVariables["Giphy"]["ApiKey"]
            ? Umbraco.Sys.ServerVariables["Giphy"]["ApiKey"]
            : $scope.model.config.apikey,
        title: "Animated Gif Search",
        subtitle: "Powered by GIPHY",
        view: "/App_Plugins/GiphyPropertyEditorUmbraco7/giphy.picker.html",
        show: false,
        hideSubmitButton: true,
        submit: function (model) {
            $scope.control.value = model.images.original.url;
            $scope.overlay.show = false;
        },
        close: function () {
            $scope.overlay.show = false;
        }
    };

    $scope.remove = function () {
        $scope.control.value = null;
    };
}
angular.module('umbraco').controller("Giphy.GridEditor.Controller", giphyGridEditorController);