import MessageOthers from "../MessageOthers/MessageOthers";
import MessageSelf from "../MessageSelf/MessageSelf";


const WorkAreaChats = () => {
    return (
        <div className="h-full px-[1vw] py-[2vh] border border-indigo-600 text-zinc-100 rounded-lg font-poppins">
            <MessageOthers></MessageOthers>
            <MessageSelf></MessageSelf>
            <MessageOthers></MessageOthers>
        </div>
    );
};

export default WorkAreaChats;