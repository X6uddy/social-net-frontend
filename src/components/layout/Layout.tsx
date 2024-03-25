'use client'
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

import { Sidebar } from "./sidebar/Sidebar";
import styles from './Layout.module.scss';
import MainProvider from "./MainProvider";

export default function LayoutClient({children}:PropsWithChildren<unknown>) {
    return (
        <MainProvider>
            <main className={styles.layout}>
                <Sidebar/>
                <section>{children}</section>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </main>
        </MainProvider>
    )
}