import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChatItems = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate('chat')}} className="duration-700 w-full font-poppins mb-[2vh] hover:bg-zinc-600 hover:cursor-pointer hover:duration-700 py-[0.5vh] px-[0.5vw] rounded-lg">
      <div className="flex items-center gap-[1vw] w-full">
        <div>
          <FaUserCircle className="text-[3vw] text-indigo-600"></FaUserCircle>
        </div>
        <div className="w-full">
          <h1 className="text-[1.2vw] tracking-tighter text-green-400">Mahisur Rahaman</h1>
          <div className="text-[0.9vw] flex justify-between">
            <p className="text-blue-300">Kire! Ki Obstha....</p>
            <p className="text-yellow-300">19:07</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItems;
