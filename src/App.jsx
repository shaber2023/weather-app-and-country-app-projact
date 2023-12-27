import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Router } from './router/Router'
import { Home } from './page/Home'
import { About } from './page/About'
import Country from './page/Country'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Router/>,
      children:[
        {
          path:'',
          element:<Home/>
        },{
          path:'/about',
          element:<About/>
        },{
          path:'/country',
          element:<Country/>
        }
      ]
    }
  ])
  return (
    <div>
     <RouterProvider router={router}/>  
    </div>
  )
}

export default App