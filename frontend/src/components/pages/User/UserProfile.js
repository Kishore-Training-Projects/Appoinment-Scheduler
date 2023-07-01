import React from "react";

import { UserSidebar } from "../../layout/sidebar/usersidebar";
export const UserProfile = () => {
  const profileData = {
    name: "John Doe",
    age: 30,
    dob: "1993-07-01",
    address: "123 Main St, City, State, Country",
    bloodGroup: "A+",
    email: "johndoe@example.com",
    number: "+1 123 456 7890",
    profileImage: "profile.jpg", // Provide the path or URL to the profile image
  };

  return (
    <>
      <UserSidebar />

      <div class="p-2 md:p-4 min-h-screen bg-gray-200 sm:ml-64">
        <div class=" p-2 md:p-4 border-2 border-gray-300 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {/* bread crumbs  */}
          <div class="flex w-full mb-4 rounded bg-white dark:bg-gray-800">
            <nav
              class="flex w-full px-5 py-3 text-gray-700 border border-white rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700"
              aria-label="Breadcrumb"
            >
              <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                  <a
                    href="#"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <a class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                      Profile
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* profile section */}
          <div class="flex items-center justify-center  mb-4 rounded bg-gray-50 dark:bg-gray-800"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="w-full flex items-center justify-center rounded bg-gray-50  dark:bg-gray-800">
              <div class="w-full">
                <div class="flex justify-end px-4 pt-4"></div>
                <div class="flex flex-col items-center pb-4">
                  <img
                    class="w-34 h-28 mb-3 rounded-full shadow-lg"
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Bonnie image"
                  />
                  <h5 class="mt-2 text-xl font-medium text-gray-900 dark:text-white">
                    Bonnie Green
                  </h5>

                  <div class="flex mt-3 space-x-3 md:mt-3">
                    <a
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      📞 Call
                    </a>
                    <a
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                      ✉ Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 w-full dark:bg-gray-800">
              <div class="w-full h-full bg-white p-3 shadow-sm rounded-sm">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">About</span>
                </div>
                <div class="text-gray-700 mt-2">
                  <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Full Name</div>
                      <div class="px-4 py-2">Jane</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Age</div>
                      <div class="px-4 py-2">Doe</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Gender</div>
                      <div class="px-4 py-2">Female</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                      <div class="px-4 py-2">+11 998001001</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">bloodGroup</div>
                      <div class="px-4 py-2">O+ve</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Address</div>
                      <div class="px-4 py-2">
                        73 , 7th cross street chhennao
                      </div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Birthday</div>
                      <div class="px-4 py-2">Feb 06, 1998</div>
                    </div>
                    <div class="grid grid-cols-2">
                      <div class="px-4 py-2 font-semibold">Email:</div>
                      <div class="px-4 py-2">
                        <a class="text-blue-800" href="mailto:jane@example.com">
                          jane@example.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


{/* weight counter */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center justify-center rounded-lg bg-gray-50 h-28 dark:bg-gray-800">
              <div class="w-full  text-center ">
                <div class="py-4 h-28 border-2 border-dashed rounded-lg border-red-400">
                  <h6 class="relative mt-2  mb-0 text-transparent z-1 bg-clip-text text-purple-800 text-2xl font-bold">
                    Weight 🏋️
                  </h6>
                  <h4 class="font-bold mt-2 dark:text-white">
                    <span class="text-3.5">30cm </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-gray-50 h-28 dark:bg-gray-800">
              <div class="w-full  text-center ">
                <div class="py-4 h-28 border-2 border-dashed rounded-lg border-red-400">
                  <h6 class="relative mt-2  mb-0 text-transparent z-1 bg-clip-text text-purple-800 text-2xl font-bold">
                    Height 🧍
                  </h6>
                  <h4 class="font-bold mt-2 dark:text-white">
                    <span class="text-3.5">30 cm </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-gray-50 h-28 dark:bg-gray-800">
              <div class="w-full  text-center ">
                <div class="py-4 h-28 border-2 border-dashed rounded-lg border-red-400">
                  <h6 class="relative mt-2  mb-0 text-transparent z-1 bg-clip-text text-purple-800 text-2xl font-bold">
                    Pressure 😰
                  </h6>
                  <h4 class="font-bold mt-2 dark:text-white">
                    <span class="text-3.5">30cm </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-gray-50 h-28 dark:bg-gray-800">
              <div class="w-full  text-center ">
                <div class="py-4 h-28 border-2 border-dashed rounded-lg border-red-400">
                  <h6 class="relative mt-2  mb-0 text-transparent z-1 bg-clip-text text-purple-800 text-2xl font-bold">
                Temperature🌡️
                  </h6>
                  <h4 class="font-bold mt-2 dark:text-white">
                    <span class="text-3.5">30cm </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
