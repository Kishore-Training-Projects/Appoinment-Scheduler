import { React, useState } from "react";
import axios from "axios";

import {  toast } from "react-toastify";
import { Backend_Url } from "../../../config/connection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteDoctorLeave = ({ id ,fetch_doctorLeave_data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = () => {
    axios.delete(Backend_Url+'/api/DoctorLeave/'+id)
      .then(response => {
        // Handle successful response
       
        
        toggleModal();


        toast.success('Leave Delete Successfully ✔', {
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
            fetch_doctorLeave_data();
          }, 3000);
    
      })
      .catch(error => {
        if (error.response) {
            if (error.response.status === 204) {
              toast.success('Leave Delete Successfully ✔', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            } else {
              console.log("Network response was not ok");
            }
          }
          else {
            console.error("Error:", error.message);
          }
      });
  };

  return (
    <>
    <ToastContainer/>

      <button
        onClick={toggleModal}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
      >
        Delete
      </button>

      {isModalOpen && (
        <div>
               <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            onClick={toggleModal}
          />
 
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed inset-0 flex items-center justify-center z-50 px-4 overflow-x-hidden overflow-y-auto"
          >
          {/* Modal content */}
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Close button */}
              <button
                type="button"
                onClick={toggleModal}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              {/* Modal content */}
              <div className="p-6 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this Leave?
                </h3>
                <button
                  onClick={()=>handleDelete()}
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  data-modal-hide="popup-modal"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={toggleModal}
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default DeleteDoctorLeave;
