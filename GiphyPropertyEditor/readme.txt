
   ___ _      _          ___                       _          ___    _ _ _           
  / __(_)_ __| |_ _  _  | _ \_ _ ___ _ __  ___ _ _| |_ _  _  | __|__| (_) |_ ___ _ _ 
 | (_ | | '_ \ ' \ || | |  _/ '_/ _ \ '_ \/ -_) '_|  _| || | | _|/ _` | |  _/ _ \ '_|
  \___|_| .__/_||_\_, | |_| |_| \___/ .__/\___|_|  \__|\_, | |___\__,_|_|\__\___/_|  
        |_|       |__/              |_|                |__/                          
                                                                           
-------------------------------------------------------------------------------------

A Giphy Property Editor and Grid Editor for Umbraco by Paul Seal from https://codeshare.co.uk
Search giphy for an image and use it like the media picker as a property or grid editor.

## Dev Instructions ##

To use it on your site, you will need to get an api key. Just go to 
https://developers.giphy.com/ to register and get a key. It's quick and easy.

Then when you create a data type in Umbraco using the Giphy Property Editor, you just 
enter your api key in there or you can put it in the app settings like this:

<add key="giphyApiKey" value="your-giphy-api-key-here" />

If you add that to the app settings then it will work for both the property editor 
and grid editor. But if you don't then you will need to add the api key when creating 
the data type using the property editor.

Here is the link to the GitHub project https://github.com/prjseal/Giphy-Property-Editor

-------------------------------------------------------------------------------------

   ( (
    ) )
  ........    You can show your appreciation for this package, by buying me a coffee
  |      |]   
  \      /    https://codeshare.co.uk/coffee
   `----'