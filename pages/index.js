import img from "../public/images/google-logo.png";

const Login = () => {
  return (
    <div
      className={
        "min-h-screen bg-gray-100 text-gray-800 antialiased py-6 flex-col justify-center sm:py-12"
      }
    >
      <div className={"p-2 relative py-3 sm:max-w-xl sm:mx-auto text-center "}>
        <div className={"mt-4 bg-white shadow-md rounded-lg "}>
          <div className={"h-2 bg-indigo-400 rounded-t-md "}></div>

          <br />
          <span className={"text-5xl font-light "}>Login</span>
          <br />
          <br />
          <div className={"px-8 py-6 text-center"}>
            <button className="bg-gray-200 hover:bg-gray-200 text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
              <img className={"w-8 h-8 mr-2"} src={img}></img>
              <span> Login using Google</span>
            </button>
            <br />

            <br />
            <hr className={"w-7/12 h-1 m-auto border-solid border-1.5 border-black"}></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
