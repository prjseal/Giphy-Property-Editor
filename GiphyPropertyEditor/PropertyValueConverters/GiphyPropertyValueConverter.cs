using System;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Core.PropertyEditors;

namespace GiphyPropertyEditor.PropertyValueConverters
{

    public class GiphyPropertyValueConverter : PropertyValueConverterBase
    {

        /// <summary>
        /// Gets a value indicating whether the converter supports a property type.
        /// </summary>
        /// <param name="propertyType">The property type.</param>
        /// <returns>A value indicating whether the converter supports a property type.</returns>
        public override bool IsConverter(PublishedPropertyType propertyType)
        {
            return propertyType.EditorAlias == "GiphyPropertyEditor";
        }

        /// <summary>
        /// Gets the type of values returned by the converter.
        /// </summary>
        /// <param name="propertyType">The property type.</param>
        /// <returns>The CLR type of values returned by the converter.</returns>
        public override Type GetPropertyValueType(PublishedPropertyType propertyType)
        {
            return typeof(string);
        }

    }

}
