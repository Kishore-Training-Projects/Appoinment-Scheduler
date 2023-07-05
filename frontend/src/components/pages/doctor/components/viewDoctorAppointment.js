import { React, useEffect } from "react";
import { useState } from "react";
import { DoctorSidebar } from "../../../layout/sidebar/doctorsidebar";
import { AddDoctorPrescription } from "./AddDoctorPrescription";
import CancelDoctorAppointment from "./CancelDoctorAppointment";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ViewDoctorAppointment = () => {
  const { id } = useParams();

  const [appointmentdata, setAppointmentdata] = useState();

  console.log(id);

  // fetch user data

  const fetch_appointment_data = async (id) => {
    console.log("hi");
    try {
      const response = await axios.get(`/api/Appointment/${id}`);
      setAppointmentdata(response.data);
      fetch_medicalrecord_data(response.data.patient.patientId,response.data.appointmentId)

    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          console.log("Resource not found");
        } else {
          console.log("Network response was not ok");
        }
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  // fetch medical records
  const [medicalrecords, setmedicalrecords] = useState();

  const fetch_medicalrecord_data = async (id1,id2) => {
    await axios
      .get(`/api/MedicalRecord/reception?id1=${id1}&id2=${id2}`)
      .then((response) => {
        setmedicalrecords(response.data);
        fetch_prescription_data(id1,id2);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 404) {
            console.log("Resource not found");
          } else {
            console.log("Network response was not ok");
          }
        } else {
          console.log("Error:", error.message);
        }
      });
  };


    // fetch prescription records
    const [Prescription, setPrescription] = useState();

    const fetch_prescription_data = async (id1,id2) => {
      await axios
        .get(`/api/Prescription/doctor?id1=${id1}&id2=${id2}`)
        .then((response) => {
          setPrescription(response.data);
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 404) {
              console.log("Resource not found");
            } else {
              console.log("Network response was not ok");
            }
          } else {
            console.log("Error:", error.message);
          }
        });
    };

  useEffect(() => {
    fetch_appointment_data(id);
    
  }, []);

  return (
    <>
      <DoctorSidebar />
      {appointmentdata && (
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

            {/* appointmentdata.patient section */}
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
                      {appointmentdata.patient.patientName}
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
                        <div class="px-2 py-2 font-semibold">Full Name</div>
                        <div class="px-1 py-2">
                          {appointmentdata.patient.patientName}
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-2 py-2 font-semibold">Age</div>
                        <div class="px-1 py-2">
                          {appointmentdata.patient.patientAge}
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-2 py-2 font-semibold">Gender</div>
                        <div class="px-1 py-2">
                          {appointmentdata.patient.patientGender}
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-2 py-2 font-semibold">bloodGroup</div>
                        <div class="px-1 py-2">
                          {appointmentdata.patient.patientBloodGroup}
                        </div>
                      </div>
                      <div class="grid grid-cols-2">
                        <div class="px-2 py-2 font-semibold">Birthday</div>
                        <div class="px-1 py-2">
                          {new Date(
                            appointmentdata.patient.patientDOB
                          ).toLocaleDateString()}
                        </div>
                      </div>

                      <div class="grid grid-cols-2">
                        <div class="px-2 py-2 font-semibold">Contact No.</div>
                        <div class="px-1 py-2">
                          +91 {appointmentdata.patient.patientMobile}
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4">
                      <div class="px-2 py-2 font-semibold">Address</div>
                      <div class="py-2">
                        {appointmentdata.patient.patientAddress}
                      </div>
                    </div>

                    <div className="flex items-end justify-end">

                        {appointmentdata.medicalrecordStatus == true && appointmentdata.appointmentStatus !="canceled" && appointmentdata.appointmentStatus !="completed" &&(
                            
                            <AddDoctorPrescription id = {appointmentdata.appointmentId} setPrescription={setPrescription} />
                        )}

                      <button className=" mx-2 text-xs bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded">
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
                    
                        {appointmentdata.appointmentStatus !="canceled" &&appointmentdata.appointmentStatus !="completed" &&(
                            
                            <CancelDoctorAppointment id = {appointmentdata.appointmentId} fetch_appointment_data={fetch_appointment_data} />
                        )}

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
                    <h6 class="relative mt-2  mb-0  z-1 bg-clip-text text-purple-800 text-2xl font-bold">
                      Weight 🏋️
                    </h6>
                    <h4 class="font-bold mt-2 dark:text-white">
                      <span class="text-3.5">
                        {medicalrecords ? medicalrecords.weight + "cm" : "NIL"}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-gray-50 h-28 dark:bg-gray-800">
                <div class="w-full  text-center ">
                  <div class="py-4 h-28 border-2 border-dashed rounded-lg border-red-400">
                    <h6 class="relative mt-2  mb-0  z-1 bg-clip-text text-purple-800 text-2xl font-bold">
                      Height 🧍
                    </h6>
                    <h4 class="font-bold mt-2 dark:text-white">
                      <span class="text-3.5">
                        {medicalrecords ? medicalrecords.height + "cm" : "NIL"}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-gray-50 h-28 dark:bg-gray-800">
                <div class="w-full  text-center ">
                  <div class="py-4 h-28 border-2 border-dashed rounded-lg border-red-400">
                    <h6 class="relative mt-2  mb-0 z-1 bg-clip-text text-purple-800 text-2xl font-bold">
                      Pressure 😰
                    </h6>
                    <h4 class="font-bold mt-2 ">
                      <span class="text-3.5">
                        {medicalrecords
                          ? medicalrecords.pressure + "cm"
                          : "NIL"}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-lg bg-gray-50 h-28 dark:bg-gray-800">
                <div class="w-full  text-center ">
                  <div class="py-4 h-28 border-2 border-dashed rounded-lg border-red-400">
                    <h6 class="relative mt-2  mb-0  z-1 bg-clip-text text-purple-800 text-2xl font-bold">
                      Temperature🌡️
                    </h6>
                    <h4 class="font-bold mt-2">
                      <span class="text-3.5">
                        {medicalrecords
                          ? medicalrecords.temperature + "cm"
                          : "NIL"}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* end of weight counter */}

            {/* Appointment code */}
            <div class="flex mt-4 w-full mb-4 h-full rounded bg-gray-50 dark:bg-gray-800">
              <section class="bg-gray-50 dark:bg-gray-900 w-full h-full">
                <div class="mx-auto max-w-screen ">
                  <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                      <caption class="w-full p-2 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Appointment Details
                      </caption>
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

                            <th scope="col" class="px-4 py-3 ">
                              Appointment Date
                            </th>
                            <th scope="col" class="px-4 py-3">
                              Appointment Time
                            </th>

                            <th scope="col" class="px-4 py-3">
                              Appointment status
                            </th>

                            <th scope="col" class="px-4 py-3">
                              Appointment remark
                            </th>

                            <th scope="col" class="px-4 py-3">
                              Payment Status
                            </th>
                            <th scope="col" class="px-4 py-3">
                              Medical Record Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                              {new Date(
                                appointmentdata.appointmentDate
                              ).toLocaleDateString()}
                            </th>
                            <td class="px-4 py-3 ">
                              {appointmentdata.appointmentTime}
                            </td>
                            <td class="px-4 py-3 ">
                              {appointmentdata.appointmentStatus}
                            </td>
                            <td class="px-4 py-3 ">
                              {appointmentdata.appointmentRemark}
                            </td>
                            <td class="px-4 py-3 ">
                              {appointmentdata.paymentStatus}
                            </td>
                            <td class="px-4 py-3 ">
                              {appointmentdata.medicalrecordStatus == true
                                ? "recorded"
                                : "not recorded"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Doctor Details Table */}
            <div class="flex mt-4 w-full mb-4 h-full rounded bg-gray-50 dark:bg-gray-800">
              <section class="bg-gray-50 dark:bg-gray-900 w-full h-full">
                <div class="mx-auto max-w-screen ">
                  <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                      <caption class="w-full p-2 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Doctor Details
                      </caption>
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

                            <th scope="col" class="px-4 py-3 ">
                              Doctor Name
                            </th>
                            <th scope="col" class="px-4 py-3">
                              Doctor Designation
                            </th>

                            <th scope="col" class="px-4 py-3">
                              Doctor Fees
                            </th>
                            <th scope="col" class="px-4 py-3">
                              Doctor Mobile
                            </th>

                            <th scope="col" class="px-4 py-3">
                              Doctor status
                            </th>
                            <th scope="col" class="px-4 py-3">
                              Appointment Reason
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                              {appointmentdata.doctor.doctorName}
                            </th>
                            <td class="px-4 py-3 ">
                              {" "}
                              {appointmentdata.doctor.doctorDesignation}
                            </td>
                            <td class="px-4 py-3 ">
                              {" "}
                              {appointmentdata.doctor.doctorFees}
                            </td>
                            <td class="px-4 py-3 ">
                              {" "}
                              {appointmentdata.doctor.doctorMobile}
                            </td>
                            <td class="px-4 py-3 ">
                              {" "}
                              {appointmentdata.doctor.doctorStatus}
                            </td>
                            <td class="px-4 py-3 ">
                              {" "}
                              {appointmentdata.appointmentReason}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>


              {/* Prescription Details Table */}
              <div class="flex mt-4 w-full mb-4 h-full rounded bg-gray-50 dark:bg-gray-800">
              <section class="bg-gray-50 dark:bg-gray-900 w-full h-full">
                <div class="mx-auto max-w-screen ">
                  <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                      <caption class="w-full p-2 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Prescription Details
                      </caption>
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

                            <th scope="col" class="px-4 py-3 ">
                              Disease
                            </th>
                            <th scope="col" class="px-4 py-3">
                             Allergy
                            </th>

                            <th scope="col" class="px-4 py-3">
                            Prescription
                            </th>
                            <th scope="col" class="px-4 py-3">
                            Prescription Remark
                            </th>

                            <th scope="col" class="px-4 py-3">
                            Prescription Timestamp
                            </th>
                           
                          </tr>
                        </thead>
                        {Prescription && (

                        <tbody>
                          <tr class="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                              {Prescription.disease}
                            </th>
                            <td class="px-4 py-3 ">
                              {" "}
                              {Prescription.allergy}
                            </td>
                            <td class="px-4 py-3 ">
                              {" "}
                              {Prescription.prescription}
                            </td>
                            <td class="px-4 py-3 ">
                              {" "}
                              {Prescription.prescriptionRemark}
                            </td>
                            <td class="px-4 py-3 ">
                              {" "}
                              {Prescription.prescriptionTimestamp}
                            </td>
                           
                          </tr>
                        </tbody>

                        )}
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
