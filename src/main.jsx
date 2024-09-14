import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Component/Router.jsx'
import Authprovider from './Component/Firebase/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <div className='max-w-[1280px] mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Authprovider>
  </StrictMode>,
)
