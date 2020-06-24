import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components/macro';
import ReactPlaceholder from 'react-placeholder';

import { IMetricsProps } from './Metrics.typings';

const Metrics: React.FC<IMetricsProps> = ({
  className,
  style,
  children,
  loading,
}) => (
  <div className={clsx('Metrics-root', className)} style={style}>
    <ReactPlaceholder
      type="text"
      rows={40}
      showLoadingAnimation
      ready={!loading}
    >
      {children}
    </ReactPlaceholder>
  </div>
);

const StyledMetrics = styled(Metrics)`
  &.Metrics-root {
    padding: 1rem;
    overflow: scroll;
  }
`;

export default StyledMetrics;
