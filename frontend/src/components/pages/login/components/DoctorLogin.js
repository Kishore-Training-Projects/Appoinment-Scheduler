import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const DoctorLogin = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

      // tokendata
      const userprofile = {
        userid: "",
        name: "",
        profile: "",
        email :"",
        status:"",
        acc_type: "",
      };

  function submitlogin(e) {
    e.preventDefault();

    axios.post('/api/User/login', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
      if (response.status === 204) {
        alert("Invalid Login")
        throw new Error('invalid login');
      } else if (response.status === 404) {
        throw new Error('Resource not found');
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then((data) => {
      // Handle the response from the server
      if(data.userRole=="admin")
      {
        console.log(data);
        userprofile.userid = data.userId;
        userprofile.email = data.userEmail;  
        userprofile.acc_type = "admin";
        
        sessionStorage.setItem("admin_key", JSON.stringify(userprofile));
        navigate("/admin/dashboard");

      }
      else
      {

        userprofile.userid = data.doctor["doctorId"];
        userprofile.name = data.doctor["doctorName"];
        userprofile.email = data.doctor["doctorEmail"];
        userprofile.status = data.doctor["doctorStatus"];
  
        userprofile.acc_type = "doctor";
        
        sessionStorage.setItem("doctor_key", JSON.stringify(userprofile));
        navigate("/doctor/dashboard");
      }

    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error.message);
    });
  }

  return (
    <>
      <div class="mt-7">
        <form class="space-y-4 md:space-y-6" onSubmit={(e) => submitlogin(e)}>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  userEmail: e.target.value,
                })
              }
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  userPassword: e.target.value,
                })
              }
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>

          <button
            type="submit"
            class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in
          </button>
        </form>
      </div>
      <div class="flex justify-center items-center mt-6">
        <a
          onClick={()=>navigate("/register")}
          target="_blank"
          class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
        >
          <span>
            <svg
              class="h-6 w-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </span>
          <span class="ml-2">You don't have an account?</span>
        </a>
      </div>
    </>
  );
};
