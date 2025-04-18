function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable default-case */
import React, { useLayoutEffect, useRef, useState } from 'react';
import { styled } from "../../../build/utils/styled.js";
const StyledDropDown = styled.div`
  position: relative;
  display: inline-block;
`;
export const DEFAULT_STICK = 'left';

/**
 * Available values for {@link DropDown}.stick prop
 * @memberof DropDown
 */

/**
 * Props passed to DropDown element.
 * @property {string} [...] Other props from {@link BoxProps}
 * @memberof DropDown
 * @extends BoxProps
 */

/**
 * @load ./drop-down.doc.md
 * @hideconstructor
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-molecules-dropdown--default Storybook}
 * @component
 * @subcategory Molecules
 * @section design-system
 */
const DropDown = props => {
  const {
    children,
    stick = DEFAULT_STICK,
    ...boxProps
  } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [initialHeight, setInitialHeight] = useState(null);
  const ref = useRef(null);
  const [menuPosition, setMenuPosition] = useState();
  useLayoutEffect(() => {
    if (ref.current && !initialHeight) {
      const {
        offsetHeight
      } = ref.current;
      setInitialHeight(offsetHeight);
      switch (stick) {
        case 'left':
          setMenuPosition({
            left: 0,
            top: offsetHeight
          });
          break;
        case 'right':
          setMenuPosition({
            right: 0,
            top: offsetHeight
          });
      }
    }
  }, [ref.current]);
  const elements = React.Children.map(children, child => {
    const type = child && child.type && child.type.displayName;
    if (type === 'DropDownTrigger') {
      // getting rid of DropDownTrigger and render just what was inside
      return /*#__PURE__*/React.cloneElement(child.props.children);
    }
    if (type === 'DropDownMenu') {
      return /*#__PURE__*/React.cloneElement(child, {
        isVisible,
        stick,
        ...menuPosition
      });
    }
    return child;
  });
  return /*#__PURE__*/React.createElement(StyledDropDown, _extends({}, boxProps, {
    onMouseEnter: () => setIsVisible(true),
    onMouseLeave: () => setIsVisible(false),
    ref: ref
  }), elements);
};
DropDown.displayName = 'DropDown';
export { DropDown };
export default DropDown;