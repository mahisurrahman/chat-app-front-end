import { LiaCatSolid } from "react-icons/lia";

const SidebarLogo = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <LiaCatSolid className="text-5xl border border-[#FFED00] rounded-full"></LiaCatSolid>
            <h1 className="text-3xl font-semibold">WizCats Chats</h1>
        </div>
    );
};

export default SidebarLogo;