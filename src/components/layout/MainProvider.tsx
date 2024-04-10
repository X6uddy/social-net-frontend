'use client'
import { SessionProvider } from 'next-auth/react'
import { type PropsWithChildren } from 'react'

import AuthProvider from '@/app/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function MainProvider({ children }: PropsWithChildren<unknown>) {
    const queryClient = new QueryClient();
    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>{children}</AuthProvider>     
            </QueryClientProvider>     
        </SessionProvider>
    )
}
