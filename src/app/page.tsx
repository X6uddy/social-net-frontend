import { ChatsList } from "@/components/screens/chats/list/ChatList";
import { CurrentUser } from "@/components/screens/chats/CurrentUser";
import { Chat } from "@/components/screens/chats/chat/Chat";

export default function ChatsPage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: ".8fr 3fr",
      }}
    >
      <div className="flex flex-col border-r border-stone-600 border-opacity-50 divide-y divide-stone-600 divide-opacity-50">
        <CurrentUser />
        <ChatsList />
      </div>

      <div>
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  );
}
