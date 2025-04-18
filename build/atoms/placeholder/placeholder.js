function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { layout } from 'styled-system';
import { darken } from 'polished';
import { styled, keyframes } from "../../../build/utils/styled.js";
import { cssClass } from "../../utils/css-class.js";
const waveKeyframe = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(100%);
  }
`;
const StyledPlaceholder = styled.div`
  position: relative;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  &::after {
    animation: ${waveKeyframe} 1.6s linear 0.5s infinite;
    background: linear-gradient(
      90deg,
      transparent,
      ${({
  theme
}) => darken(0.03, theme.colors.border)},
      transparent
    );
    content: '';
    position: absolute;
    transform: translateX(-100%);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  
  background: ${({
  theme
}) => theme.colors.border};
  background-size: 1000px 104px;
  height: 338px;
  border-radius: ${({
  theme
}) => theme.space.sm};
  ${layout};
`;

/**
 * Prop Types of a Placeholder component.
 * Apart from standard html props it extends {@link LayoutProps}
 * @typedef {object} PlaceholderProps
 * @memberof Placeholder
 * @alias PlaceholderProps
 * @property {string} [...] All props default to _div_ html component like `style`,
 *                          `id` etc.
 * @property {string} [...] Props from {@link LayoutProps}
 */

/**
 * @classdesc
 *
 * <img src="components/placeholder.png" />
 *
 * Renders placeholder
 *
 * ### Usage
 *
 * ```javascript
 * import { Placeholder, PlaceholderProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see PlaceholderProps
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-placeholder--default Storybook}
 * @hideconstructor
 * @example <caption>Image placeholder</caption>
 * return (
 *   <Box>
 *     <Placeholder width={100} height={200} />
 *   </Box>
 * )
 *
 * @example <caption>Text placeholder</caption>
 * return (
 *   <Box>
 *     <Label>Some name</Label>
 *     <Placeholder width={400} height={14} />
 *   </Box>
 * )
 * @section design-system
 */
const Placeholder = ({
  as: htmlAs,
  ref,
  ...other
}) => /*#__PURE__*/React.createElement(StyledPlaceholder, _extends({
  as: htmlAs
}, other, {
  className: cssClass('Placeholder')
}));
Placeholder.displayName = 'Placeholder';
export { Placeholder };
export default Placeholder;