import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import WorkArea from "./Components/WorkArea/WorkArea";
import OnlineUsers from "./Components/OnlineUsers/OnlineUsers";
import Groups from "./Components/Groups/Groups";
import CreateGroups from "./Pages/CreateGroupsPage/CreateGroups";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>}/>
        <Route path="app" element={<MainLayout></MainLayout>}>
          <Route path="welcome" element={<WelcomePage></WelcomePage>}></Route>
          <Route path="chat" element={<WorkArea></WorkArea>}></Route>
          <Route path="users" element={<OnlineUsers></OnlineUsers>}></Route>
          <Route path="groups" element={<Groups></Groups>}></Route>
          <Route path="create-groups" element={<CreateGroups></CreateGroups>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
