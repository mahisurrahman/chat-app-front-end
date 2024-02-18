
import WorkAreaChatSection from "../WorkAreaChatSection/WorkAreaChatSection";
import WorkAreaChats from "../WorkAreaChats/WorkAreaChats";
import UserAreaUserCreds from "../WorkAreaUserCreds/UserAreaUserCreds";

const WorkArea = () => {
  return (
      <div className="bg-transparent w-full h-full pr-[0.5vw] py-[2vh] grid grid-cols-1 grid-rows-9">
        <div className="row-span-1">
          <UserAreaUserCreds></UserAreaUserCreds>
        </div>
        <div className="row-span-7">
          <WorkAreaChats></WorkAreaChats>
        </div>
        <div className="row-span-1">
          <WorkAreaChatSection></WorkAreaChatSection>
        </div>
      </div>
  );
};

export default WorkArea;
