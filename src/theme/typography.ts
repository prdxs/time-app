import Typography from 'typography';

import { MOBILE_MEDIA_QUERY } from './breakpoints';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['900'],
    },
    {
      name: 'Roboto',
      styles: ['300', '400', '700'],
    },
  ],
  baseFontSize: '18px',
  headerFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  scaleRatio: 2.4,
  overrideStyles: () => ({
    [MOBILE_MEDIA_QUERY]: {
      html: {
        fontSize: '16px',
      },
    },
  }),
});

export default typography;
