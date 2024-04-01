'use client'
import { useAuth } from "@/hooks/useAuth";

export function CurrentUser() {
    const {user, isLoggedIn} = useAuth();
    return (
        <div>{user?.username}</div>
    )
}