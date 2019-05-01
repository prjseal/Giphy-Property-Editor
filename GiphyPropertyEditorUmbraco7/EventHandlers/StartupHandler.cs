using System;
using System.Collections.Generic;
using System.Configuration;
using System.Web;
using Umbraco.Core;
using Umbraco.Web.UI.JavaScript;

namespace GiphyPropertyEditorUmbraco7.EventHandlers
{
    public class StartupHandler : ApplicationEventHandler
    {
        protected override void ApplicationStarted(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            base.ApplicationStarted(umbracoApplication, applicationContext);
            ServerVariablesParser.Parsing += ServerVariablesParser_Parsing;

        }

        private void ServerVariablesParser_Parsing(object sender, Dictionary<string, object> e)
        {
            if (HttpContext.Current == null)
            {
                throw new InvalidOperationException("HttpContext is null");
            }

            if (!e.ContainsKey("Giphy"))
                e.Add("Giphy", new Dictionary<string, object>
                {
                    {
                        "ApiKey", ConfigurationManager.AppSettings["giphyApiKey"]
                    }
                });
        }
    }
}
