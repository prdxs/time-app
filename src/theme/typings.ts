import Typography from 'typography';

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
  typography: Typography;
  fns: {
    getColor(color: string): string;
  };
}
