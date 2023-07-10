import React, { useState } from "react";

import Navbar from "../../layout/navbar/navbar";
import { UserLogin } from "./components/UserLogin";
import { useNavigate } from "react-router-dom";

import { DoctorLogin } from "./components/DoctorLogin";
import banner from '../../images/banner.png'

export const Login = () => {
  const [logintype, setLogintype] = useState(true);
  const navigate = useNavigate();
  
  return (
    <>

      <div className="bg-gray-100 flex flex-col h-screen">
        <Navbar />

        <div className="flex-grow flex items-center justify-center sm:justify-start">
          <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-2/3 xl:w-1/2">
              <img
                className="hospital-image h-64 md:h-auto  md:rounded-lg md:p-8 md:mr-10 hidden md:block"
                src={banner}
              ></img>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/2 flex items-center justify-center mt-6 md:mt-0">
              <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md border-2 border-gray-400 w-full max-w-md">
                <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800 ">
                  Login To Your Account
                </div>
                <div className="flex flex-row mt-5">
                  {!logintype && (
                    <button
                      className="mr-2 relative w-full border rounded-md py-2 text-sm text-gray-800 bg-gray-200 hover:bg-gray-300"
                      onClick={() => setLogintype(true)}
                    >
                      <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
                        <i className="fas fa-user"></i>
                      </span>
                      <span>User Login</span>
                    </button>
                  )}
                  {logintype && (
                    <button className="mr-2 relative w-full border rounded-md py-2 text-sm font-bold text-white bg-blue-500">
                      <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-white">
                        <i className="fas fa-user"></i>
                      </span>
                      <span>User Login</span>
                    </button>
                  )}

                  {logintype && (
                    <button
                      className=" relative w-full  border rounded-md py-2 text-sm text-gray-800 bg-gray-200 hover:bg-gray-300"
                      onClick={() => setLogintype(false)}
                    >
                      <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500 ">
                        <i className="fas fa-user-md"></i>
                      </span>
                      <span>Doctor Login</span>
                    </button>
                  )}

                  {!logintype && (
                    <button
                      className=" relative w-full  border rounded-md py-2 text-sm font-bold text-white bg-blue-500"
                    >
                      <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-white ">
                        <i className="fas fa-user-md"></i>
                      </span>
                      <span>Doctor Login</span>
                    </button>
                  )}
                </div>
                <div className="relative mt-8 h-px bg-gray-300">
                  <div className="absolute left-0 top-0 flex justify-center w-full -mt-2"></div>
                </div>
                {/* login form components */}

                {logintype ? (
                  <>
                    <UserLogin />
                  </>
                ) : (
                  <>
                    <DoctorLogin />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
