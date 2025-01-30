'use client'
import React from "react";
import Link from "next/link";
import { Home, Logout, People, Search, Send } from "@mui/icons-material"

export default function Header() {
  return (
    <aside className="w-fit h-screen p-6 border-r border-gray-300 flex flex-col justify-between">
      {/* Home버튼 + People Page ~ Chat Page */}
      <div className="flex flex-col gap-4">
        <Link href="/">
          <Home></Home>
        </Link>
        <Link href="/people">
          <People></People>
       </Link>
        <Link href="/discover">
          <Search></Search>
        </Link>
        <Link href="/chat">
          <Send></Send>
        </Link>
      </div>
      {/* Logout Button */}
      <div>
        <button onClick={() => console.log("logout")}>
          <Logout className="text-2xl text-deep-purple-900" />
        </button>
      </div>
    </aside>
  );
}
