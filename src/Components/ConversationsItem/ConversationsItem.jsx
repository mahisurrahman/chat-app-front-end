import { FaUserCircle } from "react-icons/fa";

const ConversationsItem = () => {
  return (
    <div className="mb-4 flex items-center gap-2 w-full">
      <div>
        <FaUserCircle className="text-4xl"></FaUserCircle>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="text-xl font-semibold">User Name</h1>
        <div className="text-sm tracking-wider flex justify-between">
          <p className="text-[#16FF00]">Last Message #1</p>
          <p className="text-[#0F6292]">Text Sent</p>
        </div>
      </div>
    </div>
  );
};

export default ConversationsItem;
