import OtpInput from "react-otp-input";
import PhoneInput from 'react-phone-input-2'
import { useState } from "react";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function Login() {
    const [otp, setOtp] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);

    function onCaptchVerify() {
        console.log('onCaptchVerify')
        if (!window.recaptchaVerifier) {
          window.recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {
              size: "invisible",
              callback: (response) => {
                onSignup();
              },
              "expired-callback": () => {},
            }
          );
        }
      }
    
      function onSignup() {
        console.log("onSignup")
        setLoading(true);
        onCaptchVerify();
    
        const appVerifier = window.recaptchaVerifier;
    
        const formatPh = "+" + phone;
    
        signInWithPhoneNumber(auth, formatPh, appVerifier)
          .then((confirmationResult) => {
            console.log("signInWithPhoneNumber")
            console.log("confirmationResult:"+confirmationResult.toString());
            window.confirmationResult = confirmationResult;
            setLoading(false);
            setShowOTP(true);
            console.log("OTP sended successfully!");
          })
          .catch((error) => {
            // window.recaptchaVerifier.render().then(function(widgetId) {
            //     grecaptcha.reset(widgetId);
            // });
            console.log("error");
            console.log(error);
            setLoading(false);
          });
      }
    
      function onOTPVerify() {
        console.log("onOTPVerify");
        setLoading(true);
        window.confirmationResult
          .confirm(otp)
          .then(async (res) => {
            console.log(JSON.stringify(res));
            setUser(res.user);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            
            setLoading(false);
          });
      }

    return (
        <div className="home">
            <div> Enter your phone: </div>

            <PhoneInput
                value={phone}
                onChange={(phone) => setPhone( phone )}
            />

            <div> Enter your code: </div>
            <div id="recaptcha-container"></div>
            <button onClick={onSignup}> get otp</button>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                otpType="number"
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
            />
            <button onClick={onOTPVerify}> send otp</button>
        </div>
    );
}

export default Login;
