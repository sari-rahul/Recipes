import React from 'react';
import NavBar from '../components/navbar/NavBar.js';
import ImageBand from '../components/image-band/ImageBand.js';

const Dashboard = () => {
  return (
    <>
     <ImageBand/> 
     <NavBar/>
     <div className="mx-0 px-0 w-full">

      Dashboard
    </div>
    </>
  )
}

export default Dashboard

