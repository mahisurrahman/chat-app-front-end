import SidebarNav from "../SidebarNav/SidebarNav";
import SidebarSearch from "../SidebarSearch/SidebarSearch";

const Sidebar = () => {
  return (
    <div className="bg-zinc-950 w-full h-full px-[1vw] py-[1vh]">
        <SidebarNav></SidebarNav>
        <SidebarSearch></SidebarSearch>
    </div>
  );
};

export default Sidebar;
