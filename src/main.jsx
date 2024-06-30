import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/home/Home.jsx'
import './index.css'

import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";

import Gallery from './routes/gallery/Gallery.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
