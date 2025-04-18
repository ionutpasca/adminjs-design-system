function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Box } from "../../index.js";
import { MessageBox } from "./message-box.js";
export const Default = {
  render: ({
    withInsideText,
    ...props
  }) => /*#__PURE__*/React.createElement(Box, {
    py: "lg"
  }, /*#__PURE__*/React.createElement(MessageBox, _extends({
    onCloseClick: () => {/** noop */}
  }, props), withInsideText && 'With inside text'))
};
const meta = {
  title: 'DesignSystem/Molecules/MessageBox',
  component: MessageBox,
  args: {
    variant: 'info',
    size: 'sm',
    message: 'Some message'
  },
  argTypes: {
    variant: {
      options: ['danger', 'info', 'success', 'warning'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    },
    message: {
      control: {
        type: 'text'
      }
    }
  }
};
export default meta;