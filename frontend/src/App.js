import React from 'react'
import firebase from './components/config/firebase-config';
const App = () => {
  const [mobile,setMobile] = React.useState("");

 function handleChange  (e) {
    const {name, value } = e.target
    // this.setState({
    //     [name]: value
    //   })
    setMobile(e.target.value)

  }
  function configureCaptcha () {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  function  onSignInSubmit  (e) {
    e.preventDefault()
    configureCaptcha()
    const phoneNumber = "+91" + mobile;
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });
  }
  function onSubmitOTP  (e) {
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={(e) => onSignInSubmit(e)}>
          <div id="sign-in-button"></div>
          <input type="number" name="mobile" placeholder="Mobile number" required onChange={(e) =>handleChange(e)}/>
          <button type="submit">Submit</button>
        </form>

        <h2>Enter OTP</h2>
        <form onSubmit={() => onSubmitOTP()}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={(e) => handleChange(e)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  
}
export default App