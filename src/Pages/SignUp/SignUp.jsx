import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Fade cascade damping={0.2} duration={1000}>
      <div className="bg-gradient-to-br from-zinc-950 to-lime-600 h-screen w-screen px-[10vw] py-[10vh] flex justify-center items-center">
        <div className="border-2 h-full w-6/12 rounded-xl flex flex-col justify-start items-center py-[5vh] px-[5vw]">
          <h1 className="font-avent-pro text-4xl font-extrabold text-white">
            Sign-Up Here
          </h1>
          <form className="w-full mt-[4vh]">
            <input
              className="w-full mb-[5vh] px-[1vw] py-[1.5vh] outline-none rounded-lg border-none"
              type="text"
              name="name"
              id=""
              placeholder="Name"
            />
            <br />
            <input
              className="w-full mb-[5vh] px-[1vw] py-[1.5vh] outline-none rounded-lg border-none"
              type="email"
              name="email"
              id=""
              placeholder="Email"
            />
            <br />
            <input
              className="w-full mb-[5vh] px-[1vw] py-[1.5vh] outline-none rounded-lg border-none"
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            <br />
            <div className="w-full flex justify-center">
              <input
                className="text-[2vw] font-avent-pro font-extrabold text-white border-2 px-[4vw] py-[0.15vh] rounded-lg duration-700 hover:duration-700 hover:bg-indigo-950 hover:border-indigo-950 hover:cursor-pointer"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <div className="w-full mt-[2vh] text-white font-bold tracking-widest flex justify-between items-center">
            <h1>
              Old to<span className="text-indigo-400">WizCats Chats</span>?
            </h1>
            <Link to="/">
              <button className="px-[2vw] py-[1vh] border rounded-lg bg-black border-black duration-700 hover:duration-700 hover:bg-transparent hover:border-white hover:cursor-pointer">
                Login
              </button>
            </Link>
          </div>
          <div className="mt-[4vh]">
            <button className="px-[2vw] py-[1vh] rounded-lg text-transparent font-extrabold bg-indigo-400 duration-700 hover:cursor-pointer hover:bg-transparent hover:text-indigo-400 hover:duration-700">
              Sign Up With Google
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default SignUp;
