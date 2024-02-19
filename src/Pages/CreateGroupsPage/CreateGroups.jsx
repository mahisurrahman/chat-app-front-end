
import { TiTickOutline } from "react-icons/ti";

const CreateGroups = () => {
  return (
      <div className="bg-transparent w-full h-full px-[1vw] py-[2vh]">
        <div className="h-full rounded-lg  px-[1vw] py-[1vh] flex items-center">
          <div className="w-full flex mx-[3vw] px-[2vw] py-[2vh] rounded-lgitems-center">
            <input
              className="w-full bg-transparent outline-none text-3xl md:text-[2vw]"
              type="text"
              name="group_name"
              placeholder="Enter Group Name"
            />
            <button>
              <TiTickOutline className="text-4xl md:text-[3vw] text-zinc-100 duration-700 hover:text-green-500 hover:duration-700 hover:cursor-pointer"></TiTickOutline>
            </button>
          </div>
        </div>
      </div>
  );
};

export default CreateGroups;
