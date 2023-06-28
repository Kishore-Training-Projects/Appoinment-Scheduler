import React from "react";

import Navbar from "../../layout/navbar/navbar";
import { UserLogin } from "./components/UserLogin";

export const Login = () =>{


    return(
        <>
        <div class="bg-gray-100 flex flex-col h-screen">
       <Navbar/>

  <div class="flex-grow flex items-center justify-center sm:justify-start">
    <div class="container mx-auto flex flex-col md:flex-row justify-center items-center">
      <div class="w-full md:w-2/3 xl:w-1/2">
        <img class="hospital-image h-64 md:h-auto  md:rounded-lg md:p-8 md:mr-10 hidden md:block" src="https://www.pngall.com/wp-content/uploads/8/Hospital-PNG-Picture.png">
        </img>
      </div>
      <div class="w-full md:w-1/3 xl:w-1/2 flex items-center justify-center mt-6 md:mt-0">
        <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md border-2 border-gray-400 w-full max-w-md">
            <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800 ">Login To Your Account</div>
            <div class="flex flex-row mt-5">
                <button class="relative w-full mr-2 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                  <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500 "><i class="fas fa-user-md"></i></span>
                  <span>Doctor Login</span>
                </button>
                
                <button class="relative w-full border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                  <span class="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i class="fas fa-user"></i></span>
                  <span>User Login</span>
                </button>
              </div>
              
            <div class="relative mt-8 h-px bg-gray-300">
              <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
              </div>
            </div>
           {/* login form components */}
           <UserLogin/>
          </div>
      </div>
    </div>
  </div>
        </div>
        </>
    );
}