import { useCase3Data } from '../data/Data'
import LeftScreen from '../ui/LeftScreen'
import RightScreen from '../ui/RightScreen'

export default function UseCase3() {
    return (
        <div className='w-full h-screen border border-white/14 rounded-2xl px-6 py-20 flex items-start justify-between gap-10  overflow- overflow-y-scroll text-white'>
          <LeftScreen data={useCase3Data}/>
          <RightScreen data={useCase3Data}/>
        </div>
    )
}
