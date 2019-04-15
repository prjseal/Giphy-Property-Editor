using System.Collections.Generic;
using System.Configuration;
using Umbraco.Core.Composing;
using Umbraco.Web.JavaScript;

namespace GiphyPropertyEditor.Compose
{
    public class GiphyComponent : IComponent
    {
        public void Initialize()
        {
            ServerVariablesParser.Parsing += ServerVariablesParser_Parsing;
        }

        public void Terminate()
        {
        }

        private void ServerVariablesParser_Parsing(object sender, Dictionary<string, object> e)
        {
            var giphyApiKey = ConfigurationManager.AppSettings["giphyApiKey"];
            
            if (!e.ContainsKey("MediaInfo"))
                e.Add("Giphy", new Dictionary<string, object>
                {
                    {
                        "ApiKey", ConfigurationManager.AppSettings["giphyApiKey"]
                    }
                });
        }
    }
}