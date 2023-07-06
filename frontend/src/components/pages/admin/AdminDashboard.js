import { React, useState, useEffect } from "react";
import axios from "axios";

import { AdminSidebar } from "../../layout/sidebar/adminsidebar";

export const AdminDashboard = () => {
  const [waitingCount, setWaitingCount] = useState(0);
  const [canceledCount, setCanceledCount] = useState(0);
  const [bookedCount, setBookedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const [totalMalePatient, settotalMalePatient] = useState(0);
  const [totalFemalePatient, settotalFemalePatient] = useState(0);

  // patient count

  const [Available, setAvailable] = useState(0);
  const [Lunch, setLunch] = useState(0);
  const [Leave, setLeave] = useState(0);
  const [dooctorcount, setdooctorcount] = useState(0);

  // fetch appointment data

  const fetch_appointment_data = async () => {
    await axios
      .get("/api/Appointment")
      .then((response) => {
        calculateAppointmentCounts(response.data);
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

  // fetch patient data

  const fetch_patient_data = async () => {
    await axios
      .get("/api/patient")
      .then((response) => {
        calculatePatientCounts(response.data);
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

  // fetch doctor data

  const fetch_doctor_data = async () => {
    await axios
      .get("/api/doctor")
      .then((response) => {
        calculateDoctorCounts(response.data);
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
    fetch_appointment_data();
    fetch_doctor_data();
    fetch_patient_data();
  }, []);

  // calculate appointment data

  const calculateAppointmentCounts = (appointments) => {
    let completed = 0;
    let canceled = 0;
    let booked = 0;
    let total = 0;

    appointments.forEach(function (appointment) {
      if (appointment.appointmentStatus === "completed") {
        completed++;
      } else if (appointment.appointmentStatus === "cancelled") {
        canceled++;
      } else if (appointment.appointmentStatus === "booked") {
        booked++;
      }

      total++;
    });

    setWaitingCount(completed);
    setCanceledCount(canceled);
    setBookedCount(booked);
    setTotalCount(total);
  };

  // calculate appointment data

  const calculateDoctorCounts = (doctors) => {
    let Available = 0;
    let Lunch = 0;
    let Leave = 0;
    let total = 0;

    doctors.forEach(function (doctor) {
      if (doctor.doctorStatus === "Available") {
        Available++;
      } else if (doctor.appointmentStatus === "Lunch") {
        Lunch++;
      } else if (doctor.appointmentStatus === "Leave") {
        Leave++;
      }

      total++;
    });

    setAvailable(Available);
    setLunch(Lunch);
    setLeave(Leave);
    setdooctorcount(total);
  };

  const calculatePatientCounts = (patient) => {
    let male = 0;
    let female = 0;

    patient.forEach(function (patient) {
      if (patient.patientGender === "Male") {
        male++;
      }
      if (patient.patientGender === "Female") {
        female++;
      }
    });

    settotalMalePatient(male);
    settotalFemalePatient(female);
  };

  return (
    <>
      <AdminSidebar />

      <div class="p-2 md:p-4 min-h-screen bg-gray-200 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="flex  items-center justify-center h-58 mb-6 rounded-md  dark:bg-gray-800">
            <div class="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-4">
              <div class="flex w-full items-start p-4 rounded-xl shadow-lg bg-white">
                <div class="flex items-center justify-center bg-blue-50 h-12 w-12 rounded-full border border-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>

                <div class="ml-4">
                  <h2 class="font-semibold">{bookedCount} - Appointment </h2>
                  <p class="mt-2 text-sm text-gray-500">
                    📆 Booked to see doctor
                  </p>
                </div>
              </div>

              <div class="flex items-start p-4 rounded-xl shadow-lg bg-white">
                <div class="flex items-center justify-center bg-orange-50 h-12 w-12 rounded-full border border-orange-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <div class="ml-4">
                  <h2 class="font-semibold">{waitingCount} - Appointment</h2>
                  <p class="mt-2 text-sm text-gray-500">
                    ✅ Finished seeing Doctor
                  </p>
                </div>
              </div>
              <div class="flex items-start p-4 rounded-xl shadow-lg bg-white">
                <div class="flex items-center justify-center bg-red-50 h-12 w-12 rounded-full border border-red-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>

                <div class="ml-4">
                  <h2 class="font-semibold">{canceledCount} - Appointment </h2>
                  <p class="mt-2 text-sm text-gray-500">
                    ❌ Canceled appointment
                  </p>
                </div>
              </div>
              <div class="flex items-start p-4 rounded-xl shadow-lg bg-white">
                <div class="flex items-center justify-center bg-indigo-50 h-12 w-12 rounded-full border border-indigo-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>

                <div class="ml-4">
                  <h2 class="font-semibold">{totalCount} - Appointment</h2>
                  <p class="mt-2 text-sm text-gray-500">
                    🩺 Total Appointments 👨‍⚕️
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex  w-full mb-4 rounded-xl">
            <img
              src="https://media.istockphoto.com/id/626158440/vector/healthy-vector-banner.jpg?s=612x612&w=0&k=20&c=mkCRsqjuBfKmx3tBLN8NG9GuV6vziAYY5klDKAN4QAA="
              className="w-full h-48"
            />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center rounded bg-gray-200  dark:bg-gray-800">
              <div class="grid w-full grid-cols-1 md:grid-cols-2  gap-4">
                <div class="flex w-full items-start p-4 rounded-xl shadow-lg bg-white">
                  <div class="flex items-center justify-center bg-blue-50 h-12 w-12 rounded-full border border-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>

                  <div class="ml-4">
                    <h2 class="font-semibold">{dooctorcount} - Doctor </h2>
                    <p class="mt-2 text-sm text-gray-500">👨‍⚕️ Total Doctor</p>
                  </div>
                </div>

                <div class="flex items-start p-4 rounded-xl shadow-lg bg-white">
                  <div class="flex items-center justify-center bg-orange-50 h-12 w-12 rounded-full border border-orange-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  <div class="ml-4">
                    <h2 class="font-semibold">{Leave} - Doctor</h2>
                    <p class="mt-2 text-sm text-gray-500">🌴 Doctor on Leave</p>
                  </div>
                </div>
                <div class="flex items-start p-4 rounded-xl shadow-lg bg-white">
                  <div class="flex items-center justify-center bg-red-50 h-12 w-12 rounded-full border border-red-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>

                  <div class="ml-4">
                    <h2 class="font-semibold">{Available} - Doctor </h2>
                    <p class="mt-2 text-sm text-gray-500">
                      🩺 Today Available Doctor
                    </p>
                  </div>
                </div>
                <div class="flex items-start p-4 rounded-xl shadow-lg bg-white">
                  <div class="flex items-center justify-center bg-indigo-50 h-12 w-12 rounded-full border border-indigo-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>

                  <div class="ml-4">
                    <h2 class="font-semibold">{Lunch} - Doctor</h2>
                    <p class="mt-2 text-sm text-gray-500">
                      🍝 Doctor went for Lunch
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-200  dark:bg-gray-800">
              <div class="grid w-full grid-cols-1 md:grid-cols-2  gap-4">
                <div class="flex w-full items-start p-4 rounded-xl shadow-lg bg-white">
                  <div class="flex items-center justify-center bg-blue-50 h-12 w-12 rounded-full border border-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>

                  <div class="ml-4">
                    <h2 class="font-semibold">{totalMalePatient} - patient </h2>
                    <p class="mt-2 text-sm text-gray-500">
                      👨‍⚕️ Total Male Patient
                    </p>
                  </div>
                </div>

                <div class="flex items-start p-4 rounded-xl shadow-lg bg-white">
                  <div class="flex items-center justify-center bg-orange-50 h-12 w-12 rounded-full border border-orange-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>

                  <div class="ml-4">
                    <h2 class="font-semibold">
                      {totalFemalePatient} - Patient
                    </h2>
                    <p class="mt-2 text-sm text-gray-500">
                      👩‍⚕️ Total Female Patient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
