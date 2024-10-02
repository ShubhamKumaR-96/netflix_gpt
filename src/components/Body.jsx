import Browse from "./Browse";
import ErrorPage from "./ErrorPage"; // import the error page
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />, // attach the error page
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <ErrorPage />, // attach the error page
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
