import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import App from '../../App'

import { Login } from "../pages/login/Login";
import { Register } from "../pages/login/Register";



import { UserDashboard } from "../pages/User/UserDashboard";



import { DoctorDashboard } from "../pages/doctor/DoctorDashboard";


import { AdminDashboard } from "../pages/admin/AdminDashboard";

function Router() {
    return (
      <BrowserRouter>
        <Routes>
          {routerList.map((route, i) => (
            <Route exact key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    );
  }

  const routerList = [
    {
      path: "/",
      element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/user/dashboard",
        element: <UserDashboard />,
      },

      {
        path: "/doctor/dashboard",
        element: <DoctorDashboard />,
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
  
  ];
  
  export default Router;
  