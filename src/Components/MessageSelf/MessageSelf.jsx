
import { FaRegUserCircle } from "react-icons/fa";

const MessageSelf = () => {
  return (
      <div className="flex justify-end mb-[3vh]">
        <div className="py-[1vh] bg-transparent text-green-400 flex items-center justify-end gap-2">
          <p className="text-xs font-light text-zinc-300">12:00am</p>
          <p className="border-2 border-red-800 rounded-3xl px-3 md:px-[1vw] py-2 md:py-[1vh] max-w-[80%] overflow-wrap break-word text-md md:text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium.
          </p>
          <FaRegUserCircle className="text-8xl md:text-[2vw] text-red-800"></FaRegUserCircle>
        </div>
      </div>
  );
};

export default MessageSelf;
