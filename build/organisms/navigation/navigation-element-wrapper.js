function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { NavigationElement } from "../../molecules/navigation-element/index.js";
export const NavigationElementWrapper = props => {
  const {
    elements,
    isOpen
  } = props;
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(NavigationElement, props), elements?.length && isOpen ? /*#__PURE__*/React.createElement("ul", null, elements.map((element, id) => /*#__PURE__*/React.createElement(NavigationElementWrapper, _extends({}, element, {
    key: [id, element.href].join('-')
  })))) : '');
};
NavigationElementWrapper.displayName = 'NavigationElementWrapper';
export default NavigationElementWrapper;