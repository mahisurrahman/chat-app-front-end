import Sidebar from "../../Components/Sidebar/Sidebar";
import WorkArea from "../../Components/WorkArea/WorkArea";

const MainLayout = () => {
  return (
    <div className="bg-zinc-950 w-screen h-screen text-white font-avent-pro">
      <div className="grid grid-cols-3 h-screen">
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
