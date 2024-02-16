import Sidebar from "../../Components/Sidebar/Sidebar";
import WorkArea from "../../Components/WorkArea/WorkArea";

const MainLayout = () => {
  return (
    <div className="bg-gray-800 w-screen h-screen px-10 py-10">
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-1">
            <Sidebar></Sidebar>
        </div>
        <div className="col-span-2">
            <WorkArea></WorkArea>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
