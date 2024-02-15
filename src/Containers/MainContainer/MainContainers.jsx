import Sidebar from "../../Components/Sidebar/Sidebar";
import WorkArea from "../../Components/WorkArea/WorkArea";

const MainContainers = () => {
  return (
    <div className="w-full h-full bg-[#000000] grid gap-2 grid-cols-11">
      <div className="col-span-3 h-full">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-8 h-full">
        <WorkArea></WorkArea>
      </div>
    </div>
  );
};

export default MainContainers;
