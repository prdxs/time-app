import React, { memo, useMemo } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';

import { ITimeProps } from './Time.typings';

const Time: React.FC<ITimeProps> = ({ className, style, loading, time }) => {
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
        <h1 className="Time-time" data-testid="Time-time">
          {time}
        </h1>
      </ReactPlaceholder>
    </div>
  );
};

const StyledTime = styled(Time)`
  &.Time-root {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: var(--secondary-main);

    .Time-time {
      font-size: 4rem;
    }
  }
`;

export default memo(StyledTime);
