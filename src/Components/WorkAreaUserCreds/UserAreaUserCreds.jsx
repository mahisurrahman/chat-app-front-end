
import { FaUserCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const UserAreaUserCreds = () => {
  return (
      <div className="mb-0 md:mb-[1vh] px-2 md:px-[1vw] py-4 md:py-[1vh] flex justify-between text-zinc-100 rounded-lg font-poppins">
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-1 md:gap-3 items-center">
            <FaUserCircle className="text-4xl md:text-[3vw] duration-700 hover:cursor-pointer hover:text-green-600 hover:duration-700 text-orange-400"></FaUserCircle>
            <div>
              <h1 className="text-xl md:text-[1vw] text-blue-300">Mahisur Rahaman</h1>
              <p className="text-xs md:text-[0.7vw] uppercase font-bold tracking-widest text-green-400">
                Online
              </p>
            </div>
          </div>
          <div>
            <MdDeleteOutline className="text-3xl md:text-[2vw] duration-700 text-red-500 hover:cursor-pointer hover:text-red-600 hover:duration-700 hover:border-2 hover:rounded-full hover:border-red-600"></MdDeleteOutline>
          </div>
        </div>
      </div>
  );
};

export default UserAreaUserCreds;
