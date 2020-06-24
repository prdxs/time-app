import moment from 'moment';

const incrementTime = (time: string): string => {
  return moment(time, 'HH:mm:ss').add(1, 's').format('HH:mm:ss');
};

export default incrementTime;
