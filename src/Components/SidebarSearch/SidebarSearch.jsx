import { FaSearch } from "react-icons/fa";


const SidebarSearch = () => {
   return (
      <div className="mb-[2vh] px-[1vw] py-[1vh] flex justify-between bg-zinc-50 text-zinc-950 rounded-lg text-[2vw]">
         <div className="flex gap-[2vw] items-center">
            <FaSearch></FaSearch>
            <input className="outline-none" type="text" name="search" placeholder="search" />
         </div>
      </div>
   );
};

export default SidebarSearch;