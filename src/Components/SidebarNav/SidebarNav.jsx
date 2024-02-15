import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineGroupAdd } from "react-icons/md";
import { LuPlusCircle } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  return (
    <div className="grid grid-cols-8 my-2 m-2 px-3 py-3 rounded-lg bg-gray-800">
      <div className="col-span-3 text-2xl">
        <Link>
          <FaRegUserCircle className="duration-700 hover:text-black hover:cursor-pointer hover:duration-700"></FaRegUserCircle>
        </Link>
      </div>
      <div className="col-span-5 flex text-2xl justify-between">
        <Link>
          <AiOutlineUserAdd className="duration-700 hover:text-black hover:cursor-pointer hover:duration-700"></AiOutlineUserAdd>
        </Link>
        <Link>
          <MdOutlineGroupAdd className="duration-700 hover:text-black hover:cursor-pointer hover:duration-700"></MdOutlineGroupAdd>
        </Link>
        <Link>
          <LuPlusCircle className="duration-700 hover:text-black hover:cursor-pointer hover:duration-700"></LuPlusCircle>
        </Link>
        <Link>
          <FaRegMoon className="duration-700 hover:text-black hover:cursor-pointer hover:duration-700"></FaRegMoon>
        </Link>
      </div>
    </div>
  );
};

export default SidebarNav;
