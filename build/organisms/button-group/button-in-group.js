function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { DropDown, DropDownMenu, DropDownTrigger } from "../../molecules/drop-down/index.js";
import { SingleButtonInGroup } from "./single-button-in-group.js";
import { DropDownItemWithButtons } from "./drop-down-item-with-buttons.js";
export const ButtonInGroup = props => {
  const {
    buttons,
    className,
    ...buttonProps
  } = props;
  if (buttons && buttons.length) {
    return /*#__PURE__*/React.createElement(DropDown, {
      stick: "right",
      className: className
    }, /*#__PURE__*/React.createElement(DropDownTrigger, null, /*#__PURE__*/React.createElement(SingleButtonInGroup, props)), /*#__PURE__*/React.createElement(DropDownMenu, null, buttons.map(button => /*#__PURE__*/React.createElement(DropDownItemWithButtons, _extends({}, button, {
      key: `${button.label}-${button.icon}`
    })))));
  }
  return /*#__PURE__*/React.createElement(SingleButtonInGroup, _extends({}, buttonProps, {
    className: className
  }));
};
ButtonInGroup.displayName = 'ButtonInGroup';
export default ButtonInGroup;