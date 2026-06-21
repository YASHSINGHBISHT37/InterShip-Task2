import React from 'react'
import { useCase1Data, useCase2Data, useCase3Data } from '../data/Data'

export default function RightScreen({ data }) {
    return (
        <div className='w-full md:w-420 z-9 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 pb-8 animate-fade-up opacity-0' style={{ animationDelay: '200ms' }}>
            {data.wireFrame.map((item, i) => {
                const { Comp } = item
                return (
                    <div key={i} className='border h-120 border-white/20 rounded-2xl border-dashed overflow-hidden flex flex-col  animate-fade-up opacity-0' style={{ animationDelay: `${100 + i * 100}ms` }} >
                        <div className="px-4 w-full py-3 flex items-center gap-1 border-b border-white/20 border-dashed bg-white/5 flex-shrink-0">
                            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
                            <span className="text-[13px] font-semibold ml-1 tracking-wide">0{i + 1} - {item.name}</span>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 min-h-[280px]">
                            <Comp />
                        </div>
                        <div className="px-4 w-full rounded-b-2xl py-4 border-t border-white/20 flex flex-col gap-1.5 border-dashed bg-white/5 flex-shrink-0">
                            {item.notes.map((note, n) => (
                                <div key={n} className="flex gap-2 items-start text-[11px] leading-tight">
                                    <span className="w-3.5 h-3.5 rounded-full text-[8px] flex items-center bg-indigo-600 justify-center flex-shrink-0 pt-0.5 border border-white/30">
                                        {String.fromCharCode(65 + n)}
                                    </span>
                                    <span className="text-white/60">{note}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}