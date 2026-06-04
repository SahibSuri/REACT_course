import React from 'react'
import Navbar from './components/Navbar'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/' ,
      element: <> <Navbar /> <Home /> </>
    },
    {
      path: '/login',
      element: <> <Navbar /> <Login /> </>
    },
    {
      path: '/about',
      element: <> <Navbar /> <About /> </>
    },
    {
      path: '/user/:username',
      element: <> <Navbar /> <User /> </>
    }
  ])
  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App


// when we click on different things of navbar the page reloads again and again.
// So , to find a solution regarding this we use React router
// npm i react-router-dom