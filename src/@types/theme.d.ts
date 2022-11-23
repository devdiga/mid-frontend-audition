import 'styled-components';
import { darkTheme } from 'styles/global/theme.styles';

declare module 'styled-components' {
  type ThemeType = typeof darkTheme;

  export interface DefaultTheme extends ThemeType {}
}
