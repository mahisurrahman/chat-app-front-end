
import WorkAreaChatSection from "../WorkAreaChatSection/WorkAreaChatSection";
import WorkAreaChats from "../WorkAreaChats/WorkAreaChats";
import UserAreaUserCreds from "../WorkAreaUserCreds/UserAreaUserCreds";

const WorkArea = () => {
  return (
      <div className="bg-zinc-950 w-full h-full pl-0 md:pl-0 pr-0 md:pr-[0.5vw] py-0 md:py-[2vh] grid grid-cols-1 grid-rows-12 md:grid-rows-9">
        <div className="row-span-2 md:row-span-1">
          <UserAreaUserCreds></UserAreaUserCreds>
        </div>
        <div className="row-span-8 md:row-span-7">
          <WorkAreaChats></WorkAreaChats>
        </div>
        <div className="row-span-2 md:row-span-1">
          <WorkAreaChatSection></WorkAreaChatSection>
        </div>
      </div>
  );
};

export default WorkArea;
