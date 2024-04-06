import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MimicMetrics } from '../utility/utils';
import ChartComponent from './ChartComponent';

function Metrics() {
  const location = useLocation();
  const [metricsData, setMetricsData] = useState(null);

  useEffect(() => {
    const fetchMetricsData = async () => {
      try {
        const startTs = new Date().getTime() - 3600000;
        const endTs = new Date().getTime();
        const data = await MimicMetrics.fetchMetrics({ startTs, endTs });
        setMetricsData(data);
      } catch (error) {
        console.error('Error fetching metrics data:', error);
      }
    };

    fetchMetricsData();

    return () => {
    };
  }, [location]);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold mb-4">Metrics</h2>
      {metricsData ? (
        <div className="grid grid-cols-2 gap-4">
          {metricsData.map((graph, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{graph.name}</h3>
              <div>
                <ChartComponent data={graph.graphLines} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading metrics...</p>
      )}
    </div>
  );
}

export default Metrics;
