'use client'
import { User } from "lucide-react";
import Image from "next/image";

import no_profile from '/public/profile.png';
import { IChat } from "@/types/chat.types";
import { useAuth } from "@/hooks/useAuth";

interface IChatListItem {
    chat: IChat;
}

export function ChatListItem({chat}: IChatListItem) {
    const {user, isLoggedIn} = useAuth();

    const penPal = chat?.participants.find(people => people.email !== user?.email);
    const lastMessage = chat?.messages.at(-1);

    return (
        <div className="p-5 border-b border-stone-600 border-opacity-50 text-sm flex items-center">
            <div>
                <Image 
                    src={penPal?.avatar?.url || no_profile} 
                    alt='ChatUser avatar'
                    width={50}
                    height={70}
                    className="rounded-full border border-black border-opacity-30 bg-white"
                />
            </div>
            <div className="flex justify-between w-[100%]">
                <div className="flex flex-col ml-3">
                    <span>{penPal?.username || 'Мама'}</span>
                    <span className="text-sm opacity-30 w-[240px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {lastMessage?.text || 'Text Text Text Text Text Text Text Text Text Text'}
                    </span>
                </div>
                <span className="text-sm opacity-30">{lastMessage?.createdAt || '12:30'}</span>
            </div>
        </div>
    )
}
