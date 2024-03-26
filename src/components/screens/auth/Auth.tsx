'use client'
import { AtSign, KeyRound } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button/Button"
import Field from "@/components/ui/field/Field";
import { IAuthFormState } from "./auth.types";
import { getRandomFullName } from "@/utils/get-random-full-name.util";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface IAuth {
    type?: 'Login' | 'Registration'
}

export function Auth({type} : IAuth) {
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit} = useForm<IAuthFormState>({
        mode: 'onChange'
    })
    const {push} = useRouter();

    const onSubmit: SubmitHandler<IAuthFormState> = async (data) => {
        setIsLoading(true)
        const response = await signIn('credentials', type === 'Login' ? {
                redirect: false,
                ...data
            } : 
            {
                redirect: false,
                username: getRandomFullName(),
                ...data
            }
        )
        if(response?.error) {
            setIsLoading(false);
            toast.error(`${response?.error}`)
        } else toast.success(`${type}: Successfully`);
        setIsLoading(false);
        push('/');
    };

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
                        required: true,
                        minLength: {
                            value: 6,
                            message: 'Min lenght 6 symbols'
                        }
                    })}
                    placeholder="Enter password" 
                    type="password" 
                    Icon={KeyRound}
                    className="mb-8"
                    error={{message: "Неверный пароль", type: 'min'}}
                />
                
                <div className="text-center">
                    <Button 
                        isLoading={isLoading} 
                        type="submit"
                    >
                    {type}
                    </Button>
                </div>
            </form>
        </div>
    )
}
