'use client'
import { AtSign, KeyRound } from "lucide-react"

import { Button } from "@/components/ui/button/Button"
import Field from "@/components/ui/field/Field"

import styles from './Auth.module.scss';

interface IAuth {
    type?: 'Login' | 'Registration'
}

export function Auth({type} : IAuth) {
    return <div className='flex w-screen h-full'>
        <form className='m-auto block w-96 border border-rose-500 p-5'>
            <h1 className="text-center">{type}</h1>
            <Field placeholder="Enter email" type="email" Icon={AtSign}/>
            <Field placeholder="Enter password" type="email" Icon={KeyRound}/>
            <br/>
            <Button isLoading={true}>{type}</Button>
        </form>
    </div>
}
