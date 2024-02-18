import { FaSearch } from "react-icons/fa";
import "./SidebarSearch.css";


const SidebarSearch = () => {
  return (
      <div className="mb-[2vh] px-[1vw] py-[1vh] flex justify-between border border-indigo-600 text-zinc-100 rounded-lg text-[2vw] drop-shadow-kit ">
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
  );
};

export default SidebarSearch;
