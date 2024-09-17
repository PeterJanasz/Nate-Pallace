// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './pages/Main.jsx';
import ProjectGallery from './pages/ProjectGallery.jsx';
import Projects from './pages/Projects.jsx';
import Work from './pages/Work.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />, // Note: Error component is commented out and not imported
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/project-gallery', // Updated the path
        element: <ProjectGallery />,
        children: [
          {
            path: ':projectId', // Updated the path for dynamic projectId
            element: <ProjectGallery />,
          },
        ],
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Work',
        element: <Work />,
      },
    ],
  },
]);

// Rendering the application with the router provider
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
