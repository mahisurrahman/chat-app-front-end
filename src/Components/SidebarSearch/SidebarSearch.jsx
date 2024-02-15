import { CiSearch } from "react-icons/ci";

const SidebarSearch = () => {
  return (
    <div className="my-2 mx-2 px-3 py-3 rounded-lg bg-gray-800">
      <div className="flex border-2 border-[#FFED00] items-center gap-2 px-4 py-1 rounded-lg">
        <CiSearch className="text-2xl"></CiSearch>
        <input className="bg-transparent w-full placeholder:text-lg px-2 py-1 border-none outline-none text-[#FFED00]" type="text" name="search" id="" placeholder="Search" />
      </div>
    </div>
  );
};

export default SidebarSearch;
