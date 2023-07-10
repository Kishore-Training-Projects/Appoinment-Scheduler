import React from "react";
import firebase from "../../../config/firebase-config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const UserLogin = () => {
  const [mobile, setMobile] = React.useState("");
  const [otp, setOtp] = React.useState("");

  const navigate = useNavigate();

  const [userdata, setUserdata] = React.useState();
  const [otpVerified, setOtpVerified] = React.useState(false);

  // tokendata
  const userprofile = {
    userid: "",
    name: "",
    profile: "",
    mobile: "",
    acc_type: "",
  };

  const [otpsent, setOtpsent] = React.useState(false);

  function handleChange(e) {
    setMobile(e.target.value);
  }
  function configureCaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("Recaptca verified");
        },
        defaultCountry: "IN",
      }
    );
  }
  function onSignInSubmit() {
    configureCaptcha();
    const phoneNumber = "+91" + mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        toast.success('OTP has been sent 💬', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
       
        setOtpsent(true);
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("SMS not sent");
      });
  }
  function onSubmitOTP(e) {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        // console.log(JSON.stringify(user));
        console.log("User is verified");

        setOtpVerified(true);

        userprofile.userid = userdata["patientId"];
        userprofile.name = userdata["patientName"];
        userprofile.mobile = userdata["patientMobile"];
        userprofile.acc_type = "patient";

        sessionStorage.setItem("student_key", JSON.stringify(userprofile));

        toast.success('OTP verified sucess', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
  
  
        setTimeout(() => {
          navigate("/user/dashboard");
        }, 4000);

        

        // ...
      })
      .catch((error) => {

        toast.error('Invalid otp ⚠', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
 
          
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }

  // fetch Patient details by mobile

  const fetchData = async (e) => {
    e.preventDefault();
    await fetch("http://appoinmentscheduler-dev.us-east-1.elasticbeanstalk.com/api/Patient/search/" + mobile)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Resource not found");
          } else {
            throw new Error("Network response was not ok");
          }
        }
        return response.json();
      })
      .then((data) => {
        setUserdata(data);
        onSignInSubmit();
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        toast.error('Invalid Mobile Number ⚠', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      
        console.error("Error:", error.message);
      });
  };

  return (
    
    <>
      <div className="mt-7">
        {/* mobile number form */}

      

        <form className="space-y-4 md:space-y-6" onSubmit={(e) => fetchData(e)}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Mobile Number
            </label>
            <div className="flex items-center">
              <div id="sign-in-button"></div>

              <input
                type="text"
                className="w-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value="+ 91"
                disabled
              />

              <input
                type="number"
                name="mobile"
                onChange={(e) => handleChange(e)}
                className="mx-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Number"
                required
                disabled={otpsent}
              />
            </div>
          </div>

          {!otpsent && (
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send OTP
            </button>
          )}
        </form>

        {/* otp form */}

        {otpsent && (
          <form
            className="space-y-4 md:space-y-6 mt-6"
            onSubmit={(e) => onSubmitOTP(e)}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your OTP
              </label>
              <input
                type="number"
                name="otp"
                onChange={(e) => setOtp(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="XXXXXX"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>

      <div className="flex justify-center items-center mt-6">
        <a
          onClick={() => {
            navigate("/register");
          }}
          target="_blank"
          className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
        >
          <span>
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </span>
          <span className="ml-2">You don't have an account?</span>
        </a>
      </div>
    </>
  );
};
