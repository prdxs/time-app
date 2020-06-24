import React from 'react';

export interface IComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface IAppProps extends IComponentProps {}
