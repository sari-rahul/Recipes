import React from 'react';
import NavBar from '../components/NavBar.js';
import ImageBand from '../components/ImageBand.js';
import RecipeList from '../components/RecipeList.js';
import Search from '../components/Search.js';

const Dashboard = () => {
  return (
    <>
     <ImageBand/> 
     <NavBar/>
     <div className="mx-0 px-0 w-full">
     <Search/>
     <RecipeList/>
    </div>
    </>
  )
}

export default Dashboard

