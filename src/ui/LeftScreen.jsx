import React from 'react'

export default function LeftScreen({ data }) {
    return (
        <div className='w-full h-full flex flex-col gap-6 md:gap-8'>

            {/* Problem Statement */}
            <div>
                <h1 className='text-sm md:text-md font-semibold mb-1'>Problem Statement</h1>
                <h1 className='text-xs md:text-sm text-white/50  leading-4'>{data.problem}</h1>
            </div>

            {/* Target Users */}
            <div>
                <h1 className='text-sm md:text-md font-semibold mb-2'>Target Users</h1>
                {data.targetUsers.map((item, i) => (
                    <div key={i} className='flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-2.5 md:mb-1.5'>
                        <h1 className='text-xs md:text-sm bg-[#1B1A1A]/80 font-semibold border border-dashed border-white/15 rounded-full p-0.5 px-2.5 w-fit'>{item.title}</h1>
                        <i className="fa-solid fa-arrow-right-long text-white/70 hidden md:block"></i>
                        <h1 className='text-xs md:text-sm text-white/50'>{item.subTitle}</h1>
                    </div>
                ))}
            </div>

            {/* Key Features */}
            <div>
                <h1 className='text-sm md:text-md font-semibold mb-2'>Key Features</h1>
                {data.features.map((item, i) => (
                    <div key={i} className='flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-2.5 md:mb-1.5'>
                        <h1 className='text-xs md:text-sm bg-[#1B1A1A]/80 font-medium border border-dashed border-white/15 rounded-full p-0.5 px-2.5 w-fit'>{item.title}</h1>
                        {/* <i className="ph ph-arrow-right text-white/90 hidden md:block"></i> */}
                        {/* <h1 className='text-xs md:text-sm text-white/50'>{item.subTitle}</h1> */}
                    </div>
                ))}
            </div>

            {/* Business Value */}
            <div>
                <h1 className='text-sm md:text-md font-semibold mb-1'>Business Value</h1>
                {data.businessValue.map((item, i) => (
                    <div key={i} className='flex items-center gap-2 pl-4 mb-1.5'>
                        <li className='text-xs md:text-sm text-white/50'>{item}</li>
                    </div>
                ))}
            </div>

            {/* Why This Business Would Invest ? */}
            <div>
                <h1 className='text-sm md:text-md font-semibold mb-1'>Why This Business Would Invest ?</h1>
                <p className='text-xs md:text-sm text-white/50 italic'>{data.whyInvest}</p>
            </div>

            {/* Wireframe Structure */}
            <div>
                <h1 className='text-sm md:text-md font-semibold'>Wireframe Structure</h1>
                <div className='flex items-center gap-1.5 mt-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible'>
                    {data.wireFrame.map((item, i) => (
                        <div key={i} className='flex items-center gap-2 shrink-0'>
                            <h1 className='text-xs md:text-sm bg-[#1B1A1A]/80 border border-dashed border-white/20 rounded-full p-1 px-3.5 whitespace-nowrap'>{item.name}</h1>
                            {i !== data.wireFrame.length - 1 && (
                                <i className="ph ph-arrow-right text-white/90"></i>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}