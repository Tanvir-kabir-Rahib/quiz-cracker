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
import { quizLoader } from './loaders/quizLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: quizLoader,
          element: <Home></Home>
        },
        {
          path: "/home",
          loader: quizLoader,
          element: <Home></Home>
        },
        {
          path: "/topics",
          loader: quizLoader,
          element: <Topics></Topics>
        },
        {
          path: "/statistics",
          loader: quizLoader,
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
