import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Topics from './components/Topics/Topics';
import NotFound from './components/NotFound/NotFound';
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: "/home",
          loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: "/topics",
          loader: () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound></NotFound>
    }
  ])
  return (
    <div className="m-10">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
