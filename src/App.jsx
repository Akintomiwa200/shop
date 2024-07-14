import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import './App.css'
import CartProvider from './context/CartContext'; // Corrected import

const App = () => {
  return (
    <div>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </div>
  );
};

export default App;
