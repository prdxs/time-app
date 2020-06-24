import { IComponentProps } from 'src/App.typings';

export interface ITimeProps extends IComponentProps {
  loading: boolean;
  time: string;
}
