import React from 'react';
import { Box } from "../../atoms/box/index.js";
import { Label } from "../../atoms/label/index.js";
import { Text } from "../../atoms/text/index.js";
/**
 * @load ./value-group.doc.md
 * @component
 * @subcategory Molecules
 * @hideconstructor
 * @see ValueGroupProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-value-group--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
export const ValueGroup = props => {
  const {
    label,
    value,
    children
  } = props;
  return /*#__PURE__*/React.createElement(Box, {
    mb: "xl"
  }, /*#__PURE__*/React.createElement(Label, {
    variant: "light"
  }, label), value ? /*#__PURE__*/React.createElement(Text, null, value) : '', children);
};
ValueGroup.displayName = 'ValueGroup';
export default ValueGroup;