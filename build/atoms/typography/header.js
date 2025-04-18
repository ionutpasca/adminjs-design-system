function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import { typography, space } from 'styled-system';
import { styled } from "../../../build/utils/styled.js";
import { Button } from "../button/index.js";
import { Badge } from "../badge/index.js";
import { cssClass } from "../../utils/css-class.js";
import themeGet from "../../utils/theme-get.js";

/**
 * Prop Types of an Header components.
 * Apart from all props for a standard hx elements it extends
 * {@link TypographyProps} and {@link SpaceProps}
 *
 * @memberof Header
 * @alias HeaderProps
 * @property {string} [...] Other props from {@link TypographyProps}, {@link SpaceProps}
 */

const Base = styled.h3`
  font-family: ${themeGet('font')};
  vertical-align: middle;
  padding: 0;
  * {
    vertical-align: middle;
  }
  & ${Button}, a {
    vertical-align: bottom;
  }
  * > &:first-child {
    margin-top: ${themeGet('space', 'sm')};
  }
  ${Badge} {
    vertical-align: middle;
  }

  ${typography};
  ${space};
`;
Base.defaultProps = {
  fontWeight: 'normal',
  fontSize: 'h3',
  lineHeight: 'xl',
  className: cssClass(['Header', 'H3']),
  marginTop: 'xxl',
  marginBottom: 'xl'
};
export const H1 = styled(props => /*#__PURE__*/React.createElement(Base, _extends({
  as: "h1"
}, props)))``;
H1.defaultProps = {
  fontSize: 'h1',
  lineHeight: 'xxl',
  className: cssClass(['Header', 'H1']),
  marginTop: 'x4',
  marginBottom: 'x3'
};
H1.displayName = 'H1';
export const H2 = styled(props => /*#__PURE__*/React.createElement(Base, _extends({
  as: "h2"
}, props)))`
  & ${Button}, a {
    margin-bottom: 4px;
  }
`;
H2.defaultProps = {
  fontSize: 'h2',
  lineHeight: 'xxl',
  className: cssClass(['Header', 'H2']),
  marginTop: 'x3',
  marginBottom: 'xxl'
};
H2.displayName = 'H2';
export const H3 = Base;
H3.displayName = 'H3';
export const H4 = styled(props => /*#__PURE__*/React.createElement(Base, _extends({
  as: "h4"
}, props)))``;
H4.defaultProps = {
  fontSize: 'h4',
  lineHeight: 'xl',
  className: cssClass(['Header', 'H4']),
  marginTop: 'xxl',
  marginBottom: 'xl'
};
H4.displayName = 'H4';
export const H5 = styled(props => /*#__PURE__*/React.createElement(Base, _extends({
  as: "h5"
}, props)))``;
H5.defaultProps = {
  fontSize: 'xl',
  lineHeight: 'lg',
  className: cssClass(['Header', 'H5']),
  marginTop: 'xl',
  marginBottom: 'default',
  fontWeight: 'normal'
};
H5.displayName = 'H5';
export const H6 = styled(props => /*#__PURE__*/React.createElement(Base, _extends({
  as: "h6"
}, props)))``;
H6.defaultProps = {
  fontSize: 'lg',
  lineHeight: 'lg',
  className: cssClass(['Header', 'H6']),
  marginTop: 'lg',
  marginBottom: 'default',
  fontWeight: 'normal'
};
H6.displayName = 'H6';

/**
 * @load ./header.doc.md
 * @component
 * @subcategory Atoms
 * @see HeaderProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-header--default Storybook}
 * @hideconstructor
 * @section design-system
 */
export const Header = H3;
Header.H1 = H1;
Header.H2 = H2;
Header.H3 = H3;
Header.H4 = H4;
Header.H5 = H5;
Header.H6 = H6;
export default Header;