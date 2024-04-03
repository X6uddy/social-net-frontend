import { Search } from "lucide-react";

import Field from "@/components/ui/field/Field";
import { ChatListItem } from "./ChatListItem";

export function ChatsList() {
    return (
        // <div className="divide-y divide-stone-600 divide-opacity-50">
        <div>
            <div className=" border-b border-stone-600 border-opacity-50 p-5">
                <Field
                    placeholder='Search chats'
                    Icon={Search}
                    // className="px-5 pb-5"
                />
            </div>
            <ChatListItem/>
            <ChatListItem/>
            <ChatListItem/>
        </div>
    )
}