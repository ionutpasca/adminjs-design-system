function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { StyledNavigation } from "./navigation-styled.js";
import { NavigationElementWrapper } from "./navigation-element-wrapper.js";
import { Label } from "../../atoms/label/index.js";

/**
 * @load ./navigation.doc.md
 * @component
 * @subcategory Organisms
 * @hideconstructor
 * @see NavigationProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-organisms-navigation--default Storybook}
 * @new In version 3.3
 * @section design-system
 */
export const Navigation = props => {
  const {
    label,
    elements
  } = props;
  return /*#__PURE__*/React.createElement(StyledNavigation, {
    px: "xl",
    py: "lg"
  }, !!label?.length && /*#__PURE__*/React.createElement(Label, {
    pl: "lg",
    mb: "md",
    uppercase: true
  }, label), /*#__PURE__*/React.createElement("ul", null, elements.map((element, id) => /*#__PURE__*/React.createElement(NavigationElementWrapper, _extends({
    key: [id, element.href].join('-')
  }, element)))));
};
Navigation.displayName = 'Navigation';
export default Navigation;