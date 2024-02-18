import SidebarChats from "../SidebarChats/SidebarChats";
import SidebarNav from "../SidebarNav/SidebarNav";
import SidebarSearch from "../SidebarSearch/SidebarSearch";

const Sidebar = () => {
  return (
    <div className="bg-zinc-950 w-full h-full px-[1vw] py-[2vh] flex flex-col">
        <SidebarNav></SidebarNav>
        <SidebarSearch></SidebarSearch>
        <SidebarChats></SidebarChats>
    </div>
  );
};

export default Sidebar;
