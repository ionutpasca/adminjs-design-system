function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useState } from 'react';
import { Box } from "../../index.js";
import StoryWrapper from "../../utils/story-wrapper.js";
import { NavigationElement } from "./index.js";
export const Default = {
  render: props => {
    const [isOpen, setOpen] = useState(false);
    const handleClick = event => {
      event.stopPropagation();
      event.preventDefault();
      setOpen(!isOpen);
    };
    return /*#__PURE__*/React.createElement(StoryWrapper, {
      label: "Navigation Element"
    }, /*#__PURE__*/React.createElement(Box, {
      px: "xl",
      py: "xxl",
      width: "300px",
      border: "bg"
    }, /*#__PURE__*/React.createElement(NavigationElement, _extends({}, props, {
      href: "#",
      isOpen: isOpen,
      onClick: handleClick
    }))));
  }
};
const meta = {
  title: 'DesignSystem/Molecules/NavigationElement',
  args: {
    label: 'Dashboard',
    icon: 'Activity',
    isSelected: false
  },
  argTypes: {
    isSelected: {
      control: {
        type: 'boolean'
      }
    },
    icon: {
      control: {
        type: 'text'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    }
  }
};
export default meta;