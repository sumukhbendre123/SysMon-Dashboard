// ChartComponent.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ChartComponent({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current && data) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line', // Change this according to your graph type
        data: {
          labels: data[0].values.map((item) => new Date(item.timestamp).toLocaleTimeString()), // Assuming timestamps are in milliseconds
          datasets: data.map((line) => ({
            label: line.name,
            data: line.values.map((item) => item.value),
            borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`, // Random color for each line
            fill: false,
          })),
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time',
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
              },
            },
            y: {
              title: {
                display: true,
                text: 'Value',
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
}

export default ChartComponent;
