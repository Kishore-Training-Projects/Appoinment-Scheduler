import React from "react";
import { useState } from "react";
import { UserSidebar } from "../../layout/sidebar/usersidebar";

export const AddUserAppointment = () => {
  const today = new Date().toISOString().split("T")[0]; // Get current date in yyyy-mm-dd format
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    const selected = new Date(event.target.value);
    if (selected.getDay() === 0) {
      event.target.value = "";
      setSelectedDate("");
      alert("Sundays are holiday 🎉. Please select another date. 📅");
    } else {
      setSelectedDate(event.target.value);
    }
  };

  return (
    <>
      <UserSidebar />

      <div class="p-2 md:p-4 min-h-screen bg-gray-200 sm:ml-64">
        <div class=" p-2 md:p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
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
                    <a
                      href="#"
                      class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Appointments
                    </a>
                  </div>
                </li>
                <li aria-current="page">
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
                    <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      New
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* form */}
          <div class="flex mb-4 rounded bg-white dark:bg-gray-800">
            <div className="w-full p-3 border border-white rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Appointment Schedule</h1>

              <form>
                <div className="flex flex-wrap mb-4">
                  <label htmlFor="name" className="w-full md:w-1/4">
                    Name: <p className="text-sm	 text-gray-400"><small> [ Full Name ] </small></p>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-wrap mb-4">
                  <label htmlFor="email" className="w-full md:w-1/4">
                    Mobile number:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                  <label htmlFor="email" className="w-full md:w-1/4">
                    Doctor:

                  </label>

                  <div className="flex w-full md:w-3/4">
                    <input
                      type="text"
                      id="username-success"
                      disabled
                      className="flex-grow px-2 py-1 border border-gray-300 rounded"
                    />

                    <button className="ml-3 w-34 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      select doctor
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap mb-4">
                  <label htmlFor="date" className="w-full md:w-1/4">
                    Date:
                    <p  className="text-sm	 text-red-400">
                        <small>[ Sunday are holiday ]</small>
                        </p>
                  </label>
                  <input
                    type="date"
                    id="date"
                    min={today}
                    onChange={handleDateChange}
                    className="w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-wrap mb-4">
                  <label htmlFor="time" className="w-full md:w-1/4">
                    Time:
                    <p  className="text-sm	 text-red-400">
                        <small>[ working hours are 9am to 6pm ]</small>
                        </p>
                  </label>
                  <input
                    type="time"
                    id="time"
                    min="08:00"
                    max="20:00"
                    disabled={!selectedDate}
                    step="1800" // 30-minute interval
                    onChange={(e) => console.log(e.target.value)}
                    className="w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
                <div className="flex flex-wrap mb-4">
                  <label htmlFor="email" className="w-full md:w-1/4">
                    Reason:
                  </label>
                  <textarea
                    type="email"
                    id="email"
                    row="3"
                    className="w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};
