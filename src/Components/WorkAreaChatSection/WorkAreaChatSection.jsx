
import { IoSend } from "react-icons/io5";

const WorkAreaChatSection = () => {
  return (
      <div className="mt-0 md:mt-[2vh] px-2 md:px-[1vw] py-4 md:py-[1vh] flex justify-between items-center text-zinc-100 rounded-lg text-[2vw] font-poppins md:mb-0">
        <textarea
          className="w-full text-xl md:text-2xl bg-transparent outline-none text-yellow-400 resize-none"
          name="chats"
          id=""
          placeholder="Type Here"
          rows="1"
          wrap="soft"
        ></textarea>{" "}
        <button>
          <IoSend className="text-2xl duration-700 hover:duration-700 hover:text-green-600 hover:cursor-pointer"></IoSend>
        </button>
      </div>
  );
};

export default WorkAreaChatSection;
