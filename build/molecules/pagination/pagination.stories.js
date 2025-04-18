function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Text } from "../../index.js";
import { Pagination } from "./index.js";
export const Default = {
  render: props => /*#__PURE__*/React.createElement(Text, {
    py: "xl",
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(Pagination, _extends({}, props, {
    onChange: item => item
  })))
};
const meta = {
  title: 'DesignSystem/Molecules/Pagination',
  component: Pagination,
  args: {
    total: 10,
    page: 5,
    perPage: 1
  }
};
export default meta;