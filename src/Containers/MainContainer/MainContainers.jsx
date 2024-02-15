import Sidebar from "../../Components/Sidebar/Sidebar";
import WorkArea from "../../Components/WorkArea/WorkArea";

const MainContainers = () => {
  return (
    <div className="w-[90vw] h-[90vh] bg-[#750E21] border-2 border-[#E3651D] rounded-lg grid gap-2 grid-cols-11">
      <div className="col-span-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-8">
        <WorkArea></WorkArea>
      </div>
    </div>
  );
};

export default MainContainers;
