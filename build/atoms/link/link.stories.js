function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { Link } from "./index.js";
var LinkVariant = /*#__PURE__*/function (LinkVariant) {
  LinkVariant["Primary"] = "primary";
  LinkVariant["Danger"] = "danger";
  LinkVariant["Success"] = "success";
  LinkVariant["Info"] = "info";
  LinkVariant["Secondary"] = "secondary";
  return LinkVariant;
}(LinkVariant || {});
var LinkSize = /*#__PURE__*/function (LinkSize) {
  LinkSize["Sm"] = "sm";
  LinkSize["Lg"] = "lg";
  return LinkSize;
}(LinkSize || {});
const variants = Object.values(LinkVariant);
const sizes = Object.values(LinkSize);
export const Default = {
  render: props => /*#__PURE__*/React.createElement(Link, _extends({}, props, {
    href: "/"
  }), "just a link")
};
const meta = {
  title: 'DesignSystem/Atoms/Link',
  component: Link,
  args: {
    uppercase: false,
    variant: LinkVariant.Primary,
    size: LinkSize.Sm
  },
  argTypes: {
    uppercase: {
      control: {
        type: 'boolean'
      }
    },
    variant: {
      options: variants,
      control: {
        type: 'select'
      }
    },
    size: {
      options: sizes,
      control: {
        type: 'select'
      }
    }
  }
};
export default meta;