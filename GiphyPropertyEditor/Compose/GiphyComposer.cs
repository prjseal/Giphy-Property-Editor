using Umbraco.Core;
using Umbraco.Core.Composing;

namespace GiphyPropertyEditor.Compose
{
    [RuntimeLevel(MinLevel = RuntimeLevel.Run)]
    public class GiphyComposer : IUserComposer
    {
        public void Compose(Composition composition)
        {
            composition.Components().Append<GiphyComponent>();
        }
    }
}
