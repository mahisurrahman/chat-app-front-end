import ChatItems from "../ChatItems/ChatItems";


const SidebarChats = () => {
   return (
      <div className="flex-1 mb-[2vh] px-[1vw] py-[1vh] bg-zinc-50 text-zinc-950 rounded-lg text-[2vw] overflow-y-auto max-h-[75.5vh]">
         <ChatItems></ChatItems>
         
      </div>
   );
};

export default SidebarChats;