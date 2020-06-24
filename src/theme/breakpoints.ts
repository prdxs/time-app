import { IBreakpointsArray } from './typings';

export const LARGE_DISPLAY_WIDTH = '1280px';
export const DEFAULT_WIDTH = '980px';
export const TABLET_WIDTH = '768px';
export const MOBILE_WIDTH = '480px';

export const LARGE_DISPLAY_MEDIA_QUERY = `@media only screen and (max-width: ${LARGE_DISPLAY_WIDTH})`;
export const DEFAULT_MEDIA_QUERY = `@media only screen and (max-width: ${DEFAULT_WIDTH})`;
export const TABLET_MEDIA_QUERY = `@media only screen and (max-width: ${TABLET_WIDTH})`;
export const MOBILE_MEDIA_QUERY = `@media only screen and (max-width: ${MOBILE_WIDTH})`;

export const MIN_LARGE_DISPLAY_MEDIA_QUERY = `@media (min-width: ${LARGE_DISPLAY_WIDTH})`;
export const MIN_DEFAULT_MEDIA_QUERY = `@media (min-width: ${DEFAULT_WIDTH})`;
export const MIN_TABLET_MEDIA_QUERY = `@media (min-width: ${TABLET_WIDTH})`;
export const MIN_MOBILE_MEDIA_QUERY = `@media (min-width: ${MOBILE_WIDTH})`;

const breakpoints: IBreakpointsArray = Object.assign(
  [MOBILE_WIDTH, TABLET_WIDTH, DEFAULT_WIDTH, LARGE_DISPLAY_WIDTH],
  {
    // aliases
    sm: MOBILE_WIDTH,
    md: TABLET_WIDTH,
    lg: DEFAULT_WIDTH,
    xl: LARGE_DISPLAY_WIDTH,
  }
);

export default breakpoints;
