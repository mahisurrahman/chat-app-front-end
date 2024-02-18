import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import WelcomePage from "../Pages/WelcomePage/WelcomePage";
import WorkArea from "../Components/WorkArea/WorkArea";
import OnlineUsers from "../Components/OnlineUsers/OnlineUsers";
import Groups from "../Components/Groups/Groups";
import CreateGroups from "../Pages/CreateGroupsPage/CreateGroups";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
    children: [
      {
        path: "app",
        element: <MainLayout></MainLayout>,
        children: [
          {
            path: "welcome",
            element: <WelcomePage></WelcomePage>,
          },
          {
            path: "chat",
            element: <WorkArea></WorkArea>,
          },
          {
            path: "users",
            element: <OnlineUsers></OnlineUsers>,
          },
          {
            path: "groups",
            element: <Groups></Groups>
          },
          {
            path: "create-groups",
            element: <CreateGroups></CreateGroups>
          }
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

export default router;
