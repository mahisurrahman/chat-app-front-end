import { FaRegUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";

const SidebarNav = () => {
  return (
    <div className="mb-[2vh] px-[1vw] py-[2vh] flex justify-between bg-zinc-50 text-zinc-950 rounded-lg text-[2vw]">
      <div>
        <FaRegUserCircle className="duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></FaRegUserCircle>
      </div>
      <div className="flex gap-4">
        <FaUserPlus className="duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></FaUserPlus>
        <FaUsers className="duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></FaUsers>
        <GoPlusCircle className="duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></GoPlusCircle>
        <FaRegMoon className="duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></FaRegMoon>
      </div>
    </div>
  );
};

export default SidebarNav;
