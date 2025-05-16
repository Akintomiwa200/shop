
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import router from './router.jsx';
import './App.css';
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import CartProvider from './context/CartContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <ThemeProvider>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
