import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Home from './components/Home'
import CompletedTasks from './components/CompletedTasks'
import LateTasks from './components/LateTasks'
import Analysis from './components/Analysis'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = [{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: 'CompletedTasks',
      element: <CompletedTasks />
    },
    {
      path: 'LateTasks',
      element: <LateTasks />
    },
    {
      path: 'Analysis',
      element: <Analysis />
    },
  ]
}]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
