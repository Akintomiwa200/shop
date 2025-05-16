import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Product from "./pages/Product";
import ProductDescription from "./pages/ProductDescription";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Payment from "./pages/dashboard/payment/Payment";
import ProductM from "./pages/dashboard/product/Product";
import Users from "./pages/dashboard/users/Users";
import Settings from "./pages/dashboard/settings/Settings";
import OrderSuccess from "./pages/OrderSuccess";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/start",
    element: <Start />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/productdescribe",
    element: <ProductDescription />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Signup />,
  },
  {
    path: "/*",
    element: <Error404 />,
  },
  {
    path: "/auth/login",
    element: <AdminLogin />
  },
  {
    path: "/auth/register",
    element: <AdminSignup />
  },

  {
    path: "/admin/dashboard",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/admin/dashboard/payment",
        element: <Payment />
      },
      {
        path: "/admin/dashboard/products",
        element: <ProductM />
      },
      {
        path: "/admin/dashboard/users",
        element:<Users/>
      },
      {
        path: "/admin/dashboard/settings",
        element: <Settings/>
      }
    ]
  },
  {
    path: "/order-success",
    element: <OrderSuccess />
  }
  // {
  //   path
  // }
]);
export default router;