import React, { useState } from "react";
import firebase from "../../config/firebase-config";
import Navbar from "../../layout/navbar/navbar";
import { MobileAuth } from "./components/MobileAuth";
import axios from "axios";
import {  toast } from "react-toastify";
import { Backend_Url } from "../../config/connection";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const Register = () => {
  const navigate = useNavigate();

  const [otpverify, setOtpverify] = useState(false);

  const [formData, setFormData] = useState({
    patientName: "",
    patientGender: "",
    patientDOB: "",
    patientAge: 0,
    patientBloodGroup: "",
    patientMobile: "",
    patientEmail: "",
    patientAddress: "",
    patientAccountStatus: true,
  });

  function submitpatient() {
    console.log(formData);

    fetch(Backend_Url+"/api/Patient", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/JSON",
      },
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Resource not found");
          } else {
            throw new Error("Network response was not ok");
          }
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response from the server
       // console.log(data);
        toast.success('User Registered !!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
  
  
        setTimeout(() => {
          navigate("/login");
        }, 3000);
  
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error.message);
      });
  }

  function getmobile(value) {
    setFormData({
      ...formData,
      patientMobile: value,
    });

    console.log(formData);
    setOtpverify(true);
  }

  return (
    <>
      <div className="bg-gray-100 flex flex-col max-h-screen">
        <Navbar />

        <div className="mt-10 overflow-y-auto h-screen">
          <section className="bg-red dark:bg-gray-900 font">
            <div className="flex flex-col items-center justify-center py-10 pb-2"></div>
            <div className="py-4 px-2 pb-6 md:py-0 md:pb-6 md:px-2 mx-auto max-w-4xl lg:py-18">
              <div className="shadow-2xl border-2 border-gray-400  rounded px-5 py-1 bg-white">
                <h2 className="mb-7 mt-5 text-2xl text-center font-bold text-gray-900 dark:text-white">
                  Welcome Patient 🏥
                </h2>
                <div>
                  <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="patientName"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Full Name"
                        required=""
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="patientDOB"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Date of Birth"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Gender
                      </label>
                      <select
                        id="category"
                        name="patientGender"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option>select</option>

                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        name="patientAge"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Age"
                        required=""
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Blood Group
                      </label>
                      <input
                        type="text"
                        name="patientBloodGroup"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=" Blood Group"
                        required=""
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="patientEmail"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Mobile Number
                      </label>

                      <MobileAuth getmobile={getmobile} />
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Address
                      </label>
                      <textarea
                        id="description"
                        rows="5"
                        name="patientAddress"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Address"
                      ></textarea>
                    </div>
                  </div>
                  <div className="pt-5 pb-3">
                    <button
                      type="submit"
                      disabled={!otpverify}
                      onClick={() => submitpatient()}
                      className={`w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                        otpverify ? "" : "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
