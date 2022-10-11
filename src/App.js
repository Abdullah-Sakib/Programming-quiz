import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Root from './Layout/Root';

function App() {
  const router = createBrowserRouter([
    {path:'/', element: <Root></Root>, children:[
      {path:'/', element:<Home></Home>, loader:async()=> fetch(' https://openapi.programming-hero.com/api/quiz')},
      {path:'quiz/:id', loader: async({params}) => fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`) ,element: <Quiz></Quiz>}
    ]},
    {path:'*', element:<ErrorPage></ErrorPage>}
  ])
  return (
    <div className="App">
      <ToastContainer/>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
