import React, { useEffect, useState } from 'react';

import { ITimeProps } from './Time.typings';
import Time from './Time.component';
import { getTime } from 'src/api';
import { incrementTime } from 'src/utils';

const TimeContainer: React.FC<Omit<
  ITimeProps,
  'loading' | 'pastTime' | 'serverTime'
>> = (props) => {
  const [loading, setLoading] = useState(false);
  const [lastServerTime, setLastServerTime] = useState(0);
  const [pastTime, setPastTime] = useState('00:00:00');

  useEffect(() => {
    const fetchTime = async () => {
      setLoading(true);

      try {
        const { data } = await getTime();
        const { epoch } = data.data;

        setLastServerTime(epoch);
        setPastTime('00:00:00');
      } finally {
        setLoading(false);
      }
    };

    fetchTime();

    const handle = setInterval(() => fetchTime(), 30000);

    return () => {
      clearInterval(handle);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      const handle = setInterval(() => {
        setPastTime(incrementTime(pastTime));
      }, 1000);

      return () => {
        clearInterval(handle);
      };
    }
  }, [lastServerTime, loading, pastTime]);

  return (
    <Time
      loading={loading}
      serverTime={lastServerTime}
      pastTime={pastTime}
      {...props}
    />
  );
};

export default TimeContainer;
