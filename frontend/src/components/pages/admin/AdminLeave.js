import React from "react";
import { useState } from "react";
import { AdminSidebar } from "../../layout/sidebar/adminsidebar";
import ReactPaginate from "react-paginate";

export const AdminLeave = () => {
  const today = new Date().toISOString().split("T")[0]; // Get current date in yyyy-mm-dd format


  const tableData = [
    {
      doctorName: 'Dr. John Smith',
      designation: 'Cardiologist',
      date: '2023-06-28',
      disease: 'Hypertension',
      allergy: 'None',
      prescription: 'Medication X, Medication Y',
      remark: 'Patient advised to monitor blood pressure regularly.',
    },
    {
      doctorName: 'Dr. Sarah Johnson',
      designation: 'Dermatologist',
      date: '2023-06-30',
      disease: 'Eczema',
      allergy: 'Penicillin',
      prescription: 'Cream A, Cream B',
      remark: 'Patient to avoid exposure to allergens.',
    }, {
      doctorName: 'Dr. Emily Lee',
      designation: 'Pediatrician',
      date: '2023-06-29',
      disease: 'Common Cold',
      allergy: 'None',
      prescription: 'Antibiotic X, Syrup Y',
      remark: 'Patient advised to get plenty of rest and drink fluids.',
    },
    {
      doctorName: 'Dr. Michael Johnson',
      designation: 'Orthopedic Surgeon',
      date: '2023-06-27',
      disease: 'Fractured Arm',
      allergy: 'None',
      prescription: 'Cast applied, Pain medication',
      remark: 'Patient to follow up after four weeks for cast removal.',
    },
    {
      doctorName: 'Dr. Jennifer Davis',
      designation: 'Gynecologist',
      date: '2023-06-26',
      disease: 'Irregular Menstruation',
      allergy: 'None',
      prescription: 'Hormone Therapy',
      remark: 'Patient advised to maintain a healthy lifestyle and exercise regularly.',
    },
    {
      doctorName: 'Dr. Robert Anderson',
      designation: 'Ophthalmologist',
      date: '2023-06-25',
      disease: 'Cataracts',
      allergy: 'None',
      prescription: 'Cataract Surgery',
      remark: 'Patient to attend pre-operative consultation before surgery.',
    },
    {
      doctorName: 'Dr. Laura Wilson',
      designation: 'Psychiatrist',
      date: '2023-06-24',
      disease: 'Depression',
      allergy: 'None',
      prescription: 'Antidepressant Medication',
      remark: 'Patient advised to attend therapy sessions regularly.',
    },
    {
      doctorName: 'Dr. Christopher Brown',
      designation: 'Dentist',
      date: '2023-06-23',
      disease: 'Cavity',
      allergy: 'None',
      prescription: 'Tooth Filling',
      remark: 'Patient to maintain regular oral hygiene practices.',
    },
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
                    <a
                      href="#"
                      class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Leave
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
                      Apply
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          {/* form */}
          <div class="flex mb-4 rounded bg-white dark:bg-gray-800">
            <div className="w-full p-3 border border-white rounded-lg">
              <h1 className="text-2xl font-bold mb-6">Doctor Leave Apply</h1>

              <form>
                  
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
                    From Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    min={today}
                    className="w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>

                <div className="flex flex-wrap mb-4">
                  <label htmlFor="date" className="w-full md:w-1/4">
                    To Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    min={today}
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



   {/* table code */}
   <div class="flex w-full mb-4 h-full rounded bg-gray-50 dark:bg-gray-800">
            <section class="bg-gray-50 dark:bg-gray-900 w-full h-full">
              <div class="mx-auto max-w-screen ">
                <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                  <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <caption class="w-full p-2 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                      Doctor Leave Details
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
                            Sn no
                          </th>
                          <th scope="col" class="px-4 py-3">
                            Doctor Name
                          </th>
                          <th scope="col" class="px-4 py-3 ">
                            from date
                          </th>
                          <th scope="col" class="px-4 py-3 ">
                            To date
                          </th>
                                                  
                          <th scope="col" class="px-4 py-3">
                            Reason
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
                            <td class="px-4 py-3 ">{index+1}</td>

                            <th
                              scope="row"
                              class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {row.date}
                            </th>
                            <td class="px-4 py-3 text-center ">{row.doctorName}</td>
                            <td class="px-4 py-3 text-center">{row.designation}</td>
                            

                            <td class="px-4 py-3 ">{row.remark}</td>

                            <td className="px-4 py-3">
                              {" "}
                              <div className="flex space-x-2">
                                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded">
                                  View
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                                  Delete
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
