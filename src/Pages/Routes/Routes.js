import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Signup from "../../Signup/Signup";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Checkout from '../CheckOut/CheckOut'
import Orders from "../Orders/Orders";
import Service from "../Home/Services/Service";
import PrivateRoute from "./PrivateRoute";
import Blog from "../../Blog";
import Gallary from "../Gallary";
import Team from "../Team";
import LoginMessage from "../LoginMessage";



 const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/checkout/:id',
          element: <Checkout></Checkout>,
          loader: ({params}) => fetch(`https://weadding-ltd-server.vercel.app/services/${params.id}`)
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/service',
          element: <PrivateRoute><Service></Service></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/gallary',
          element: <Gallary></Gallary>
        },
        {
          path: 'team',
          element: <Team></Team>
        },
        {
          path: 'loginmessage',
          element: <LoginMessage></LoginMessage>
        }
      ]
    }
  ])

  export default router;