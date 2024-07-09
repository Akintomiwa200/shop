import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Checkout from './components/checkout/Checkout'


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
        element: <Checkout />
    },
    

]);
export default router
