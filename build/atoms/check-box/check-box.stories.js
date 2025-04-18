function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Box, Label } from "../index.js";
import { CheckBox } from "./index.js";
export const Default = {
  render: props => /*#__PURE__*/React.createElement(Box, {
    flexDirection: "column",
    marginRight: 15
  }, /*#__PURE__*/React.createElement(CheckBox, _extends({
    id: "default-checkbox"
  }, props)), /*#__PURE__*/React.createElement(Label, {
    inline: true,
    htmlFor: "default-checkbox",
    ml: "default"
  }, "Check me!"))
};
export const AllStates = () => /*#__PURE__*/React.createElement(Box, {
  flex: true
}, /*#__PURE__*/React.createElement(Box, {
  flexDirection: "column",
  marginRight: 15
}, /*#__PURE__*/React.createElement(CheckBox, {
  id: "checkbox1",
  checked: true
}), /*#__PURE__*/React.createElement(Label, {
  inline: true,
  htmlFor: "checkbox1",
  ml: "default"
}, "Checked")), /*#__PURE__*/React.createElement(Box, {
  flexDirection: "column",
  marginRight: 15
}, /*#__PURE__*/React.createElement(CheckBox, {
  id: "checkbox2"
}), /*#__PURE__*/React.createElement(Label, {
  inline: true,
  htmlFor: "checkbox2",
  ml: "default"
}, "Unchecked")), /*#__PURE__*/React.createElement(Box, {
  flexDirection: "column",
  marginRight: 15
}, /*#__PURE__*/React.createElement(CheckBox, {
  id: "checkbox3",
  checked: true,
  disabled: true
}), /*#__PURE__*/React.createElement(Label, {
  inline: true,
  htmlFor: "checkbox3",
  ml: "default"
}, "Disabled")));
const meta = {
  title: 'DesignSystem/Atoms/CheckBox',
  component: CheckBox
};
export default meta;