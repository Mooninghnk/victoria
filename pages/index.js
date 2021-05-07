import img from "../public/images/google-logo.png";
import "tailwindcss/tailwind.css";
import back from "../public/images/background.svg";
import emailico from "../public/images/email_black_24dp.svg"
const Login = () => {
  return (
    <div
      style={{ background: `url(${back})`, backgroundColor: "#FD49A0" }}
      className={
        "min-h-screen bg-purple-600 text-gray-800 antialiased py-6 flex-col justify-center sm:py-12"
      }
    >
      <div className={"p-4 relative py-3 sm:max-w-xl sm:mx-auto text-center "}>
        <div className={"mt-4 bg-white shadow-md rounded-lg "}>
          <div className={"h-2 bg-indigo-400 rounded-t-md "}></div>

          <br />
          <span style={{ color: "#2A019E" }} className={"text-5xl font-light "}>
            Login
          </span>
          <br />
          <br />
          <div className={"px-8 py-6 text-center"}>
            <button className="bg-gray-200 hover:bg-gray-400 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
              <img className={"w-8 h-8 mr-2"} src={img}></img>
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
         

            <div className={"px-8 py-6 text-center "}>
              <div className="text-grey-darkest border-4 hover:bg-transparent hover:border-purple-400 bg-gray-200 border-0font-bold py-2 px-4 rounded inline-flex items-center">
                <img className={"w-6 h-6 mr-2"} src={emailico}></img>
                
                <input
                  placeholder="jane.doe@gmail.com"
                  
                  className={
                    "bg-transparent text-grey-darkest  py-2 px-4 rounded inline-flex items-center"
                  }
                  type="email"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
