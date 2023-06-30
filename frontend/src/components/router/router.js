import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import App from '../../App'

import { Login } from "../pages/login/Login";
import { Register } from "../pages/login/Register";


// user routers
import { UserDashboard } from "../pages/User/UserDashboard";
import { AddUserAppointment } from "../pages/User/AddUserAppointment";

// doctor routers
import { DoctorDashboard } from "../pages/doctor/DoctorDashboard";



// admin routers
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


    //login routes


    {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      // user routes

      {
        path: "/user/dashboard",
        element: <UserDashboard />,
      },
      {
        path: "/user/appointment/new",
        element: <AddUserAppointment />,
      },





      // doctor routes
      {
        path: "/doctor/dashboard",
        element: <DoctorDashboard />,
      },



      // admin routes
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
  
  ];
  
  export default Router;
  