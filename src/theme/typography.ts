import Typography from 'typography';

import theme from './theme';

const typography = new Typography({
  ...theme.typography,
});

export const { scale, rhythm, options } = typography;
export default typography;
