import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

import { AdminSidebar } from "../../layout/sidebar/adminsidebar";
export const TodayAdminAppointment = () => {
  const navigate = useNavigate();

  const tableData = [
    {
      doctorName: "Dr. John Doe",
      appointmentDate: "2023-07-01",
      appointmentTime: "10:00 AM",
      healthReason: "General Check-up",
      appointmentStatus: "Confirmed",
      paymentStatus: "Paid",
    },
    {
      doctorName: "Dr. Jane Smith",
      appointmentDate: "2023-07-02",
      appointmentTime: "11:30 AM",
      healthReason: "Dental Consultation",
      appointmentStatus: "Confirmed",
      paymentStatus: "Pending",
    },
    {
      doctorName: "Dr. Mark Johnson",
      appointmentDate: "2023-07-03",
      appointmentTime: "2:15 PM",
      healthReason: "Eye Check-up",
      appointmentStatus: "Cancelled",
      paymentStatus: "Not Paid",
    },
    {
      doctorName: "Dr. Jane Smith",
      appointmentDate: "2023-07-02",
      appointmentTime: "11:30 AM",
      healthReason: "Dental Consultation",
      appointmentStatus: "Confirmed",
      paymentStatus: "Pending",
    },
    {
      doctorName: "Dr. Mark Johnson",
      appointmentDate: "2023-07-03",
      appointmentTime: "2:15 PM",
      healthReason: "Eye Check-up",
      appointmentStatus: "Cancelled",
      paymentStatus: "Not Paid",
    },
    {
      doctorName: "Dr. Jane Smith",
      appointmentDate: "2023-07-02",
      appointmentTime: "11:30 AM",
      healthReason: "Dental Consultation",
      appointmentStatus: "Confirmed",
      paymentStatus: "Pending",
    },
    {
      doctorName: "Dr. Mark Johnson",
      appointmentDate: "2023-07-03",
      appointmentTime: "2:15 PM",
      healthReason: "Eye Check-up",
      appointmentStatus: "Cancelled",
      paymentStatus: "Not Paid",
    },
    {
      doctorName: "Dr. Jane Smith",
      appointmentDate: "2023-07-02",
      appointmentTime: "11:30 AM",
      healthReason: "Dental Consultation",
      appointmentStatus: "Confirmed",
      paymentStatus: "Pending",
    },
    {
      doctorName: "Dr. Mark Johnson",
      appointmentDate: "2023-07-03",
      appointmentTime: "2:15 PM",
      healthReason: "Eye Check-up",
      appointmentStatus: "Cancelled",
      paymentStatus: "Not Paid",
    },
    {
      doctorName: "Dr. Jane Smith",
      appointmentDate: "2023-07-02",
      appointmentTime: "11:30 AM",
      healthReason: "Dental Consultation",
      appointmentStatus: "Confirmed",
      paymentStatus: "Pending",
    },
    {
      doctorName: "Dr. Mark Johnson",
      appointmentDate: "2023-07-03",
      appointmentTime: "2:15 PM",
      healthReason: "Eye Check-up",
      appointmentStatus: "Cancelled",
      paymentStatus: "Not Paid",
    },
    {
      doctorName: "Dr. Jane Smith",
      appointmentDate: "2023-07-02",
      appointmentTime: "11:30 AM",
      healthReason: "Dental Consultation",
      appointmentStatus: "Confirmed",
      paymentStatus: "Pending",
    },
    {
      doctorName: "Dr. Mark Johnson",
      appointmentDate: "2023-07-03",
      appointmentTime: "2:15 PM",
      healthReason: "Eye Check-up",
      appointmentStatus: "Cancelled",
      paymentStatus: "Not Paid",
    },
    {
      doctorName: "Dr. Jane Smith",
      appointmentDate: "2023-07-02",
      appointmentTime: "11:30 AM",
      healthReason: "Dental Consultation",
      appointmentStatus: "Confirmed",
      paymentStatus: "Pending",
    },
    {
      doctorName: "Dr. Mark Johnson",
      appointmentDate: "2023-07-03",
      appointmentTime: "2:15 PM",
      healthReason: "Eye Check-up",
      appointmentStatus: "Cancelled",
      paymentStatus: "Not Paid",
    },

    // Add more appointment objects as needed
  ];

  const itemsPerPage = 5; // Number of items to display per page
  const pageCount = Math.ceil(tableData.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = tableData.slice(offset, offset + itemsPerPage);

  return (
    <>
      <AdminSidebar />

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
                    <a class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                      Appointments
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* table code */}
          <div class="flex w-full mb-4 h-full rounded bg-gray-50 dark:bg-gray-800">
            <section class="bg-gray-50 dark:bg-gray-900 w-full h-full">
              <div class="mx-auto max-w-screen ">
                <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                  <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <caption class="w-full p-2 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                      Today Appointment Details
                    </caption>
                    <div class="w-full md:w-1/2">
                      <form class="flex items-center">
                        <label for="simple-search" class="sr-only">
                          Search
                        </label>
                        <div class="relative w-full">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              aria-hidden="true"
                              class="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewbox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="simple-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                            required=""
                          />
                        </div>
                      </form>
                    </div>
                    <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                      <div class="flex items-center space-x-3 w-full md:w-auto"></div>
                    </div>
                  </div>
                  <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="p-4">
                            <div class="flex items-center">
                              <input
                                id="checkbox-all"
                                type="checkbox"
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label for="checkbox-all" class="sr-only">
                                checkbox
                              </label>
                            </div>
                          </th>
                          <th scope="col" class="px-4 py-3">
                            Patient Name
                          </th>
                          <th scope="col" class="px-4 py-3">
                            Patient Mobile
                          </th>
                          <th scope="col" class="px-4 py-3 ">
                            Appointment Date
                          </th>
                          <th scope="col" class="px-4 py-3">
                            Appointment time
                          </th>

                          <th scope="col" class="px-4 py-3">
                            Appointment status
                          </th>
                          <th scope="col" class="px-4 py-3">
                            Record status
                          </th>

                          <th scope="col" class="px-4 py-3">
                            Payment Status
                          </th>

                          <th scope="col" class="px-4 py-3">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentPageData.map((row, index) => (
                          <tr
                            key={index}
                            class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <td class="w-4 px-4 py-3">
                              <div class="flex items-center">
                                <input
                                  id="checkbox-table-search-1"
                                  type="checkbox"
                                  onclick="event.stopPropagation()"
                                  class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                  for="checkbox-table-search-1"
                                  class="sr-only"
                                >
                                  checkbox
                                </label>
                              </div>
                            </td>
                            <th
                              scope="row"
                              class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {row.doctorName}
                            </th>
                            <td class="px-4 py-3 ">{row.appointmentDate}</td>
                            <td class="px-4 py-3 ">{row.appointmentTime}</td>
                            <td class="px-4 py-3 ">{row.appointmentStatus}</td>
                            <td class="px-4 py-3 ">{row.paymentStatus}</td>
                            <td class="px-4 py-3 ">{row.paymentStatus}</td>

                            <td class="px-4 py-3 ">{row.healthReason}</td>
                            <td className="px-4 py-3">
                              {" "}
                              <div className="flex space-x-2">
                                <button
                                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                                  data-tooltip-target="tooltip-default"
                                >
                                  <div
                                    id="tooltip-default"
                                    role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                                  >
                                    Tooltip content
                                    <div
                                      class="tooltip-arrow"
                                      data-popper-arrow
                                    ></div>
                                  </div>
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
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
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
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
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
                                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
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
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <nav
                    class="flex flex-col md:flex-row justify-center items-center md:items-center space-y-3 md:space-y-0 "
                    aria-label="Table navigation"
                  >
                    {/* Pagination */}
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      breakLabel={"..."}
                      pageCount={pageCount}
                      onPageChange={handlePageChange}
                      containerClassName={
                        "pagination flex  justify-center items-start md:items-center space-x-2 p-8"
                      }
                      previousLinkClassName={
                        "text-sm font-normal text-gray-500 dark:text-gray-400 flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                      nextLinkClassName={
                        "flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      }
                      disabledClassName={"pagination__link--disabled"}
                      activeClassName={
                        "text-sm z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      }
                    />
                  </nav>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
