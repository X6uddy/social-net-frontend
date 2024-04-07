import { User } from "lucide-react";
import Image from "next/image";

import no_profile from '/public/profile.png';
import { IChat } from "@/types/chat.types";

interface IChatListItem {
    
}

export function ChatListItem({}: IChat) {
    return (
        <div className="p-5 border-b border-stone-600 border-opacity-50 text-sm flex items-center">
            <div>
                <Image 
                    src={no_profile} 
                    alt='ChatUser avatar'
                    width={50}
                    height={70}
                    className="mr-3 rounded-full border border-black border-opacity-30 bg-white"
                />
            </div>
            <div className="flex flex-col">
                <span>Мама</span>
                <span className="text-sm opacity-30">Чтобы к 20:00 был дома!</span>
            </div>
        </div>
    )
}
