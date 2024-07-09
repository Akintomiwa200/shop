import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product'
import CartPage from './pages/CartPage'
import Checkout from './components/checkout/Checkout'


const router = createBrowserRouter([
    {
        index: true,
        element: <Home />,

    },
    {
        path: '/products',
        element: <Product />,
    },
    {
        path: '/cart',
        element: <CartPage />,
    },
    {
        path: '/product',
        element: <Product />
    },
    {
        path: '/checkout',
        element: <Checkout />
    },




]);
export default router
