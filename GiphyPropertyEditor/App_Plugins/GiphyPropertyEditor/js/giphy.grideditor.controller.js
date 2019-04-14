function giphyGridEditorController($scope, editorService) {

    $scope.add = function () {
        var giphyPicker = {
            apikey: "59RQWmqS3CsdVbgjd6XfrnUOA8UvbcPY",
            title: "Animated Gif Search",
            view: "/App_Plugins/GiphyPropertyEditor/giphy.picker.html",
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