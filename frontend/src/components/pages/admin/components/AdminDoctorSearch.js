import React, { useState, useEffect } from "react";
import axios from "axios";

import ReactPaginate from "react-paginate";

export const AdminDoctorSearch = ({ selecteddoctor }) => {
  // fetch doctor data
  const [doctordetails, setDoctordetails] = useState([]);

  const fetch_doctor_data = async () => {
    await axios
      .get("/api/doctor/")
      .then((response) => {
        setDoctordetails(response.data);
        setSearchResults(response.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 404) {
            console.log("Resource not found");
          } else {
            console.log("Network response was not ok");
          }
        } else {
          console.error("Error:", error.message);
        }
      });
  };

  useEffect(() => {
    fetch_doctor_data();
  }, []);

  const sliceDoctorbyId = (id) => {
    //  console.log(id);
    selecteddoctor(doctordetails.find((doctor) => doctor.doctorId === id));
  };
  const itemsPerPage = 5; // Number of items to display per page
  const pageCount = Math.ceil(doctordetails.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const offset = currentPage * itemsPerPage;
  var currentPageData = searchResults.slice(offset, offset + itemsPerPage);

  // Function to handle search query changes
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
    handleSearch(event.target.value);
  };

  // Function to handle search
  const handleSearch = (search) => {
    console.log(search);
    // Perform search logic here using searchQuery
    const filteredResults = doctordetails.filter(
      (doctor) =>
        doctor.doctorName.toLowerCase().includes(search.toLowerCase()) ||
        doctor.doctorMobile.includes(search) ||
        doctor.doctorEmail.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredResults);

    setSearchResults(filteredResults);

    // Reset pagination to the first page
    setCurrentPage(0);
  };

  return (
    <>
      <div class="flex w-full mb-4 h-full rounded bg-gray-50 dark:bg-gray-800">
        <section class="bg-gray-50 dark:bg-gray-900 w-full h-full">
          <div class="mx-auto max-w-screen ">
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <caption class="w-full p-2 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  Doctor Details
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
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                      />
                    </div>
                  </form>
                </div>
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"></div>
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
                        Doctor Name
                      </th>
                      <th scope="col" class="px-4 py-3 ">
                        Doctor Designation
                      </th>
                      <th scope="col" class="px-4 py-3 ">
                        Doctor Fees
                      </th>
                      <th scope="col" class="px-4 py-3">
                        Doctor Email
                      </th>

                      <th scope="col" class="px-4 py-3">
                        Doctor Status
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
                        <td class="px-4 py-3 text-center ">
                          {row.doctorDesignation}
                        </td>
                        <td class="px-4 py-3 text-center ">{row.doctorFees}</td>

                        <td class="px-4 py-3 text-center">{row.doctorEmail}</td>
                        <td class="px-4 py-3 text-center">
                          {row.doctorStatus}
                        </td>

                        <td className="px-4 py-3">
                          {" "}
                          <div className="flex space-x-2">
                            <button
                              onClick={() => sliceDoctorbyId(row.doctorId)}
                              className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded"
                            >
                              SELECT
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
                    "pagination flex  justify-center items-start md:items-center space-x-2 p-2"
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
    </>
  );
};
