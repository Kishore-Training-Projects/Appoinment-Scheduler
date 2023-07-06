import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import profileimage from "../../images/profile.png";
import logo from "../../images/logo.png";

export const UserSidebar = () => {
  const [profile, setProfile] = useState();

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isuserOpen, setIsuserOpen] = useState(false);

  const usertoggleDropdown = () => {
    setIsuserOpen(!isuserOpen);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isdropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isdropdownOpen);
  };

  useEffect(() => {
    const profile = () => {
      var item_value = JSON.parse(sessionStorage.getItem("student_key"));
      // console.log(item_value.picture)
      setProfile(item_value);
    };

    profile();
  }, []);

  const signout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  if (!sessionStorage.getItem("student_key")) return <Navigate to="/login" />;

  return (
    <>
      <nav class=" print-only fixed top-0 z-50 w-full bg-white border-b border-gray-300 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
        <div class="flex flex-wrap justify-between items-center">
          <div class="flex justify-start items-center">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              onClick={toggleSidebar}
              aria-controls="logo-sidebar"
              type="button"
              class="mr-2 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a class="flex mr-4">
              <img src={logo} class="mr-3 h-8" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                New🩺Life
              </span>
            </a>
          </div>
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded={isuserOpen}
              onClick={usertoggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={profileimage}
                alt="user photo"
              />
            </button>
            {isuserOpen && (
              <div
                className="fixed top-10 right-1 z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown"
              >
                <div className="py-3 px-4">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                    {profile.name}
                  </span>
                  <span className="block text-sm font-light text-gray-500 truncate dark:text-gray-400">
                    {profile.mobile}
                  </span>
                </div>
                <ul
                  className="py-1 font-light text-gray-500 dark:text-gray-400"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      onClick={() => signout()}
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white  border-r border-gray-300 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                onClick={() => navigate("/user/dashboard")}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M924.8 385.6a446.7 446.7 0 00-96-142.4 446.7 446.7 0 00-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 00-142.4 96 446.7 446.7 0 00-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM482 232c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.5l-31.1 31.1a8.03 8.03 0 01-11.3 0L261.7 352a8.03 8.03 0 010-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.6l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 01-79.2 0 55.95 55.95 0 010-79.2 55.87 55.87 0 0154.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.1 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 010-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 01-11.3 0zM846 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44z" />
                </svg>
                <span class="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                onClick={toggleDropdown}
              >
                <svg
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1h1zM13.25 9a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 00.25-.25v-.5a.25.25 0 00-.25-.25h-.5zM13 11.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5zm.25 1.75a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 00.25-.25v-.5a.25.25 0 00-.25-.25h-.5zm-11-4a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 003 9.75v-.5A.25.25 0 002.75 9h-.5zm0 2a.25.25 0 00-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 00.25-.25v-.5a.25.25 0 00-.25-.25h-.5zM2 13.25a.25.25 0 01.25-.25h.5a.25.25 0 01.25.25v.5a.25.25 0 01-.25.25h-.5a.25.25 0 01-.25-.25v-.5z" />
                  <path d="M5 1a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 011 1v4h3a1 1 0 011 1v7a1 1 0 01-1 1H1a1 1 0 01-1-1V8a1 1 0 011-1h3V3a1 1 0 011-1V1zm2 14h2v-3H7v3zm3 0h1V3H5v12h1v-3a1 1 0 011-1h2a1 1 0 011 1v3zm0-14H6v1h4V1zm2 7v7h3V8h-3zm-8 7V8H1v7h3z" />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Appointment{" "}
                </span>
                <svg
                  className={`w-6 h-6 ${
                    isdropdownOpen ? "transform rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={` py-2 space-y-2 ${
                  isdropdownOpen ? "block" : "hidden"
                }`}
              >
                <li></li>
                <li>
                  <a
                    onClick={() => navigate("/user/appointment/new")}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    New Appointment
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/user/appointment/")}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Appointments
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                onClick={() => navigate("/user/medicalrecords")}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M14 14h-1v-1a1 1 0 00-2 0v1h-1a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2zm6-5.06a1.31 1.31 0 00-.06-.27v-.09a1.07 1.07 0 00-.19-.28l-6-6a1.07 1.07 0 00-.28-.19h-.09a.88.88 0 00-.33-.11H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3V9v-.06zm-6-3.53L16.59 8H15a1 1 0 01-1-1zM18 19a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1h5v3a3 3 0 003 3h3z" />
                </svg>

                <span class="flex-1 ml-3 whitespace-nowrap">
                  Medical Records
                </span>
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/user/prescription")}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                  <path d="M11 3 H13 A2 2 0 0 1 15 5 V5 A2 2 0 0 1 13 7 H11 A2 2 0 0 1 9 5 V5 A2 2 0 0 1 11 3 z" />
                  <path d="M10 14h4M12 12v4" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Prescription</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/user/doctors")}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-96 55.2C54 332.9 0 401.3 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-57.1c-6-.6-12.1-.9-18.3-.9h-91.4c-6.2 0-12.3.3-18.3.9v65.4c23.1 6.9 40 28.3 40 53.7 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7v-59.1zM144 448c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  Doctor Details
                </span>
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/user/payments")}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                  <path d="M11 3 H13 A2 2 0 0 1 15 5 V5 A2 2 0 0 1 13 7 H11 A2 2 0 0 1 9 5 V5 A2 2 0 0 1 11 3 z" />
                  <path d="M14 11h-2.5a1.5 1.5 0 000 3h1a1.5 1.5 0 010 3H10M12 17v1m0-8v1" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Payments</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/user/profile")}
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                    clipRule="evenodd"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
