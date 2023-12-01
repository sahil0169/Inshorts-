import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import App from './App.jsx'
import Error from "./Error"
import './index.css'
import Layout from './Layout.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<Error />}/>
  
))

function App1() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App1 />);