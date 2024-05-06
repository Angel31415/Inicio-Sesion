import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/layouts/auth/Login"
import Home from "./components/layouts/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;