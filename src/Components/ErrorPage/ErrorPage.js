import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='mt-40'>
      <div>
        <h1 className='text-5xl text-red-500 font-semibold mb-4'>Oops</h1>
        <h3 className='text-3xl font-semibold mb-5'>Page Not Found - <span className='text-red-500 '>404</span></h3>
        <Link to='/'><button className='px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Back Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;