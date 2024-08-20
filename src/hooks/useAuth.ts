import { useSession } from "next-auth/react";

export function useAuth() {
    const {data, status, } = useSession();
    console.log('use auth', data, 'status:', status)
    
    return {
        user: data?.user,
        isLoggedIn: true,
        status
        // isLoggedIn: status === 'authenticated' // TODO вытаскивать из сессии статус  и обрабатывать в провайдере
    }
}