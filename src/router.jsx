import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import Product from './pages/Product'
import ProductDescription from './pages/ProductDescription'
import Error404 from './pages/Error404'



const router = createBrowserRouter([
    {
        index: true,
        element: <Home />,

    },
    {
        path: '/cart',
        element: <CartPage />,
    },
    {
        path: '/checkout',
        element: <Checkout />,
    },
    {
        path: '/product',
        element: <Product />
    },
    {
        path: '/productdescribe',
        element: <ProductDescription />
    },
    {
        path: '/*',
        element: <Error404 />,
    }


]);
export default router
