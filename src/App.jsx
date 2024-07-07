import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import './App.css'


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

