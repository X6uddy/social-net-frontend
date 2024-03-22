'use client'
import { AtSign, KeyRound } from "lucide-react"

import { Button } from "@/components/ui/button/Button"
import Field from "@/components/ui/field/Field";

interface IAuth {
    type?: 'Login' | 'Registration'
}

export function Auth({type} : IAuth) {
    return <div className='flex h-full'>
        <form className='m-auto block w-96 border border-[#8d3c3c57] p-8'>
            <h1 className="text-center mb-7">{type}</h1>
            <Field 
                placeholder="Enter email" 
                type="email" 
                Icon={AtSign} 
                className="mb-7"
            />
            <Field 
                placeholder="Enter password" 
                type="email" 
                Icon={KeyRound}
                className="mb-8"
                error={{message: "Неверный пароль", type: 'min'}}
            />
            
            <div className="text-center">
                <Button isLoading={false}>{type}</Button>
            </div>
        </form>
    </div>
}
