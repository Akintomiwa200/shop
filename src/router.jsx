import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product'


const router = createBrowserRouter([
    {
        index: true,
        element: <Home />,

    },
    {
        path: '/products',
        element: <Product />,
    },



]);
export default router
