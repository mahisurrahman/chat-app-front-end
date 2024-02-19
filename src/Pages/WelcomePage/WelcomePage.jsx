
import wizcatschatsimage from "../../assets/chatIcon.png";

const WelcomePage = () => {
  return (
      <div className="bg-transparent w-full h-full px-[1vw] py-[2vh]">
        <div className="flex flex-col justify-center items-center w-full h-full rounded-lg">
          <h1 className="text-center font-avent-pro text-[10vw] md:text-[4vw] text-purple-500">
            Hi! Welcome to WizCats Chats
          </h1>
          <img className="w-[60vw] md:w-[30vw] h-[60vh] hidden md:block " src={wizcatschatsimage} alt="" />
        </div>
      </div>
  );
};

export default WelcomePage;
