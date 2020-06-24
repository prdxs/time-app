import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components/macro';

import { IRootPageProps } from './RootPage.typings';
import Time from 'src/components/Time';
import Metrics from 'src/components/Metrics';

const RootPage: React.FC<IRootPageProps> = ({ className }) => (
  <div className={clsx('RootPage-root', className)}>
    <Time className="RootPage-time" />
    <Metrics className="RootPage-metrics" />
  </div>
);

const StyledRootPage = styled(RootPage)`
  &.RootPage-root {
    display: flex;
    justify-content: space-between;
    height: 100%;

    .RootPage-time {
      width: 50%;
    }

    .RootPage-metrics {
      width: 50%;
    }
  }
`;

export default StyledRootPage;
