'use client'
import Image from "next/image";

import { useAuth } from "@/hooks/useAuth";
import no_profile from '/public/profile.png';
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function CurrentUser() {
    const {user, isLoggedIn} = useAuth();
    const {push} = useRouter();
    return (
        <div className="px-4 py-2 flex items-center justify-between" >
            <div className="flex items-center" >
                <Image 
                    src={user?.avatar || no_profile} 
                    alt='user avatar' 
                    height={50}
                    width={60} 
                    className="mr-3 rounded-full border border-black border-opacity-30"
                    priority
                />
                <div className="flex flex-col">
                    <span>{user?.username}</span>
                    <span className="text-sm opacity-30">Frontend_dev</span>
                </div>
                {/* <CircleEllipsis/> */}
            </div>
            <button 
                onClick={() => signOut({redirect: false})
                    .then(() => {
                        window.localStorage.removeItem('token')
                        push('/login')
                    })
            }>
                <LogOut/>
            </button>
        </div>
    )
}