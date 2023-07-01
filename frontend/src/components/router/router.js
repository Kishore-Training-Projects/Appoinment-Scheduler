import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import App from '../../App'

import { Login } from "../pages/login/Login";
import { Register } from "../pages/login/Register";


// user routers
import { UserDashboard } from "../pages/User/UserDashboard";
import { AddUserAppointment } from "../pages/User/AddUserAppointment";
import { UserAppointment } from "../pages/User/UserAppointment";
import { UserMedicalRecords } from "../pages/User/UserMedicalRecords";
import { UserPrescription } from "../pages/User/UserPrescription";
import { UserDoctor } from "../pages/User/UserDoctor";
import { UserPayment } from "../pages/User/UserPayment";
import { UserProfile } from "../pages/User/UserProfile";

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
        path: "/user/appointment",
        element: <UserAppointment />,
      },
      {
        path: "/user/appointment/new",
        element: <AddUserAppointment />,
      },
      {
        path: "/user/medicalrecords",
        element: <UserMedicalRecords />,
      },
      {
        path: "/user/prescription",
        element: <UserPrescription />,
      },
      {
        path: "/user/doctors",
        element: <UserDoctor />,
      },
      {
        path: "/user/payments",
        element: <UserPayment />,
      },
      {
        path: "/user/profile",
        element: <UserProfile />,
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
  