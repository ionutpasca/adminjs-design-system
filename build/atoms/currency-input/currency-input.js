import { space, typography, layout } from 'styled-system';
import CurrencyInputFieldLib, { formatValue as formatCurrencyProperty } from 'react-currency-input-field';
import { styled } from "../../../build/utils/styled.js";
import { InputCSS } from "../input/index.js";
import { cssClass } from "../../utils/css-class.js";
const CurrencyInputField = CurrencyInputFieldLib.default ?? CurrencyInputFieldLib;
const CurrencyInputComponent = CurrencyInputField.default ?? CurrencyInputField;

/**
 * Prop Types of a CurrencyInput component.
 * CurrencyInput is based on `react-currency-input-field` @see {@link https://github.com/cchanxzy/react-currency-input-field React Currency Input Field Component}
 * It extends all {@link SpaceProps}, {@link TypographyProps} and {@link LayoutProps} and {@link https://github.com/cchanxzy/react-currency-input-field#props React Currency Input Field Component Props}
 * @memberof CurrencyInput
 * @alias CurrencyInputProps
 * @property {string} [...] All props default to _currencyinput_ html component like `onChange`,
 *                          `value` etc.
 * @property {string} [...] Props from {@link SpaceProps}, {@link TypographyProps}
 *                          and {@link LayoutProps} + they extend {@link InputProps}
 */

/**
 * @classdesc
 *
 * <img src="components/currency-input.png" />
 *
 * Wrapped `currencyinput` html element.
 *
 * ### Usage
 *
 * ```ts
 * import { CurrencyInput, CurrencyInputProps } from '@adminjs/design-system'
 * ```
 *
 * @component
 * @subcategory Atoms
 * @see {@link https://storybook.adminjs.co/?path=/story/designsystem-atoms-currencyinput--default Storybook}
 * @see CurrencyInputProps
 * @hideconstructor
 * @example
 * return (
 *   <Box p="xl">
 *      <Label htmlFor="currencyinput1">Some example label</Label>
 *      <CurrencyInput id="currencyinput1" intlConfig={{ locale: 'en-US', currency: 'GBP' }} />;
 *   </Box>
 * )
 * @section design-system
 */
const CurrencyInput = styled(CurrencyInputComponent)`
  ${InputCSS}
  ${space};
  ${layout};
  ${typography};

  width: 100%;
`;
CurrencyInput.defaultProps = {
  px: 'default',
  py: 'sm',
  className: cssClass('CurrencyInput')
};
CurrencyInput.displayName = 'CurrencyInput';
export { CurrencyInput, formatCurrencyProperty };
export default CurrencyInput;