function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Box, Label } from "../index.js";
const StoryWrapper = props => {
  const {
    label,
    children,
    gap = 16,
    ...other
  } = props;
  return /*#__PURE__*/React.createElement(Box, {
    variant: "grey"
  }, /*#__PURE__*/React.createElement(Label, null, label), /*#__PURE__*/React.createElement(Box, _extends({
    bg: "white",
    p: "xxl",
    width: 1,
    style: {
      gap
    }
  }, other), children));
};
export default StoryWrapper;