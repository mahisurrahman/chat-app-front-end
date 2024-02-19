import { FaRegUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import "./sidebarNav.css";
import { Link } from "react-router-dom";

const SidebarNav = () => {

  return (
    <div className="mb-[2vh] px-[1vw] py-[2vh] flex justify-between border border-indigo-600 text-zinc-100 rounded-lg text-[2vw] drop-shadow-kit">
      <div>
        <Link to="/app/welcome">
          <FaRegUserCircle className="duration-700 text-purple-400 hover:text-red-600 hover:cursor-pointer hover:duration-700"></FaRegUserCircle>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/app/users">
          <FaUserPlus className="text-purple-400 duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></FaUserPlus>
        </Link>
        <Link to="/app/groups">
          <FaUsers className="text-purple-400 duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></FaUsers>
        </Link>
        <Link to="/app/create-groups">
          <GoPlusCircle className="text-purple-400 duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></GoPlusCircle>
        </Link>
      </div>
    </div>
  );
};

export default SidebarNav;
