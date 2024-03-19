'use client'

import cn from 'clsx';
import Image from "next/image"
import Link from "next/link";
import {Sun} from "lucide-react";
import { usePathname } from "next/navigation";

import { MENU } from "./sidebar.data";

import styles from './Sidebar.module.scss';

const isLoggedIn = true;

export function Sidebar() {
    const pathname = usePathname();
    return !isLoggedIn ? null : 
    (
        <aside className={styles.sidebar}> 
            <Image src='/logo.svg' priority alt='logo X' width={45} height={45}/>

            <div className={styles.sidebar_links}>
                {MENU.map(item => (
                    <Link 
                        href={item.url} 
                        key={item.url}
                        className={cn({
                            [styles.active]: pathname === item.url,
                        })}
                    >
                        <item.icon size={30}/>
                    </Link>
                ))}
            </div>

            <Sun size={30}/>
        </aside>
    )
}