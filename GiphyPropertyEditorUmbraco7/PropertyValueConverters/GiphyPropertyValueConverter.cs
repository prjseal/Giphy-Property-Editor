﻿using System;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Core.PropertyEditors;

namespace GiphyPropertyEditorUmbraco7.PropertyValueConverters
{

    public class GiphyPropertyValueConverter : PropertyValueConverterBase
    {

        /// <summary>
        /// Gets a value indicating whether the converter supports a property type.
        /// </summary>
        /// <param name="propertyType">The property type.</param>
        /// <returns>A value indicating whether the converter supports a property type.</returns>
        public bool IsConverter(PublishedPropertyType propertyType)
        {
            return propertyType.PropertyEditorAlias.Equals("GiphyPropertyEditorUmbraco7");
        }

        /// <summary>
        /// Gets the type of values returned by the converter.
        /// </summary>
        /// <param name="propertyType">The property type.</param>
        /// <returns>The CLR type of values returned by the converter.</returns>
        public Type GetPropertyValueType(PublishedPropertyType propertyType)
        {
            return typeof(string);
        }

    }

}
