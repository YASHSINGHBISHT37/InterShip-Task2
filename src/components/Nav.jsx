import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useCase1Data, useCase2Data, useCase3Data } from '../data/Data'

const titleMap = {
    '/uc-01': useCase1Data.title,
    '/uc-02': useCase2Data.title,
    '/uc-03': useCase3Data.title,
}

export default function Nav() {
    const location = useLocation()
    const currentTitle = titleMap[location.pathname] || ''
    const isHome = location.pathname === '/'

    return (
        <div className='w-full'>
            {/* Main Nav */}
            <div className="px-4 md:px-6 fixed top-0 left-0 w-full py-3 h-14 md:py-4 flex items-center justify-between backdrop-blur-2xl z-99 border-b border-white/15 border-t border-l border-r rounded-t-2xl">
                <div className='flex items-center gap-1.5 min-w-0'>
                    <span className="w-2 h-2 md:w-3 md:h-3 shrink-0 rounded-full bg-[#ff5f56]" />
                    <span className="w-2 h-2 md:w-3 md:h-3 shrink-0 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 h-2 md:w-3 md:h-3 shrink-0 rounded-full bg-[#27c93f]" />
                    <span className="text-sm md:text-sm ml-2 leading-4 font-semibold tracking-tight md:hidden">Task 2</span>
                    <span className="text-sm md:text-sm ml-2 leading-4 font-semibold tracking-tight hidden md:block">{currentTitle}</span>
                </div>

                <div className='flex items-center gap-2.5 md:gap-5 text-[12px] md:text-[14px] font-medium tracking-tigh shrink-0'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-400' : 'cursor-pointer hover:text-white/70'}>Home</NavLink>
                    <NavLink to="/uc-01" className={({ isActive }) => isActive ? 'text-blue-400' : 'cursor-pointer hover:text-white/70'}>UC-01</NavLink>
                    <NavLink to="/uc-02" className={({ isActive }) => isActive ? 'text-blue-400' : 'cursor-pointer hover:text-white/70'}>UC-02</NavLink>
                    <NavLink to="/uc-03" className={({ isActive }) => isActive ? 'text-blue-400' : 'cursor-pointer hover:text-white/70'}>UC-03</NavLink>
                </div>
            </div>

            {/* Title bar — Home pe nahi dikhega */}
            {!isHome && currentTitle && (
                <div className='fixed z-99 backdrop-blur-2xl bg-[#121212] top-14 left-0 border-b border-white/15 w-full p-2 border-l rounded-b-2xl border-r md:hidden'>
                    <span className="text-sm md:text-sm ml-2 leading-4 font-semibold tracking-tight">{currentTitle}</span>
                </div>
            )}
        </div>
    )
}