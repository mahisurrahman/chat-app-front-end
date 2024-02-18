
import ChatItems from "../ChatItems/ChatItems";
import "./sidebarChats.css";

const SidebarChats = () => {
  return (
      <div className="flex-1 px-[1vw] py-[1vh] border border-indigo-600 text-zinc-100 rounded-lg drop-shadow-kit ">
        <div className="overflow-y-auto max-h-[75.5vh]">
          <ChatItems></ChatItems>
        </div>
      </div>
  );
};

export default SidebarChats;
