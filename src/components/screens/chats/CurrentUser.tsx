'use client'
import Image from "next/image";

import { useAuth } from "@/hooks/useAuth";
import no_profile from '/public/profile.png';

export function CurrentUser() {
    const {user, isLoggedIn} = useAuth();
    return (
        <div className="p-2 flex items-center outline outline-1 outline-stone-600" >
            <Image 
                src={user?.avatar || no_profile} 
                alt='user avatar' 
                height={50}
                width={70} 
                className="mr-3"
            />
            <div className="flex flex-col">
                <span>{user?.username}</span>
                <span className=" text-sm opacity-30">Frontend_dev</span>
            </div>
            {/* <CircleEllipsis/> */}
        </div>
    )
}