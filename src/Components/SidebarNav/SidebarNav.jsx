import { FaRegUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import "./sidebarNav.css";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const SidebarNav = () => {

  return (
    <div className="mb-[2vh] px-[1vw] py-[8vh] md:py-[2vh] flex flex-col md:flex-row gap-40 md:gap-0 justify-start md:justify-between items-center md:h-15 text-zinc-100 rounded-lg text-[10vw] md:text-[2vw]">
      <div>
          <FaRegUserCircle className="text-purple-400"></FaRegUserCircle>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-4">
        <Link to="/app/welcome">
          <IoHome className="text-purple-400 duration-700 hover:text-red-600 hover:cursor-pointer hover:duration-700"></IoHome>
        </Link>
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
