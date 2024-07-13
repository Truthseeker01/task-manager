import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {

  return (
    <div className='container'>
      <h1 className='text-center'>PTM</h1>
      <Outlet />
    </div>
  )
}

export default App;
