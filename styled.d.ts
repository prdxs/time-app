// import original module declarations
import 'styled-components';
import { ITheme } from './src/theme/typings';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
