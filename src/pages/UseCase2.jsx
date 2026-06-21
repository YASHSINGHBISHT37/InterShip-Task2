import { useCase2Data } from '../data/Data'
import LeftScreen from '../ui/leftScreen'
import RightScreen from '../ui/RightScreen'

export default function UseCase2() {
    return (
        <div className='w-full h-screen border border-white/14 rounded-2xl px-6 py-20 flex items-start justify-between gap-10  overflow- overflow-y-scroll text-white'>
          <LeftScreen data={useCase2Data}/>
          <RightScreen data={useCase2Data}/>
        </div>
    )
}
