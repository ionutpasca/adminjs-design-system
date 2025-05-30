import { styled } from "../../../build/utils/styled.js";
import themeGet from "../../utils/theme-get.js";
import CaptionShared from "./caption-shared.js";
export const Title = styled('div')`
  ${CaptionShared};
  font-size: ${themeGet('fontSizes', 'md')};
  line-height: ${themeGet('lineHeights', 'lg')};
`;
Title.displayName = 'Title';
export default Title;