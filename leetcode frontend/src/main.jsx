import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import Problems from "./pages/Problems.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/Login.jsx";
import IndProblem from "./pages/IndProblem.jsx";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path:"/",
//         element:<Home />
//       },
//       {
//         path: "/explore",
//         element: <Explore />,
//       },
//       {
//         path: "/problems",
//         element: <Problems />,
//         children: [
//           {
//             path: "problems/:pid",
//             element: <IndProblem />,
//           },
//         ],
//       },
//       {
//         path: "/signup",
//         element: <Signup />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={appRouter}> */}
    <App />
    {/* </RouterProvider> */}
  </React.StrictMode>
);
