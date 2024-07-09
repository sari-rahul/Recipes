import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";

import Root from './components/Root';
import Dashboard from './components/Dashboard';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/dashboard" element={<Dashboard />} />
      {/* ... etc. */}
    </Route>
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