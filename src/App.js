import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './Layout/Root';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Root></Root>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
