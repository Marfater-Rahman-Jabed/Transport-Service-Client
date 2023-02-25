import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Router';

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <Toaster />
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
