'use client'

import { Button } from "@/components/ui/button/Button"
import Field from "@/components/ui/field/Field"
import { AtSign, KeyRound } from "lucide-react"

interface IAuth {
    type?: 'Login' | 'Registration'
}

export function Auth({type} : IAuth) {
    return <div>
        <form>
            <Field placeholder="Enter email" type="email" Icon={AtSign}/>
            <Field placeholder="Enter password" type="email" Icon={KeyRound}/>

            <Button isLoading={false}>{type}</Button>
        </form>
    </div>
}
