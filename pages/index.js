import img from "../public/images/google-logo.png";
import "tailwindcss/tailwind.css";
import back from "../public/images/background.svg";
import emailico from "../public/images/email_black_24dp.svg";
import { useState } from "react";
import passico from "../public/images/pass.svg";
const Login = () => {
  const [login, UpdLogin] = useState("");
  const [pass, UpdPass] = useState("");

  return (
    <div
      style={{ background: `url(${back})`, backgroundColor: "#FD49A0" }}
      className={
        "min-h-screen bg-purple-600 text-gray-800 antialiased py-6 flex-col justify-center sm:py-12"
      }
    >
      <div className={"relative py-3 sm:max-w-xl sm:mx-auto text-center "}>
        <div className={"mt-4 bg-white shadow-md rounded-lg "}>
          <div className={"h-2 bg-indigo-400 rounded-t-md "}></div>

          <br />
          <span style={{ color: "black" }} className={"text-5xl font-bold"}>
            Login
          </span>
          <br />
          <br />
          <div className={"px-10 py-6 text-center"}>
            <button
              onClick={() => console.log(login)}
              className="bg-gray-200 hover:bg-gray-400 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <img className={"w-10 h-10 mr-9"} src={img}></img>
              <span> Login using Google</span>
            </button>
            <br />

            <br />
            <hr
              className={
                "w-7/12 h-1 m-auto border-solid border-1.3 border-black"
              }
            ></hr>
            <br />

            <div className={"px-3 py-4 text-center "}>
              <div className="text-grey-darkest border-4 hover:bg-transparent hover:border-purple-400 bg-gray-200 border-0font-bold py-1 px-4 rounded inline-flex items-center">
                <img className={"w-6 h-6 mr-2"} src={emailico}></img>

                <input
                  placeholder="jane.doe@gmail.com"
                  onChange={(e) => UpdLogin(e.target.value)}
                  className={
                    "bg-transparent text-grey-darkest  py-2 px-4 rounded inline-flex items-center"
                  }
                  type="email"
                ></input>
              </div>
            </div>

            <div className={"px-3 py-4 text-center "}>
              <div className="text-grey-darkest border-4 hover:bg-transparent hover:border-purple-400 bg-gray-200 border-0font-bold py-1 px-4 rounded inline-flex items-center">
                <img className={"w-6 h-6 mr-2"} src={passico}></img>

                <input
                  placeholder="••••••••••••"
                  onChange={(e) => UpdPass(e.target.value)}
                  className={
                    "bg-transparent text-grey-darkest  py-2 px-4 rounded inline-flex items-center"
                  }
                  type="password"
                ></input>
              </div>
            </div>
            <div className={"px-3 py-4 text-center outline-none"}>
              <div className="text-white outline-none border-1 bg-purple-500  hover:border-purple-400   py-1 px-4 rounded inline-flex items-center">
                <button
                style={{outline: "none"}}
                  onClick={() => console.log(login)}
                  className="out bg-purple-500  text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <span  className=" outline-none" >Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
