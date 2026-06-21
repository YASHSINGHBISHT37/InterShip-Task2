import { useCase1Data, useCase2Data, useCase3Data } from '../data/Data'

export default function LeftScreen({ data }) {
    return (
        <div className='w-full md:w-470 flex flex-col gap-6 md:gap-8 md:sticky md:top-1 md:self-start md:max-h-[calc(100vh-6rem)] md:overflow-y-auto'>

            <div className='animate-fade-up opacity-0' style={{ animationDelay: '0ms' }}>
                <h1 className='text-sm font-semibold mb-1 hidden md:block'>Problem Statement</h1>
                <h1 className='text-xs md:hidden bg-[#1B1A1A] mb-2 font-medium border border-dashed border-white/15 rounded-full p-1 px-3 w-fit'>Problem Statement</h1>
                <p className='text-xs md:text-sm text-white/60 leading-4 md:leading-5'>{useCase2Data.problem}</p>
            </div>

            <div className='animate-fade-up opacity-0' style={{ animationDelay: '100ms' }}>
                <h1 className='text-sm font-semibold mb-1 hidden md:block'>Target Users</h1>
                <h1 className='text-xs md:hidden bg-[#1B1A1A] mb-2 font-medium border border-dashed border-white/15 rounded-full p-1 px-3 w-fit'>Target Users</h1>
                {useCase2Data.targetUsers.map((item, i) => (
                    <div key={i} className='flex flex-col md:flex-row md:items-center md:gap-2 mb-3 md:mb-1.5'>
                        <h1 className='text-xs md:hidden font-semibold'>{item.title}</h1>
                        <h1 className='text-xs hidden md:block md:text-sm md:bg-[#1B1A1A]/80 font-semibold md:border md:border-dashed border-white/15 rounded-full p-0.5 md:px-2.5 w-fit'>{item.title}</h1>
                        <i className="ph ph-arrow-right text-white md:block hidden text-sm "></i>
                        <p className='text-xs md:text-sm text-white/50'>{item.subTitle}</p>
                    </div>
                ))}
            </div>

            <div className='animate-fade-up opacity-0' style={{ animationDelay: '200ms' }}>
                <h1 className='text-sm font-semibold mb-2 hidden md:block'>Key Features</h1>
                <h1 className='text-xs md:hidden bg-[#1B1A1A] mb-2 font-medium border border-dashed border-white/15 rounded-full p-1 px-3 w-fit'>Key Features</h1>
                {useCase2Data.features.map((item, i) => (
                    <div key={i} className='flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-3 md:mb-1.5'>
                        <h1 className='text-xs hidden md:block md:text-sm bg-[#1B1A1A]/80 font-medium border border-dashed border-white/15 rounded-full p-0.5 px-2.5 w-fit'>{item.title}</h1>
                        <h1 className='text-xs md:hidden font-medium'>{item.title}</h1>
                        <i className="ph ph-arrow-right text-white md:block hidden text-sm "></i>
                        <p className='text-xs md:text-sm text-white/50'>{item.subTitle}</p>
                    </div>
                ))}
            </div>

            <div className='animate-fade-up opacity-0' style={{ animationDelay: '300ms' }}>
                <h1 className='text-sm font-semibold mb-1 hidden md:block'>Business Value</h1>
                <h1 className='text-xs md:hidden bg-[#1B1A1A] mb-2 font-medium border border-dashed border-white/15 rounded-full p-1 px-3 w-fit'>Business Value</h1>
                {useCase2Data.businessValue.map((item, i) => (
                    <div key={i} className='flex items-start gap-2 pl-4 mb-1.5'>
                        <li className='text-xs md:text-sm text-white'>
                            <p className='text-xs md:text-sm text-white/50'>{item}</p>
                        </li>
                    </div>
                ))}
            </div>

            <div className='animate-fade-up opacity-0' style={{ animationDelay: '400ms' }}>
                <h1 className='text-sm font-semibold mb-1 hidden md:block'>Why This Business Would Invest?</h1>
                <h1 className='text-xs md:hidden bg-[#1B1A1A] mb-2 font-medium border border-dashed border-white/15 rounded-full p-1 px-3 w-fit'>Why This Business Would Invest?</h1>
                <p className='text-xs md:text-sm text-white/50 italic'>{useCase2Data.whyInvest}</p>
            </div>

            <div className='animate-fade-up opacity-0 hidden md:block' style={{ animationDelay: '500ms' }}>
                <h1 className='text-sm font-semibold pb-2'>Wireframe Structure</h1>
                <div className='flex gap-1 overflow-x-auto md:flex-wrap md:overflow-visible'>
                    {useCase2Data.wireFrame.map((item, i) => (
                        <div key={i} className='flex items-center gap-2  shrink-0  animate-fade-up opacity-0' style={{ animationDelay: `${100 + i * 100}ms` }}>
                            <span className='text-xs md:text-sm bg-white/5 border border-white/10 border-dashed px-2.5 w-fit rounded-full py-0.5 rounded-full '>{item.name}</span>
                            {i !== useCase2Data.wireFrame.length - 1 && (
                                <i className="ph ph-arrow-right"></i>

                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="md:hidden animate-fade-up opacity-0" style={{ animationDelay: '500ms' }}>
                <h1 className='text-sm font-semibold pb-2'>Wireframe Structure</h1>
                <div className='flex flex-wrap gap-1.5 pb-1 ' >
                    {useCase2Data.wireFrame.map((item, i) => (
                        <div key={i} className='flex items-center gap-1.5 animate-fade-up opacity-0' style={{ animationDelay: `${100 + i * 100}ms` }}>
                            <span className='text-xs bg-white/5 border border-dashed border-white/15 px-3 py-1 rounded-full whitespace-nowrap'>
                                {item.name}
                            </span>
                            {i !== useCase2Data.wireFrame.length - 1 && (
                                <i className="ph ph-arrow-right text-white text-xs"></i>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}