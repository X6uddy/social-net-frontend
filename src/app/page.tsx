import { ChatsList } from "@/components/screens/chats/chatList/ChatList";
import { CurrentUser } from "@/components/screens/chats/CurrentUser";
import { Chat } from "@/components/screens/chats/Chat";

export default function ChatsPage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: ".8fr 3fr",
      }}
    >
      <div>
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
