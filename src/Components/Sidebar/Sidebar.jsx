import SidebarConversations from "../SidebarConversations/SidebarConversations";
// import SidebarLogo from "../SidebarLogo/SidebarLogo";
import SidebarNav from "../SidebarNav/SidebarNav";
import SidebarSearch from "../SidebarSearch/SidebarSearch";

const Sidebar = () => {
  return (
    <div className="h-full py-2 flex flex-col">
      {/* <SidebarLogo></SidebarLogo> */}
      <SidebarNav></SidebarNav>
      <SidebarSearch></SidebarSearch>
      <SidebarConversations className=""></SidebarConversations>
    </div>
  );
};

export default Sidebar;
