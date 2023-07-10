import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {  toast } from "react-toastify";
import { Backend_Url } from "../../../config/connection";

export const EditAdminPatient = ({ id , fetch_doctor_data}) => {
  const [showModal, setShowModal] = React.useState(false);

  function submitrecord(e) {
    e.preventDefault();
    console.log(patientdata);

    axios
      .put(`${Backend_Url}/api/Patient/${id}`, patientdata, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.ok) {
          if (response.status === 404) {
            throw new Error("Resource not found");
          }
          if (response.status === 201) {
            return response.data;
          } else {
            throw new Error("Network response was not ok");
          }
        }
        return response.data;
      })
      .then((data) => {
        // Handle the response from the server
        setShowModal(false);
        toast.success('Updated patient details', {
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
            fetch_doctor_data();
          }, 3000);
    
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error.message);
      });
  }

  const [patientdata, setPatientdata] = useState();

  const fetch_doctors_data = async (id) => {
    try {
      const response = await axios.get(`${Backend_Url}/api/Patient/${id}`);
      setPatientdata(response.data);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          console.log("Resource not found");
        } else {
          console.log("Network response was not ok");
        }
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  useEffect(() => {
    fetch_doctors_data(id);
  }, []);

  return (
    <>
      {/* select doctor modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full max-w-xl max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="pt-4 py-3 lg:px-5">
                  <h3 className="pb-2 px-3 text-xl font-medium border-b text-gray-900 dark:text-white">
                   Edit Patient Details
                  </h3>
                  <div>
                    <div className="p-3">
                      <form
                        onSubmit={(e) => submitrecord(e)}
                        className=" grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Patient Name
                          </label>
                          <input
                            type="text"
                            value={patientdata.patientName}
                            onChange={(e) =>
                              setPatientdata({
                                ...patientdata,
                                patientName: e.target.value,
                              })
                            }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                           Patient Age
                          </label>
                          <input
                            type="text"
                            value={patientdata.patientAge}

                            onChange={(e) =>
                              setPatientdata({
                                ...patientdata,
                                patientAge: e.target.value,
                              })
                            }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="repeat-password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Patient Number
                          </label>
                          <input
                            type="number"
                            value={patientdata.patientMobile}

                            onChange={(e) =>
                              setPatientdata({
                                ...patientdata,
                                patientMobile: e.target.value,
                              })
                            }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="input4"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Patient Blood Group
                          </label>
                          <input
                            type="text"
                            value={patientdata.patientBloodGroup}

                            onChange={(e) =>
                              setPatientdata({
                                ...patientdata,
                                patientBloodGroup: e.target.value,
                              })
                            }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="input5"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Patient Email
                          </label>
                          <input
                            type="text"
                            value={patientdata.patientEmail}
                            onChange={(e) =>
                              setPatientdata({
                                ...patientdata,
                                patientEmail: e.target.value,
                              })
                            }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="input4"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Patient Gender
                          </label>
                          <select
                            onChange={(e) =>
                              setPatientdata({
                                ...patientdata,
                                patientGender: e.target.value,
                              })
                            }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>

                        <div className="col-span-2">
                          <label
                            htmlFor="input4"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Patient Address
                          </label>
                          <textarea
                            value={patientdata.patientAddress
                            }
                            onChange={(e) =>
                              setPatientdata({
                                ...patientdata,
                                patientAddress
: e.target.value,
                              })
                            }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          ></textarea>
                        </div>

                        <div className="col-span-2 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Update
                          </button>
                          <button
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setShowModal(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* end of select doctor modal */}

      {/* button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Edit
      </button>
    </>
  );
};
