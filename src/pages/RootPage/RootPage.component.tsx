import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components/macro';

import { IRootPageProps } from './RootPage.typings';

const RootPage: React.FC<IRootPageProps> = ({ className }) => (
  <div className={clsx('', className)}>
    <h1>Root page</h1>
  </div>
);

const StyledRootPage = styled(RootPage)``;

export default StyledRootPage;
