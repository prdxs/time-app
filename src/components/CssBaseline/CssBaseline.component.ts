import { memo } from 'react';
import {
  createGlobalStyle,
  css,
  Interpolation,
  FlattenSimpleInterpolation,
} from 'styled-components';
import '@csstools/normalize.css';
import 'sanitize.css';
import 'react-placeholder/lib/reactPlaceholder.css';

import { ITheme } from 'src/theme/typings';

const styleFn: Interpolation<{ theme: ITheme }> = ({ theme }) => {
  const backgroundColor = theme.fns.getColor('common.grey');

  const paletteCssVars = Object.entries(theme.palette).reduce<
    FlattenSimpleInterpolation
  >((allCss, [group, itemMap]) => {
    const groupCss = Object.entries(itemMap).reduce<FlattenSimpleInterpolation>(
      (groupCss, [name, value]) => {
        return css`
            ${groupCss}
            --${group}-${name}: ${value};
          `;
      },
      css``
    );

    return css`
      ${allCss}
      ${groupCss}
      ${theme.typography.toString()}
    `;
  }, css``);

  return css`
    :root {
      ${paletteCssVars}
    }

    body {
      background: ${backgroundColor};
      transition: all 0.1s;
    }
  `;
};

const CssBaseline = createGlobalStyle`
  ${styleFn}
`;

export default memo(CssBaseline);
