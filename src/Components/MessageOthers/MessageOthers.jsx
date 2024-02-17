import { FaRegUserCircle } from "react-icons/fa";

const MessageOthers = () => {
  return (
    <div className="flex justify-start mb-[3vh]">
      <div className="py-[1vh] bg-transparent text-yellow-300 flex items-center gap-2">
        <FaRegUserCircle className="text-[2vw]"></FaRegUserCircle>
        <p className="border-2 border-indigo-800 rounded-3xl px-[1vw] py-[1vh] max-w-[80%] overflow-wrap break-word text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Laudantium.
        </p>
        <p className="text-xs font-light text-zinc-300">12:00am</p>
      </div>
    </div>
  );
};

export default MessageOthers;
