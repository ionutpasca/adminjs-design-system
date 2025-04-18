function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useState, useMemo } from 'react';
import { Box } from "../../atoms/box/index.js";
import { Icon } from "../../atoms/icon/index.js";
import { StyledSingleButton } from "./button-group.styled.js";
export const SingleButtonInGroup = props => {
  const {
    icon,
    label,
    buttons,
    source,
    onClick,
    ...buttonProps
  } = props;
  const [loading, setLoading] = useState(false);
  const onClickHandler = onClick ? async event => {
    setLoading(true);
    await onClick(event, source);
    setLoading(false);
  } : undefined;
  const iconName = useMemo(() => loading ? 'Loader' : icon, [loading]);
  return /*#__PURE__*/React.createElement(StyledSingleButton, _extends({
    as: "a",
    hasLabel: !!label,
    onClick: onClickHandler
  }, buttonProps), !loading && !icon ? '' : /*#__PURE__*/React.createElement(Icon, {
    key: iconName?.toString(),
    icon: iconName,
    spin: loading
  }), label, buttons && buttons.length && label ? /*#__PURE__*/React.createElement(Box, {
    as: "span",
    mr: "-8px",
    ml: "md"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "ChevronDown"
  })) : '');
};
SingleButtonInGroup.displayName = 'SingleButtonInGroup';
export default SingleButtonInGroup;