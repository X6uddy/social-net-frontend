import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Calls",
  description: "CallsPage",
  icons: '/logo.svg',
  // для SEO нужно указать openGraph, twitter, robots, verification
};

export default function CallsPage() {
    return <div>
        Calls Page
    </div>
}