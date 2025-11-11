import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { Suspense } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import CardDetails from "../pages/CardDetails";


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
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path: "/auth/login",
            element: <Login></Login>
        },
        {
            path: "/auth/register",
            element: <Register></Register>
        },
        {
        path: "/auth/cardDetails",
        element: <CardDetails></CardDetails>,
      }
    ]
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
