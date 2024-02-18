import { FaRegUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";
import './sidebarNav.css';

const SidebarNav = () => {
  return (
    <div className="mb-[2vh] px-[1vw] py-[2vh] flex justify-between border border-indigo-600 text-zinc-100 rounded-lg text-[2vw] drop-shadow-kit">
      <div>
        <FaRegUserCircle className="duration-700 text-purple-400 hover:text-red-600 hover:cursor-pointer hover:duration-700"></FaRegUserCircle>
      </div>
      <div className="flex gap-4">
        <FaUserPlus className="text-purple-400 duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></FaUserPlus>
        <FaUsers className="text-purple-400 duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></FaUsers>
        <GoPlusCircle className="text-purple-400 duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></GoPlusCircle>
        <FaRegMoon className="text-purple-400 duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></FaRegMoon>
      </div>
    </div>
  );
};

export default SidebarNav;
