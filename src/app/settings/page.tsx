import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Setting",
  description: "SettingsPage",
  icons: '/logo.svg',
  // для SEO нужно указать openGraph, twitter, robots, verification
};

export default function SettingsPage() {
    return <div>
        Setting Page
    </div>
}