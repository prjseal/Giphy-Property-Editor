﻿function giphyPropertyEditorController($scope, editorService) {

    $scope.add = function () {
        var giphyPicker = {
            apikey: Umbraco.Sys.ServerVariables["Giphy"]["ApiKey"]
                ? Umbraco.Sys.ServerVariables["Giphy"]["ApiKey"]
                : $scope.model.config.apikey,
            title: "Animated Gif Search",
            view: "/App_Plugins/GiphyPropertyEditor/giphy.picker.html",
            size: "small",
            submit: function (model) {
                $scope.model.value = model.images.original.url;
                editorService.close();
            },
            close: function () {
                editorService.close();
            }
        };
        editorService.open(giphyPicker);
    };

    $scope.remove = function () {
        $scope.model.value = null;
    };
}
angular.module('umbraco').controller("Giphy.PropertyEditor.Controller", giphyPropertyEditorController);