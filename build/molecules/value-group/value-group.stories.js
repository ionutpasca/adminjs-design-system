function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Box, CardTitle, Text } from "../../index.js";
import StoryWrapper from "../../utils/story-wrapper.js";
import { ValueGroup } from "./index.js";
export const Default = {
  render: ({
    onClick
  }) => {
    const handleClick = event => {
      event.preventDefault();
      onClick(event);
    };
    const objects = [{
      label: 'First Name',
      onClick: handleClick,
      value: 'Wojtek'
    }, {
      label: 'Last Name',
      onClick: handleClick,
      value: 'Krysiak'
    }];
    return /*#__PURE__*/React.createElement(StoryWrapper, {
      label: "ValueGroup default settings"
    }, /*#__PURE__*/React.createElement(Box, null, objects.map(field => /*#__PURE__*/React.createElement(ValueGroup, _extends({
      key: field.label
    }, field))), /*#__PURE__*/React.createElement(ValueGroup, {
      label: "value with styled children"
    }, /*#__PURE__*/React.createElement(CardTitle, null, "With children which are wrapped with CardTitle")), /*#__PURE__*/React.createElement(ValueGroup, {
      label: "With Multiline Content"
    }, /*#__PURE__*/React.createElement(Box, {
      variant: "white",
      border: "default"
    }, /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement("h4", null, "I am header"), /*#__PURE__*/React.createElement("p", null, "And I am content"))))));
  }
};
const meta = {
  title: 'DesignSystem/Molecules/ValueGroup',
  component: ValueGroup
};
export default meta;