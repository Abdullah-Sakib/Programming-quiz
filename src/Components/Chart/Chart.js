import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
  const data = useLoaderData();
  console.log(data.data);
  return (
    <div className='w-11/12 md:w-2/4 h-96 mx-auto mt-12'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data.data}>
        <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;