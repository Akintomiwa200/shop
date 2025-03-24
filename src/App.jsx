import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import './App.css'
import { UserProvider } from "./context/UserContext";
import CartProvider from './context/CartContext'; // Corrected import

const App = () => {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UserProvider>
    </div>
  );
};

export default App;
