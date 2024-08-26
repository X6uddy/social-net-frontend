import { useSession } from "next-auth/react";

export function useAuth() {
    const {data, status, } = useSession();
    
    return {
        user: data?.user,
        isLoggedIn: status === 'authenticated' // TODO вытаскивать из сессии статус  и обрабатывать в провайдере
    }
}