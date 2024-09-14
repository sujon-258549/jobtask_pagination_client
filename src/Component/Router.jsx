import { createBrowserRouter } from "react-router-dom";
import Main from "./main";
import Home from "./Home";
import Signup from "./Signup";
import SignIn from "./SignIn";
import Contact from "./Contact";
import MainHome from "./MainHome/MainHome";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <MainHome></MainHome>
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('https://jobtask-servire.vercel.app/productCount')
      },
      {
        path: 'singup',
        element: <Signup></Signup>
      },
      {
        path: 'singin',
        element: <SignIn></SignIn>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
])


export default router