
import { IoSend } from "react-icons/io5";

const WorkAreaChatSection = () => {
  return (
      <div className="mt-[2vh] px-[1vw] py-[1vh] flex justify-between items-center border border-indigo-600 text-zinc-100 rounded-lg text-[2vw] font-poppins">
        <textarea
          className="w-full bg-transparent outline-none text-yellow-400 resize-none"
          name="chats"
          id=""
          placeholder="Type Here"
          rows="1"
          wrap="soft"
        ></textarea>{" "}
        <button>
          <IoSend className="duration-700 hover:duration-700 hover:text-green-600 hover:cursor-pointer"></IoSend>
        </button>
      </div>
  );
};

export default WorkAreaChatSection;
