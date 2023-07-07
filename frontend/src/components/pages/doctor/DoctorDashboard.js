import {React,useState,useEffect} from "react";
import { DoctorSidebar } from "../../layout/sidebar/doctorsidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ImageCarousel } from "./components/ImageSlider";
export const DoctorDashboard = () => {

  const [waitingCount, setWaitingCount] = useState(0);
  const [canceledCount, setCanceledCount] = useState(0);
  const [bookedCount, setBookedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

    // fetch appointment data
    const [appointmentdata, setAppointmentdata] = useState([]);

    const fetch_appointment_data = async () => {
      await axios
        .get(
          "/api/Appointment/doctor/" +
            JSON.parse(sessionStorage.getItem("doctor_key")).userid
        )
        .then((response) => {
          setAppointmentdata(response.data);
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
  
    useEffect(() => {
      fetch_appointment_data();
    }, []);


    // calculate appointment data
    

  const calculateAppointmentCounts = (appointments) => {
    let waiting = 0;
    let canceled = 0;
    let booked = 0;
    let total = 0;

    appointments.forEach(function(appointment) {
      if (appointment.appointmentStatus === "waiting") {
        waiting++;
      } else if (appointment.appointmentStatus === "cancelled") {
        canceled++;
      } else if (appointment.appointmentStatus === "booked") {
        booked++;
      }

    
      total++;
      
    });

    setWaitingCount(waiting);
    setCanceledCount(canceled);
    setBookedCount(booked);
    setTotalCount(total);
  };


  return (
    <>
      <DoctorSidebar />

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
                   ⏰ waiting to see doctor
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
                   ❌ Canceled  appointment
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

          <div class="flex items-center justify-center h-58 mb-4 rounded-md bg-gray-50 dark:bg-gray-800">
            <img
              src="https://cdn.askapollo.com/uat/assets/images/surgicalprocedure_n.webp"
              className="w-full h-full"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
