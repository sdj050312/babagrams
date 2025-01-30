"use client";
import React from "react";
import { useState } from "react";

export default function Login() {
  const [inputId, setInput] = useState("");
  const [password, setPassword] = useState("");


  return (
    <>    <div className="w-80  text-center h-80 flex items-center justify-center flex-col bg-white rounded-md">
      <h1 className="mb-4 text-2xl font-bold">할머니 그램</h1>
      <input
        type="email"
        value={inputId}
        onChange={(e) => setInput(e.target.value)}
        className="border-solid border-2 border-gray-500 mb-2 rounded-lg p-2"
        placeholder="email"
      />

      <input
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        className="border-solid border-2 border-gray-500 rounded-lg p-2"
        placeholder="password"
      />
      <button
        type="submit"
        className="bg-blue-500 mt-5 p-2 rounded-lg text-white font-bold"
      >
        로그인
      </button>
    </div>
     
    </>

  );
}
