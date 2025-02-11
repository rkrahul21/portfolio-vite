import React from 'react'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import Home  from './componenets/Home'
import About from './componenets/About'
import Contact from './componenets/Contact'
import Projects from './componenets/Projects'


const router = createBrowserRouter(
  createRoutesFromElements(

    // Wrap all routes inside a parent <Route>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

