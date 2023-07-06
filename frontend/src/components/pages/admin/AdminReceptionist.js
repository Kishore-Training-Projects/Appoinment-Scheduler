import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteAdminUser from "./components/DeleteAdminUser";
import { AdminSidebar } from "../../layout/sidebar/adminsidebar";
export const AdminReception = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);

  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
    userStatus: true,
    userRole: "admin",
   
  
    });

    
  function submitrecord(e)
  {
    e.preventDefault();
    console.log(formData);

    axios.post('/api/User', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          if (!response.ok) {
            if (response.status === 404) {
              throw new Error('Resource not found');
            }
            if (response.status === 201) {
              return response.data;
            }
            else {
              throw new Error('Network response was not ok');
            }
          }
          return response.data;
        })
        .then((data) => {
          // Handle the response from the server
          console.log(data);
          alert('Record Inserted Done');
          setShowModal(false)
          fetch_doctor_data()
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error('Error:', error.message);
        });


  }

  // fetch user data
  const [doctordata, setdoctordata] = useState([]);

  const fetch_doctor_data = async () => {
    await axios
      .get("/api/User")
      .then((response) => {
        setdoctordata(response.data);
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

  const itemsPerPage = 5; // Number of items to display per page
  const pageCount = Math.ceil(doctordata.length / itemsPerPage);
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
    const filteredResults = doctordata.filter(
      (doctor) =>
        doctor.userEmail.toLowerCase().includes(search.toLowerCase()) ||
        doctor.userRole.toLowerCase().includes(search.toLowerCase()) 
    );
    console.log(filteredResults);

    setSearchResults(filteredResults);

    // Reset pagination to the first page
    setCurrentPage(0);
  };

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
                      Doctor Details
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
                      Reception Login Details
                    </caption>
                    <div class="w-full md:w-1/2">
                      <div class="flex items-center">
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
                      </div>
                    </div>
                    <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => setShowModal(true)}
                        class="flex items-center justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                      >
                        Add Reception
                      </button>
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
                            Sn no
                          </th>
                          <th scope="col" class="px-4 py-3 text-center">
                            UserEmail
                          </th>
                          <th scope="col" class="px-4 py-3 text-center ">
                            UserPassword
                          </th>
                          <th scope="col" class="px-4 py-3 text-center">
                            UserStatus
                          </th>
                          <th scope="col" class="px-4 py-3 text-center">
                            UserRole
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
                            <td class="px-4 py-3 ">{index + 1}</td>

                            <th
                              scope="row"
                              class=" text-center px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {row.userEmail}
                            </th>
                            <td class="px-4 py-3 text-center ">
                              {row.userPassword}
                            </td>

                            <td class="px-4 py-3 text-center ">
                              {row.userStatus?"Active":"Inactive"}
                            </td>
                            <td class="px-4 py-3 text-center">
                              {row.userRole}
                            </td>
                            

                            <td className="px-4 py-3">
                              {" "}
                              <div className="flex space-x-2">
                               <DeleteAdminUser id={row.userId} fetch_doctor_data={fetch_doctor_data} />
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
         {/* select doctor modal */}
         {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full max-w-xl max-h-full">
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="pt-4 py-3 lg:px-5">
                  <h3 className="pb-2 px-3 text-xl font-medium border-b text-gray-900 dark:text-white">
                    Add User Details
                  </h3>
                  <div>
                    <div className="p-3">
                      <form onSubmit={(e)=>submitrecord(e)} className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            username
                          </label>
                          <input
                            type="text"
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  userEmail: e.target.value,
                                })
                              }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                           
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            User Password
                          </label>
                          <input
                            type="text"
                            onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  userPassword: e.target.value,
                                })
                              }
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                          />
                        </div>
                        <div className="col-span-2 sm:flex sm:flex-row-reverse">
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                          >
                            Add User
                          </button>
                          <button
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setShowModal(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </>
  );
};
