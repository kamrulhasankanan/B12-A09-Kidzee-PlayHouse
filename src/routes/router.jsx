import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>
  },
  {
    path: "/auth",
    element: <h2>Authentication</h2>
  },
  {
    path: "/profile",
    element: <h2>My Profile</h2>
  },
  {
    path:"/*",
    element: <h2>Error 404 Error</h2>
  }
]);

export default router;
