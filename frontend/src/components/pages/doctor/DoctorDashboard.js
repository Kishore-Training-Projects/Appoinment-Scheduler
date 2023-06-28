import React from "react";
import { DoctorSidebar } from "../../layout/sidebar/doctorsidebar";

export const DoctorDashboard = () => {
  return (
    <>
      <DoctorSidebar />

      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center h-24 rounded bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300  hover:border-2 border-0 border-red-500">
              <div class="flex items-center justify-center mr-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3301/3301556.png"
                  alt="Image"
                  class="w-20 h-20 text-gray-500 dark:text-gray-400 transition-colors duration-300"
                />
              </div>
              <div>
                <p class="text-center items-center justify-center text-xl text-gray-700 font-bold uppercase dark:text-gray-300">
                  Total Appointments
                </p>
                <p class="text-center items-center justify-center text-3xl font-bold text-blue-600 dark:text-blue-400">
                  25
                </p>
              </div>
            </div>

            <div class="flex items-center justify-center h-24 rounded bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300  hover:border-2 border-0 border-green-500">
              <div class="flex items-center justify-center mr-2">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/014/967/411/original/calendar-and-checkmarks-illustration-in-minimal-style-png.png"
                  alt="Image"
                  class="w-20 h-20 text-gray-500 dark:text-gray-400 transition-colors duration-300"
                />
              </div>
              <div>
                <p class="text-center items-center justify-center font text-xl text-gray-700 font-bold uppercase dark:text-gray-300">
                  Closed Appointments
                </p>
                <p class="text-center items-center justify-center text-3xl font-bold text-blue-600 dark:text-blue-400">
                  25
                </p>
              </div>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300  hover:border-2 border-0 border-blue-500">
              <div class="flex items-center justify-center mr-2">
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/calendar+clock+time+timer+wait+watch+icon-1320195822779526465.png"
                  alt="Image"
                  class="w-20 h-20 text-gray-500 dark:text-gray-400 transition-colors duration-300"
                />
              </div>
              <div>
                <p class="text-center items-center justify-center font text-xl text-gray-700 font-bold uppercase dark:text-gray-300">
                  Pending Appointments
                </p>
                <p class="text-center items-center justify-center text-3xl font-bold text-blue-600 dark:text-blue-400">
                  25
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">

          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
