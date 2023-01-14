import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Router';

function App() {
  return (
    <div className="w-3/4 mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
