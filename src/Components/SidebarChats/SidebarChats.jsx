/* eslint-disable no-unused-vars */


import ChatItems from "../ChatItems/ChatItems";
import "./sidebarChats.css";
import { useState } from "react";

const SidebarChats = () => {
  const [chatData, setChatData] = useState([]);

  return (
      <div className="flex-1 px-[1vw] py-[1vh] border border-indigo-600 text-zinc-100 rounded-lg drop-shadow-kit ">
        <div className="overflow-y-auto max-h-[75.5vh]">
         {
          chatData.map(item=> <ChatItems key={item._id} item={item}></ChatItems>)
         }
        </div>
      </div>
  );
};

export default SidebarChats;
