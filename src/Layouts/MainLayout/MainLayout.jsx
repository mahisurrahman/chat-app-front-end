import { Fade } from "react-awesome-reveal";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import './MainLayout.css';

const MainLayout = () => {

  return (
    <Fade cascade damping={0.2} duration={1000}>
      <div className="bg-zinc-950 w-screen h-screen text-white font-avent-pro">
        <div className="grid grid-cols-12 md:grid-cols-3 h-screen">
          <div className="col-span-2 md:col-span-1">
            <Sidebar></Sidebar>
          </div>
          <div className="col-span-10 md:col-span-2">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MainLayout;
