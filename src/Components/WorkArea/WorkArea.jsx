import UserAreaUserCreds from "../WorkAreaUserCreds/UserAreaUserCreds";

const WorkArea = () => {
  return (
    <div className="bg-zinc-950 w-full h-full pr-[0.5vw] py-[1vh] grid grid-cols-1 grid-rows-9">
      <div className="row-span-1">
        <UserAreaUserCreds></UserAreaUserCreds>
      </div>
      <div className="row-span-7">

      </div>
      <div className="row-span-1">

      </div>
    </div>
  );
};

export default WorkArea;
