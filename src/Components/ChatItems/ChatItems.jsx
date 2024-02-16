import { FaUserCircle } from "react-icons/fa";

const ChatItems = () => {
  return (
    <div className="w-full font-poppins mb-[2vh]">
      <div className="flex items-center gap-[1vw] w-full">
        <div>
          <FaUserCircle className="text-[4vw]"></FaUserCircle>
        </div>
        <div className="w-full">
          <h1 className="text-[1.5vw] tracking-tighter">Mahisur Rahaman</h1>
          <div className="text-[1vw] flex justify-between">
            <p>Kire! Ki Obstha....</p>
            <p>19:07</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItems;
