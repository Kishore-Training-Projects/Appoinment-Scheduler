import React from "react";

import { UserSidebar } from "../../layout/sidebar/usersidebar";
export const UserDashboard = () => {
  return (
    <>
      <UserSidebar />

      <div class="p-2 md:p-4 min-h-screen bg-gray-200 sm:ml-64">
        <div class=" p-2 md:p-4 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center h-24 rounded bg-white dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-white dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <div class="flex justify-center">
              <div class="w-96 bg-white rounded-lg shadow-lg">
                <div class="flex justify-between items-center px-4 py-3 border-b">
                  <h2 class="text-lg font-semibold text-gray-800">
                    Height and Weight Graph
                  </h2>
                  <select class="py-1 px-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                  </select>
                </div>
                <div class="px-4 py-3">
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-1/2">
                      <div class="h-6 w-1/2 bg-blue-500 rounded"></div>
                    </div>
                    <div class="text-gray-700">Height</div>
                  </div>
                  <div class="flex items-center justify-between mb-2">
                    <div class="w-1/2">
                      <div class="h-6 w-3/4 bg-green-500 rounded"></div>
                    </div>
                    <div class="text-gray-700">Weight</div>
                  </div>
                </div>
              </div>
            </div>
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
