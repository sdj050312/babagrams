'use client'
import React from 'react';
import Header from "../components/Header";

export default function Mainlayout({ children }) {
  return (
    <div className="w-full flex h-screen items-center justify-center">
      {/* 헤더를 전체 너비로 확장 */}
        <Header />


      {/* 컨텐츠 영역 */}
       
          {children}
      
    </div>
  );
}
