import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Sidenav from './components/sidenav'
import Main from './pages/Main'
import Work from './pages/Work'
import Projects from './pages/Projects'
import ProjectGallery from './pages/ProjectGallery';

function App() {

  return (
    <>
    <main className="app-container">
      <Sidenav />
      <Outlet />
      </main>
    </>
  )
}

export default App


