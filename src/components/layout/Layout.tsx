import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

import { Sidebar } from "./sidebar/Sidebar";
import styles from './Layout.module.scss';

export default function LayoutClient({children}:PropsWithChildren<unknown>) {
    return (
        <main className={styles.layout}>
            <Sidebar/>
            <section>{children}</section>
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
        </main>
    )
}