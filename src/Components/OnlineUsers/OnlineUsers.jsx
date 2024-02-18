import { FaSearch } from "react-icons/fa";
import image01 from "../../assets/chatIcon.png";
import OnlineUserSingle from "../OnlineUserSingle/OnlineUserSingle";

const OnlineUsers = () => {
  return (
      <div className="bg-transparent w-full h-full px-[1vw] py-[2vh] flex flex-col">
        <div className="border-2 border-indigo-800 h-full rounded-lg px-[2vw] py-[2vh]">
          <div className="flex items-center gap-[1vw]">
            <img className="w-[5vw] h-[10vh]" src={image01} alt="" />
            <h1 className="text-[2vw] font-extrabold font-avent-pro text-lime-500">
              Online users...
            </h1>
          </div>
          <div className="mt-[2vh] border-2 font-poppins border-indigo-800 py-[1vh] px-[1vw] rounded-lg">
            <div className="flex gap-[2vw] items-center">
              <FaSearch className="text-purple-400 duration-700 hover:text-yellow-600 hover:cursor-pointer hover:duration-700"></FaSearch>
              <input
                className="bg-transparent outline-none"
                type="text"
                name="search"
                placeholder="search"
              />
            </div>
          </div>
          <div className="mt-[1vh] overflow-y-auto max-h-[70vh]">
            <OnlineUserSingle></OnlineUserSingle>
          </div>
        </div>
      </div>
  );
};

export default OnlineUsers;
