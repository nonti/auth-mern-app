import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Username from './components/Username';
import Password from './components/Password';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import NotFound from './components/NotFound';

//root router
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Root router</div>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/username",    
    element: <Username/>
  },
  {
    path: "/password",
    element: <Password/>
  },
  {
    path: "/reset",
    element: <Reset/>
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/recover",
    element: <Recovery/>
  },
  {
    path: "/*",
    element: <NotFound/>
  },
])
const App = () => {
  return (
    <main>
    <RouterProvider router={router} >
      
    </RouterProvider >
    </main>
  )
}

export default App