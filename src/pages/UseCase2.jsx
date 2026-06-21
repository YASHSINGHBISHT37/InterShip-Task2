import LeftScreen from '../ui/LeftScreen'
import RightScreen from '../ui/RightScreen'
import { useCase2Data } from '../data/Data'




export default function UseCase2() {
    return (
        <div className='w-full h-screen border border-white/14 rounded-2xl px-6 pt-28 md:pt-20 pb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10 overflow-hidden overflow-y-scroll text-white'>
            <LeftScreen data={useCase2Data} />
            <RightScreen data={useCase2Data} />
        </div>
    )
}