import Layout from "./routes/layout/layout";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/list/listPage";
import Login from "./routes/login/login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./routes/singlePage/singlePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
