import React, { useEffect, useState } from 'react';

import { IMetricsProps } from './Metrics.typings';
import Metrics from './Metrics.component';
import { getMetrics } from 'src/api';

const MetricsContainer: React.FC<Omit<IMetricsProps, 'loading'>> = (props) => {
  const [loading, setLoading] = useState(false);
  const [metricsText, setMetricsText] = useState('');

  useEffect(() => {
    const fetchMetrics = async () => {
      setLoading(true);

      try {
        const { data } = await getMetrics();

        setMetricsText(data);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();

    const handle = setInterval(() => fetchMetrics(), 30000);

    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <Metrics loading={loading} {...props}>
      {metricsText}
    </Metrics>
  );
};

export default MetricsContainer;
