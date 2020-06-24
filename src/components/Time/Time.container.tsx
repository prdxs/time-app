import React, { useEffect, useState } from 'react';

import { ITimeProps } from './Time.typings';
import Time from './Time.component';
import { getTime } from 'src/api';
import { formatTime, incrementTime } from 'src/utils';

const TimeContainer: React.FC<Omit<ITimeProps, 'loading' | 'time'>> = (
  props
) => {
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const fetchTime = async () => {
      setLoading(true);

      try {
        const { data } = await getTime();
        const { epoch } = data.data;

        setTime(formatTime(epoch));
      } finally {
        setLoading(false);
      }
    };

    fetchTime();
  }, []);

  useEffect(() => {
    if (!loading) {
      const handle = setInterval(() => {
        setTime(incrementTime(time));
      }, 1000);

      return () => {
        clearInterval(handle);
      };
    }
  }, [loading, time]);

  return <Time loading={loading} time={time} {...props} />;
};

export default TimeContainer;
