import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home.jsx";
import Profile from "./profile.jsx";
import Profile2 from "./profile2.jsx";
import Finalpage from "./finalpage.jsx";
import ChangeEmail from "./changeEmail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile2",
        element: <Profile2 />,
      },
      {
        path: "/verify",
        element: <Finalpage />,
      },
      {
        path: "/change",
        element: <ChangeEmail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
