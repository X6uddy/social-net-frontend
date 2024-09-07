"use client";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import Field from "@/components/ui/field/Field";
import { ChatListItem } from "./ChatListItem";
import { $fetch } from "@/$api/api.fetch";
import { IChat } from "@/types/chat.types";
import { Loader } from "@/components/ui/loader/Loader";
import { useAuth } from "@/hooks/useAuth";
import { useDebounce } from "@/hooks/useDebounce";

//TODO сделать отработку ошибки если чатов нет

export function ChatsList() {
  const { user, isLoggedIn } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm);

  const { data, isLoading, isFetching, isError} = useQuery({
    queryKey: ["chats", debouncedSearchTerm],
    queryFn: () =>
      $fetch.get<{ data: IChat[] }>(
        // TODO &filters[$or][1][messages][text][$contains]=${debouncedSearchTerm} по сообщениям
        `/chats?sort=createdAt:desc&populate[messages]=*&populate[participants][populate][avatar]=*&filters[participants][email][$eq]=${user?.email}&filters[$or][0][participants][username][$contains]=${debouncedSearchTerm}`,
        true
      ),
    enabled: isLoggedIn,
  });
  console.log(data);

  return (
    <div>
        <div className=" border-b border-stone-600 border-opacity-50 p-5">
            <Field
            placeholder="Search chats"
            Icon={Search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div>
            {isLoading || isFetching ? (
                <div className='p-layout'>
                    <Loader />
                </div>
			) : 
            (
                data?.data.map(chat => {
                    return <ChatListItem key={chat.id} chat={chat} />
                })
            )}
        </div>
    </div>
  );
}
