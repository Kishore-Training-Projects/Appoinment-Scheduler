import React from "react";
import { useState } from "react";
import axios from "axios";

export const AddAdminMedicalrecord = (id) => {
  const [showModal, setShowModal] = React.useState(false);
  const [formData, setFormData] = useState({
  height: 0,
  weight: 0,
  pressure: 0,
  temperature: 0,
  medicalRecordRemark: "",
  attenderName: "",
  appointment: {
    appointmentId: id.id
  },

  });

  function submitrecord(e)
  {
    e.preventDefault();
    console.log(formData);

    axios.post('/api/MedicalRecord', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (!response.ok) {
            if (response.status === 404) {
              throw new Error('Resource not found');
            }
            if (response.status === 201) {
              return response.data;
            }
            else {
              throw new Error('Network response was not ok');
            }
          }
          return response.data;
        })
        .then((data) => {
          // Handle the response from the server
          console.log(data);
          alert('Record Inserted Done');
         setShowModal(false)
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error('Error:', error.message);
        });


  }

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
                    Add Medical Records
                  </h3>
                  <div>
                    <div className="p-3">
                      <form onSubmit={(e)=>submitrecord(e)} className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Height
                          </label>
                          <input
                            type="text"
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  height: e.target.value,
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
                            Weight
                          </label>
                          <input
                            type="text"
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  weight: e.target.value,
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
                            Pressure
                          </label>
                          <input
                            type="text"
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  pressure: e.target.value,
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
                            Temperature
                          </label>
                          <input
                            type="text"
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  temperature: e.target.value,
                                })
                              }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          />
                        </div>
                        <div >
                          <label
                            htmlFor="input5"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Remark
                          </label>
                          <textarea
                            type="text"
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  medicalRecordRemark: e.target.value,
                                })
                              }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          >
                            </textarea>
                        </div>
                        <div>
                          <label
                            htmlFor="input4"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Attender Name
                          </label>
                          <input
                            type="text"
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  attenderName: e.target.value,
                                })
                              }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          />
                        </div>
                        <div className="col-span-2 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Add record
                          </button>
                          <button
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
        className="text-xs bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded"
        data-tooltip-target="tooltip-default"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
          />
        </svg>
      </button>
    </>
  );
};
