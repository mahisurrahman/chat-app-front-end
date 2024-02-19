
import MessageOthers from "../MessageOthers/MessageOthers";
import MessageSelf from "../MessageSelf/MessageSelf";

const WorkAreaChats = () => {
  return (
      <div className="-mt-8 md:-mt-0 h-full px-1 md:px-[1vw] py-3 md:py-[2vh] text-zinc-100 rounded-lg font-poppins overflow-y-auto max-h-[470px] md:max-h-[75vh]">
        <MessageOthers></MessageOthers>
        <MessageSelf></MessageSelf>
        <MessageOthers></MessageOthers>
        <MessageOthers></MessageOthers>
        <MessageOthers></MessageOthers>
        <MessageOthers></MessageOthers>
        <MessageOthers></MessageOthers>
      </div>
  );
};

export default WorkAreaChats;
