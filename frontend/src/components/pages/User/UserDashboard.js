import React from "react";

import { UserSidebar } from "../../layout/sidebar/usersidebar";
export const UserDashboard = () => {
  return (
    <>
      <UserSidebar />

      <div class="p-2 md:p-4 min-h-screen bg-gray-200 sm:ml-64">
        <div class=" p-2 md:p-4 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center rounded-lg bg-white dark:bg-gray-800">
              <div class="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <svg
                  viewBox="0 0 640 512"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  class="w-11 h-11 text-gray-500 dark:text-gray-400 mb-3"
                >
                  <path d="M296 96c0-8.84 7.2-16 16-16h16c8.8 0 16 7.16 16 16v24h24c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-24v24c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-24h-24c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h24V96zM408 0c39.8 0 72 32.24 72 72v8h88c39.8 0 72 32.2 72 72v288c0 39.8-32.2 72-72 72H71.98C32.19 512 0 479.8 0 440V152c0-39.8 32.24-72 72-72h88v-8c0-39.76 32.2-72 72-72h176zm72 128v336h88c13.3 0 24-10.7 24-24V336h-56c-13.3 0-24-10.7-24-24s10.7-24 24-24h56v-48h-56c-13.3 0-24-10.7-24-24s10.7-24 24-24h56v-40c0-13.3-10.7-24-24-24h-88zM48 152v40h56c13.3 0 24 10.7 24 24s-10.7 24-24 24H48v48h56c13.3 0 24 10.7 24 24s-10.7 24-24 24H48v104c0 13.3 10.74 24 23.98 24H160V128H72c-13.25 0-24 10.7-24 24zm160 312h64v-64c0-26.5 21.5-48 48-48s48 21.5 48 48v64h64V72c0-13.25-10.7-24-24-24H232c-13.3 0-24 10.75-24 24v392z" />
                </svg>

                <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Book Appointment
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Book Doctor Appointment online instantly with top specialists
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex items-center justify-center rounded-lg bg-white dark:bg-gray-800">
              <div class="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  class="w-11 h-11 text-gray-500 dark:text-gray-400 mb-3"
                >
                  <path d="M7.5 5.5a.5.5 0 00-1 0v.634l-.549-.317a.5.5 0 10-.5.866L6 7l-.549.317a.5.5 0 10.5.866l.549-.317V8.5a.5.5 0 101 0v-.634l.549.317a.5.5 0 10.5-.866L8 7l.549-.317a.5.5 0 10-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h5a.5.5 0 000-1h-5z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2zM9.5 3A1.5 1.5 0 0011 4.5h2V14a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1h5.5v2z" />
                </svg>
                <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Check Medical Records
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Check all the medical records of patient through online from
                  everywhere
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="flex items-center justify-center  rounded-lg bg-gray-50 dark:bg-gray-800">
              <div class="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  class="w-11 h-11 text-gray-500 dark:text-gray-400 mb-3"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                  <path d="M11 3 H13 A2 2 0 0 1 15 5 V5 A2 2 0 0 1 13 7 H11 A2 2 0 0 1 9 5 V5 A2 2 0 0 1 11 3 z" />
                  <path d="M10 14h4M12 12v4" />
                </svg>
                <a href="#">
                  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Instant Prescription
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Get instant prescription from prefered your doctor.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center h-58 mb-4 rounded-md bg-gray-50 dark:bg-gray-800">
            <img
              src="https://cdn.askapollo.com/uat/assets/images/surgicalprocedure_n.webp"
              className="w-full h-full"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
