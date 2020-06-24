import { TypographyOptions } from 'typography';

export interface IBreakpointsArray extends Array<string> {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ITheme {
  name: string;
  breakpoints: IBreakpointsArray;
  palette: {
    [key: string]: { [key: string]: string };
  };
  shadows: Array<string>;
  typography: TypographyOptions;
  fns: {
    getColor(color: string): string;
  };
}
