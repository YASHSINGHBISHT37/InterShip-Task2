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
        <div className='w-full z-9999999'>
            {/* Main Nav */}
            <div className="px-4 md:px-6 fixed top-0 left-0 w-full py-3 h-14 md:py-4 flex items-center justify-between backdrop-blur-2xl z-99 border-b border-white/15 border-t border-l border-r rounded-t-2xl animate-fade-up opacity-0" style={{ animationDelay: '0ms' }}>
                <div className='flex items-center gap-1.5 min-w-0'>
                    <span className="w-2 h-2 md:w-3 md:h-3 shrink-0 rounded-full bg-[#ff5f56] animate-fade-up opacity-0" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 md:w-3 md:h-3 shrink-0 rounded-full bg-[#ffbd2e] animate-fade-up opacity-0" style={{ animationDelay: '100ms' }} />
                    <span className="w-2 h-2 md:w-3 md:h-3 shrink-0 rounded-full bg-[#27c93f] animate-fade-up opacity-0" style={{ animationDelay: '200ms' }} />
                    <span className="text-sm ml-2 leading-4 font-semibold tracking-tight md:hidden animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>Task 2</span>
                    <span className="text-sm ml-2 leading-4 font-semibold tracking-tight hidden md:block animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>{currentTitle}</span>
                </div>

                <div className='flex items-center gap-2.5 md:gap-5 text-[12px] md:text-[14px] font-medium tracking-tight shrink-0'>
                    {[
                        { to: '/', label: 'Home', delay: '0ms' },
                        { to: '/uc-01', label: 'UC-01', delay: '100ms' },
                        { to: '/uc-02', label: 'UC-02', delay: '200ms' },
                        { to: '/uc-03', label: 'UC-03', delay: '300ms' },
                    ].map(({ to, label, delay }) => (
                        <NavLink
                            key={to}
                            to={to}
                            style={{ animationDelay: delay }}
                            className={({ isActive }) =>
                                `animate-fade-up opacity-0 cursor-pointer transition-colors ${isActive ? 'text-blue-400' : 'hover:text-white/70'}`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Title bar */}
            {!isHome && currentTitle && (
                <div className='fixed z-99 backdrop-blur-2xl bg-[#121212] top-14 left-0 border-b border-white/15 w-full p-2 border-l rounded-b-2xl border-r md:hidden animate-fade-up opacity-0' style={{ animationDelay: '100ms' }}>
                    <span className="text-sm ml-2 leading-4 font-semibold tracking-tight animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>{currentTitle}</span>
                </div>
            )}
        </div>
    )
}