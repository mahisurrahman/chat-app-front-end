import { Fade } from "react-awesome-reveal";
import Sidebar from "../../Components/Sidebar/Sidebar";
import OnlineUsers from "../../Components/OnlineUsers/OnlineUsers";
// import CreateGroups from "../../Pages/CreateGroupsPage/CreateGroups";
// import WorkArea from "../../Components/WorkArea/WorkArea";
// import WelcomePage from "../../Pages/WelcomePage/WelcomePage";

const MainLayout = () => {
  return (
    <Fade cascade damping={0.2} duration={1000}>
      <div className="bg-zinc-950 w-screen h-screen text-white font-avent-pro">
        <div className="grid grid-cols-3 h-screen">
          <div className="col-span-1">
            <Sidebar></Sidebar>
          </div>
          <div className="col-span-2">
            {/* <CreateGroups></CreateGroups> */}
            {/* <WelcomePage></WelcomePage> */}
            {/* <WorkArea></WorkArea> */}
            <OnlineUsers></OnlineUsers>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default MainLayout;
