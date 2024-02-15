import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineGroupAdd } from "react-icons/md";
import { LuPlusCircle } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";

const SidebarNav = () => {
  return (
    <div className="grid grid-cols-8 my-2 m-2 px-3 py-3 rounded-lg bg-[#E3651D]">
      <div className="col-span-3 text-3xl">
        <FaRegUserCircle className="duration-700 hover:text-black hover:cursor-pointer hover:duration-700"></FaRegUserCircle>
      </div>
      <div className="col-span-5 flex text-3xl justify-between">
        <AiOutlineUserAdd className="duration-700 hover:text-black hover:cursor-pointer hover:duration-700"></AiOutlineUserAdd>
        <MdOutlineGroupAdd className="duration-700 hover:text-black hover:cursor-pointer hover:duration-700"></MdOutlineGroupAdd>
        <LuPlusCircle className="duration-700 hover:text-black hover:cursor-pointer hover:duration-700"></LuPlusCircle>
        <FaRegMoon className="duration-700 hover:text-black hover:cursor-pointer hover:duration-700"></FaRegMoon>
      </div>
    </div>
  );
};

export default SidebarNav;
