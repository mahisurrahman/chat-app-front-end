
import wizcatschatsimage from "../../assets/chatIcon.png";

const WelcomePage = () => {
  return (
      <div className="bg-transparent w-full h-full px-[1vw] py-[2vh]">
        <div className="flex flex-col justify-center items-center w-full h-full border-2 rounded-lg border-indigo-800">
          <h1 className="font-avent-pro text-[4vw] text-purple-500">
            Hi! Welcome to WizCats Chats
          </h1>
          <img className="w-[30vw] h-[60vh]" src={wizcatschatsimage} alt="" />
        </div>
      </div>
  );
};

export default WelcomePage;
