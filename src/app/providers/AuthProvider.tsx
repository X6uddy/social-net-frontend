'use client'
import { usePathname } from 'next/navigation';
import { useEffect, type PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from "next/navigation";

export default function AuthProvider({ children }: PropsWithChildren<unknown>) {
    const {user, isLoggedIn} = useAuth();
    const pathname = usePathname();
    const router = useRouter();
    useEffect(() => {
        if(isLoggedIn) {
            window.localStorage.setItem('token', user?.jwt || '') // потом переделаю под куки. библиотека js - cookie
        }
    }, [user, isLoggedIn])

    useEffect(() => {
        if(pathname != '/login' && pathname != '/registration') {
            if(!isLoggedIn) router.push('/login')
        } 
    }, [pathname, isLoggedIn])
    return <div>{children}</div>
}
