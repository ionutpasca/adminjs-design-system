function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useState, useMemo } from 'react';
import { Icon } from "../../atoms/icon/index.js";
import { DropDownMenu, DropDownItem } from "../../molecules/drop-down/index.js";
import { StyledDropDownItemAction } from "./button-group.styled.js";
export const DropDownItemWithButtons = props => {
  const {
    variant,
    onClick,
    href,
    icon,
    label,
    buttons,
    source,
    ...rest
  } = props;
  const [loading, setLoading] = useState(false);
  const onClickHandler = onClick ? async event => {
    setLoading(true);
    await onClick(event, source);
    setLoading(false);
  } : undefined;
  const iconName = useMemo(() => loading ? 'Loader' : icon, [loading]);
  return /*#__PURE__*/React.createElement(DropDownItem, {
    colorVariant: variant,
    p: 0
  }, /*#__PURE__*/React.createElement(StyledDropDownItemAction, _extends({
    onClick: onClickHandler,
    href: href,
    as: "a",
    hasLabel: !!label
  }, rest), buttons && buttons.length ? /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronLeft",
    ml: "-24px",
    mr: "0"
  }) : '', !loading && !icon ? '' : /*#__PURE__*/React.createElement(Icon, {
    key: iconName?.toString(),
    icon: iconName,
    spin: loading
  }), label), buttons && buttons.length ? /*#__PURE__*/React.createElement(DropDownMenu, null, buttons.map(button => /*#__PURE__*/React.createElement(DropDownItemWithButtons, _extends({}, button, {
    key: button.label
  })))) : '');
};
DropDownItemWithButtons.displayName = 'DropDownItemWithButtons';
export default DropDownItemWithButtons;