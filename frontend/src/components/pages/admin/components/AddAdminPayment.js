import React from "react";
import { useState } from "react";
import axios from "axios";

export const AddAdminPayment = ({id,appointmentId,fetch_appointment_data}) => {
  console.log(id)
  const [showModal, setShowModal] = React.useState(false);
  const [formData, setFormData] = useState({
    paymentMethod: "",
    paymentAmount: "",
    paymentRemark: "",
    transactionId: "",
  patient: {
    patientId: id
  },

  });

  function submitrecord(e)
  {
    e.preventDefault();
    console.log(formData);

    axios.post('/api/Payment', formData, {
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
          appointmentupdate(appointmentId)
          
       
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error('Error:', error.message);
        });


  }

  function appointmentupdate(appointmentId)
  {
    axios
    .put(`/api/Appointment/payment/${appointmentId}`, {
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
      console.log(data);
    
      setShowModal(false);
      fetch_appointment_data(appointmentId);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error("Error:", error.message);
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
                            Payment Method
                          </label>
                          <select
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  paymentMethod: e.target.value,
                                })
                              }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           
                            required
                          >
                            <option value="Cash">Cash</option>
                            <option value="Card">Card</option>
                            <option value="Gpay">Gpay</option>
                            </select>
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Payment Amount
                          </label>
                          <input
                            type="number"
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  paymentAmount: e.target.value,
                                })
                              }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          />
                        </div>
                       
                      
                        <div className="col-span-2">
                          <label
                            htmlFor="input5"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Payment Remark
                          </label>
                          <textarea
                            type="text"
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  paymentRemark: e.target.value,
                                })
                              }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          >
                            </textarea>
                        </div>
                        
                        <div className="col-span-2 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Add Payment
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

      className=" mx-2 text-xs bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded">
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
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                          />
                        </svg>
                      </button>

    
    </>
  );
};
