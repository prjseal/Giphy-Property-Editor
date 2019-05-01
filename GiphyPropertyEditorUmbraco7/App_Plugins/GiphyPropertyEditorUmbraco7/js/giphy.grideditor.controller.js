function giphyGridEditorController($scope, editorService) {

    $scope.add = function () {
        var giphyPicker = {
            apikey: Umbraco.Sys.ServerVariables["Giphy"]["ApiKey"],
            title: "Animated Gif Search",
            view: "/App_Plugins/GiphyPropertyEditorUmbraco7/giphy.picker.html",
            size: "small",
            submit: function (model) {
                $scope.control.value = model.images.original.url;
                editorService.close();
            },
            close: function () {
                editorService.close();
            }
        };
        editorService.open(giphyPicker);
    };

    $scope.remove = function () {
        $scope.control.value = null;
    };
}
angular.module('umbraco').controller("Giphy.GridEditor.Controller", giphyGridEditorController);