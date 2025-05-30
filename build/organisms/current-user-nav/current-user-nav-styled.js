import { styled } from "../../../build/utils/styled.js";
import { cssClass, themeGet } from "../../utils/index.js";
import { Box } from "../../atoms/box/index.js";
export const StyledCurrentUserNav = styled(Box)`
  text-align: right;

  & .line-action {
    .${cssClass('Icon')} svg {
      stroke: ${themeGet('colors', 'grey80')};
    }
    &:hover .${cssClass('Icon')} svg {
      stroke: ${themeGet('colors', 'primary100')};
    }
  }

  & img {
    width: 36px;
    height: 36px;
    border-radius: 40px;
    margin: -1px ${themeGet('space', 'md')} 0;
  }
`;
StyledCurrentUserNav.defaultProps = {
  flex: true,
  flexDirection: 'row'
};
export default StyledCurrentUserNav;