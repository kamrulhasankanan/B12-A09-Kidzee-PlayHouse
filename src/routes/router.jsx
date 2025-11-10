import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: (
          <Suspense
            fallback={
              <span className="loading loading-spinner text-warning"></span>
            }
          >
            <Home></Home>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication</h2>,
  },
  {
    path: "/profile",
    element: <h2>My Profile</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404 Error</h2>,
  },
]);

export default router;
