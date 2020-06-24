import React, { memo, useMemo } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';

import { ITimeProps } from './Time.typings';

const Time: React.FC<ITimeProps> = ({
  className,
  style,
  loading,
  serverTime,
  pastTime,
}) => {
  return (
    <div
      className={clsx('Time-root', className)}
      style={style}
      data-testid="Time-root"
    >
      <ReactPlaceholder
        type="rect"
        style={useMemo(() => ({ width: '16rem', height: '4.375rem' }), [])}
        showLoadingAnimation
        ready={!loading}
      >
        <h1 className="Time-serverTime" data-testid="Time-serverTime">
          {serverTime}
        </h1>
      </ReactPlaceholder>
      <p className="Time-difference" data-testid="Time-difference">
        {pastTime}
      </p>
    </div>
  );
};

const StyledTime = styled(Time)`
  &.Time-root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: var(--secondary-main);

    .Time-serverTime {
      font-size: 4rem;
    }

    .Time-difference {
      font-size: 4rem;
    }
  }
`;

export default memo(StyledTime);
