
import { FaUserCircle } from "react-icons/fa";

const OnlineUserSingle = () => {
  return (
      <div className="px-[2vw] py-[2vh] border-none rounded-lg my-[2vh] flex items-center gap-5 md:gap-[1vw] duration-700 hover:bg-black hover:cursor-pointer hover:duration-700 hover:border-black">
        <FaUserCircle className="text-5xl md:text-[2vw] text-lime-500"></FaUserCircle>
        <h1 className="font-poppins text-2xl md:text-[1.25vw] text-yellow-400 font-bold tracking-widest">
          User #1
        </h1>
      </div>
  );
};

export default OnlineUserSingle;
