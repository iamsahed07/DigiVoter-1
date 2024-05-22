import { useState } from "react";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";
import client from "../api/client";


function Login() {
  const [loginChoice, setLoginChoice] = useState("aadhaar");
  const [loginInfo, setLoginInfo] = useState({
    mobile: "",
    aadhaar: "",
    pin: "",
  });
  // console.log(loginInfo);

  const navigate = useNavigate();
  const handlelogin = async()=>{
    let response;
    if (loginChoice === "aadhaar") {
      try {
        const { data } = await client.post(
          "/auth/sign-in",
          {
            adhar: loginInfo.aadhaar,
            token: loginInfo.pin,
          },
          {
            params: {
              useAdhar: "yes",
              useMobile: "no",
            },
          }
        );
        response = data;
      } catch (error) {
        alert("aadhar or pin invalid");
        return;
      }
    } else {
      try {
        const { data } = await client.post(
          "/auth/sign-in",
          {
            mobile: loginInfo.mobile,
            token: loginInfo.pin,
          },
          {
            params: {
              useAdhar: "no",
              useMobile: "yes",
            },
          }
        );
        response = data;
      } catch (error) {
        alert("mobile or pin invalid");
        return;
      }
    }
    localStorage.setItem("token",response.jwttoken)
    navigate("/information");
  }
  const handleGetOtp = async()=>{
    if (loginChoice === "aadhaar"){
      if(loginInfo.aadhaar.length !== 12){
        alert("invalid aadhar");
        return;
      }
      try{
        const { data } = await client.post(
          "/auth/sendVerificationToken",
          {
            adhar: loginInfo.aadhaar,
          },
          {
            params: {
              useAdhar: "yes",
              useMobile: "no",
            },
          }
        );
        alert(data.message);
      }catch(error){
        alert("some thing went wrong")
      }
    }else{
      if (loginInfo.mobile.length !== 10) {
        alert("invalid mobile number");
        return;
      }
      try{
        const { data } = await client.post(
          "/auth/sendVerificationToken",
          {
            mobile: loginInfo.mobile,
          },
          {
            params: {
              useAdhar: "no",
              useMobile: "yes",
            },
          }
        );
          alert(data.message);
      }catch(error){
        alert("Something went wrong")
      }
      
    }
  }


  return (
    <>
      <div className="flex items-center justify-center min-h-screen gap-5 bg-blue-300 ">
        <img
          src="./src/assets/home_page.png"
          alt="login page image"
          className="hidden w-2/6 md:block"
        />
        <div className="md:w-[25%] w-[90vw]">
          <Container className={" bg-white px-4 rounded-lg my-2 shadow-lg"}>
            <h1 className="pt-5 pb-4 font-semibold ">
              Log in to your account!
            </h1>
            <div className="flex justify-center mb-4 ">
              <input
                type="radio"
                id="mobile-number"
                name="choice"
                value="mobile-number"
                checked={loginChoice === "mobile-number"}
                onChange={() => setLoginChoice("mobile-number")}
                className="hidden"
              />
              <label
                htmlFor="mobile-number"
                className={`py-2 w-[50%] font-medium text-sm text-center
          ${
            loginChoice === "mobile-number"
              ? "bg-[#116ACF] text-white"
              : "bg-white text-blue-600"
          } border-none rounded-lg`}
              >
                Moblie Number
              </label>
              <input
                type="radio"
                id="aadhaar"
                name="choice"
                value="aadhaar"
                checked={loginChoice === "aadhaar"}
                onChange={() => setLoginChoice("aadhaar")}
                className="hidden"
              />
              <label
                htmlFor="aadhaar"
                className={`py-2 w-[50%] font-medium text-sm text-center
           ${
             loginChoice === "aadhaar"
               ? "bg-[#116ACF] text-white"
               : "bg-white text-blue-600"
           } border-none rounded-lg`}
              >
                Aadhar number
              </label>
            </div>
            <div>
              {loginChoice === "mobile-number" ? (
                <input
                  type="text"
                  className="block w-full px-3 py-1 my-2 text-sm outline-none border-[2px] focus:bg-[#E9ECF1] border-gray-200 rounded-lg disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Mobile Number"
                  value={loginInfo.mobile}
                  onChange={(e) => {
                    setLoginInfo({ ...loginInfo, mobile: e.target.value });
                  }}
                />
              ) : (
                <input
                  type="text"
                  className="block w-full px-3 py-1 my-2 text-sm outline-none border-[2px] focus:bg-[#E9ECF1] border-gray-200 rounded-lg disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Aadhaar"
                  value={loginInfo.aadhaar}
                  onChange={(e) => {
                    setLoginInfo({ ...loginInfo, aadhaar: e.target.value });
                  }}
                />
              )}
              <button className="self-end my-2 text-sm text-[#437BD0] " onClick={handleGetOtp}>
                Get security PIN
              </button>

              <input
                type="text"
                className="block w-full px-3 py-1 my-2 text-sm  outline-none border-[2px] focus:bg-[#E9ECF1] border-gray-200 rounded-lg disabled:opacity-50 disabled:pointer-events-none "
                placeholder="6 digit security PIN"
                value={loginInfo.pin}
                onChange={(e) => {
                  setLoginInfo({ ...loginInfo, pin: e.target.value });
                }}
              />
              <button className="bg-[#116ACF] text-[#E7FFF2] py-2 mt-2 mb-5 rounded-md w-[100%] " onClick={handlelogin}>
                Login
              </button>
            </div>
          </Container>
          {/* <div className="flex justify-center gap-1">
            <h2 className="font-bold text-[#000005] ">
              Do not have an account ?
            </h2>
            <button
              className="text-[#4944D2] font-bold"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Login;
