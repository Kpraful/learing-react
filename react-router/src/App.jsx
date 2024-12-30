import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const router = createBrowserRouter([
    {
      "path": "/",
      "element": <>
        <Navbar />
        <Home />
      </>
    },
    {
      "path": "/about",
      "element": <>
        <Navbar />
      <About />
      </>
    },
    {
      "path": "/services",
      "element": <>
      <Navbar />
      <Services />
      </>
    },
    {
      "path": "/contact",
      "element": <>
      <Navbar />
      <Contact />
      </>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
