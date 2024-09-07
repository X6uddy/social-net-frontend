'use client'
import { User } from "lucide-react";
import Image from "next/image";
import dayjs from "dayjs";

import no_profile from '/public/profile.png';
import { IChat } from "@/types/chat.types";
import { useAuth } from "@/hooks/useAuth";
import { getImageUrl } from "@/app/config/get-image-url.config";

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
                    src={getImageUrl(penPal?.avatar?.url) || no_profile} 
                    alt={penPal?.email || ''}
                    width={50}
                    height={70}
                    className="rounded-full border border-black border-opacity-30 bg-white"
                />
            </div>
            <div className="flex justify-between w-[100%]">
                <div className="flex flex-col ml-3">
                    <span>{penPal?.username}</span>
                    <span className="text-sm opacity-30 w-[240px] whitespace-nowrap overflow-hidden text-ellipsis">
                        {lastMessage?.text}
                    </span>
                </div>
                <span className="text-sm opacity-30">{dayjs(lastMessage?.createdAt).format('HH:mm')}</span>
            </div>
        </div>
    )
}
