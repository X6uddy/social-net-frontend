import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Friends",
  description: "FriendPage",
  icons: '/logo.svg',
  // для SEO нужно указать openGraph, twitter, robots, verification
};

export default function FriendsPage() {
    return <div>
        Friends Page
    </div>
}