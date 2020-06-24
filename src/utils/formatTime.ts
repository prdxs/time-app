import moment from 'moment';

const formatTime = (epoch: string): string => {
  return moment(epoch).format('HH:mm:ss');
};

export default formatTime;
