'use client'
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import Field from "@/components/ui/field/Field";
import { ChatListItem } from "./ChatListItem";
import { $fetch } from "@/$api/api.fetch";
import { IChat } from "@/types/chat.types";
import { Loader } from "@/components/ui/loader/Loader";

export function ChatsList() {
    const {data, isLoading} = useQuery({
        queryKey: ['chats'],
        queryFn: () => $fetch.get<IChat[]>('/users/me?populate=*', true)
    })
    console.log(data)
    return (
        <div>
            <div className=" border-b border-stone-600 border-opacity-50 p-5">
                <Field
                    placeholder='Search chats'
                    Icon={Search}
                />
            </div>
            <div>
                {isLoading ?
                    <div className="p-[48%] text-center">
                        <Loader/>
                    </div>
                : 
                data?.length ? data.map(chat => 
                    <ChatListItem key={chat.id} chat={chat} />) : 
                    <ChatListItem key={1} chat={{id: '1', messages: [], participants: []}} />
                    // <ChatListItem key={chat.id} chat={chat} />) : 
                    // <p className="p-4">Chats not founded</p>
                }
            </div>
        </div>
    )
}