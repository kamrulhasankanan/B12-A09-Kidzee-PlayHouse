import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import { Suspense } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import CardDetails from "./../pages/CardDetails";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../pages/Loading";

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
              <Loading></Loading>
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
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/card-details/:id",
    element: (
      <PrivateRoute>
        <CardDetails></CardDetails>
      </PrivateRoute>
    ),

    loader: () => fetch("/toysData.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/profile",
    element: <h2>My Profile</h2>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>
  },
]);

export default router;
