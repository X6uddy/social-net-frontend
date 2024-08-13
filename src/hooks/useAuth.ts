import { useSession } from "next-auth/react";

export function useAuth() {
    const {data, status,} = useSession();
    
    return {
        user: data?.user,
        isLoggedIn: true
        // isLoggedIn: status === 'authenticated'
    }
}