import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";

import Root from './pages/Root';
import Dashboard from './pages/Dashboard';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Error';
import About from './pages/About';
import SavedRecipes from './pages/SavedRecipes';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route exact path="/" element={<Root />} />
    <Route exact path="/dashboard" element={<Dashboard />}/>
    <Route exact path="/about" element={<About />}/>
    <Route exact path="/savedrecipes" element={<SavedRecipes />}/>
    <Route path="/singlerecipe/:id" element={<SingleRecipe />}/>
    <Route  path='*' element={<Default />}/>
    </>  
  )
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App; 