/* eslint-disable no-unused-vars */


import ChatItems from "../ChatItems/ChatItems";
import "./sidebarChats.css";
import { useState } from "react";

const SidebarChats = () => {
  const [chatData, setChatData] = useState([]);

  return (
      <div className="hidden md:block flex-1 px-[1vw] py-[1vh] text-zinc-100 rounded-lg">
        <div className="overflow-y-auto max-h-[75.5vh]">
         {
          chatData.map(item=> <ChatItems key={item._id} item={item}></ChatItems>)
         }
        </div>
      </div>
  );
};

export default SidebarChats;
