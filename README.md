# Giphy Property Editor
A Giphy Property Editor for Umbraco by Paul Seal from [https://codeshare.co.uk](https://codeshare.co.uk)

![giphy unicorn](https://media3.giphy.com/media/mKP05pCT7U3Sg/100.gif)

[![Build status](https://ci.appveyor.com/api/projects/status/79hnj9h71q8km9bp?svg=true)](https://ci.appveyor.com/project/prjseal/giphy-property-editor)

[![Nuget Downloads](https://img.shields.io/nuget/dt/GiphyPropertyEditor.svg)](https://www.nuget.org/packages/GiphyPropertyEditor)


## Property Editor
Use the property editor to let you search giphy for an image and use it like the media picker.

![preview](images/preview.gif)

## Grid Editor
Use the grid editor to let you search giphy for an image and use it in the grid.

![preview](images/giphy-grid.gif)

## Login details

<strong>Username:</strong> admin@admin.com
<strong>Password:</strong> 1234567890

## Dev instructions

To use it on your site, you will need to get an api key. Just go to [https://developers.giphy.com/](https://developers.giphy.com/) to register and get a key. It's quick and easy.

![preview](images/get-api-key.png)

Then when you create a data type in Umbraco using the Giphy Property Editor, you just enter your api key in there or you can put it in the app settings like this:

```
<add key="giphyApiKey" value="your-giphy-api-key-here" />
```

If you add that to the app settings then it will work for both the property editor and grid editor. But if you don't then you will need to add the api key when creating the data type using the property editor.

![preview](images/data-type-preview.png)
