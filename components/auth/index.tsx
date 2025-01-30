'use client'
import React, { useState } from 'react'
import Login from '../login'
import Register from '../register'

export default function Index() {
    const [view, setView] = useState(false);

    // 상태를 토글하는 함수
    const handleToggle = () => {
        setView(!view);
    };

    return (
        <div className='w-full h-screen flex items-center flex-col justify-center relative bg-purple-200'>
            {view ? (
                <Register />
            ) : (
                <Login/>
            )}

            {/* 버튼 추가: 로그인/회원가입 전환 */}
            <div 
                onClick={handleToggle} 
                className="mt-4 px-4 py-2  bg-blue-500 text-white rounded-md"
            id = "toggle-btn">
                {view ? '가입 하셨음? 로그인하러 가시죠' : '아이디 없음 회원가입 페이지로'}
            </div>
        </div>
    );
}
