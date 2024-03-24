'use client'
import { AtSign, KeyRound } from "lucide-react"

import { Button } from "@/components/ui/button/Button"
import Field from "@/components/ui/field/Field";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuthFormState } from "./auth.types";
import { signIn } from "next-auth/react";

interface IAuth {
    type?: 'Login' | 'Registration'
}

export function Auth({type} : IAuth) {
    const {register, handleSubmit} = useForm<IAuthFormState>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IAuthFormState> = async (data) => {
        if(type === 'Login') {
            await signIn('credentials', {
                redirect: false,
                ...data
            });
        }
    }

    return (
        <div className='flex h-full'>
            <form onSubmit={handleSubmit(onSubmit)} className='m-auto block w-96 border border-[#8d3c3c57] p-8'>
                <h1 className="text-center mb-7">{type}</h1>
                <Field 
                    {...register('email', {
                        required: true
                    })}
                    placeholder="Enter email" 
                    type="email" 
                    Icon={AtSign} 
                    className="mb-7"
                />
                <Field 
                    {...register('password', {
                        required: true
                    })}
                    placeholder="Enter password" 
                    type="password" 
                    Icon={KeyRound}
                    className="mb-8"
                    error={{message: "Неверный пароль", type: 'min'}}
                />
                
                <div className="text-center">
                    <Button 
                        isLoading={false} 
                        type="submit"
                    >
                    {type}
                    </Button>
                </div>
            </form>
        </div>
    )
}
