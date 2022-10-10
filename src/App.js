import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Root from './Layout/Root';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Root></Root>, children:[
      {path:'/', element:<Home></Home>, loader:async()=> fetch(' https://openapi.programming-hero.com/api/quiz')},
    ]}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
