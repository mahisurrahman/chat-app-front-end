
import { FaUserCircle } from "react-icons/fa";

const GroupsSingle = () => {
  return (
      <div className="px-[2vw] py-[2vh] border-2 border-indigo-800 rounded-lg my-[2vh] flex items-center gap-[1vw] duration-700 hover:bg-black hover:cursor-pointer hover:duration-700 hover:border-black">
        <FaUserCircle className="text-[2vw] text-lime-500"></FaUserCircle>
        <h1 className="font-poppins text-[1.25vw] text-yellow-400 font-bold tracking-widest">
          Group #1
        </h1>
      </div>
  );
};

export default GroupsSingle;
