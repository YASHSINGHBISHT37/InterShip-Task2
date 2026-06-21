import LeftScreen from '../ui/LeftScreen'
import { useCase3Data } from '../data/Data'
import RightScreen from '../ui/RightScreen'


/* ══════════════════ REPORTS ══════════════════ */
export function ReportsScreen() {
    const ranges = {
        Daily: [40],
        Monthly: [65, 45, 72, 58, 80, 55, 90],
        'GST Report': [50, 60, 45],
    }
    const [range, setRange] = useState('Monthly')
    const bars = ranges[range]
    const maxH = 56

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-1.5">
                {Object.keys(ranges).map((t) => (
                    <button
                        key={t}
                        onClick={() => setRange(t)}
                        style={t === range ? { backgroundColor: PRIMARY, borderColor: PRIMARY, color: 'white' } : {}}
                        className={`px-3 py-1 rounded-full border cursor-pointer border-white/10 text-[10px] font-medium transition-all ${t !== range ? 'bg-white/5 text-white/40 hover:text-white/70' : ''}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3">
                <div className="flex items-end gap-1.5 h-16">
                    {bars.map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end">
                            <div
                                style={{
                                    height: `${(h / 100) * maxH}px`,
                                    backgroundColor: i === bars.length - 1 ? PRIMARY : `${PRIMARY}66`,
                                }}
                                className="w-full rounded-t-md transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Total Sales', value: '₹2.1L' },
                    { label: 'Top Medicine', value: 'Paracetamol' },
                    { label: 'GST Collected', value: '₹9.4K' },
                ].map((s) => (
                    <div key={s.label} className="text-center">
                        <p className="text-sm font-bold text-white">{s.value}</p>
                        <p className="text-[9px] text-white/40 mt-0.5">{s.label}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => alert('Exporting GSTR-1 ready file...')}
                className="w-full py-2 border cursor-pointer border-white/15 rounded-lg text-[10px] font-semibold text-white/50 hover:border-white/30 hover:text-white/70 tracking-widest transition-colors"
            >
                EXPORT FOR GST FILING
            </button>
        </div>
    )
}
export default function UseCase3() {
    return (
        <div className='w-full h-screen border border-white/14 rounded-2xl px-6 pt-28 md:pt-20 pb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10 overflow-hidden overflow-y-scroll text-white'>
            <LeftScreen data={useCase3Data} />
            <RightScreen data={useCase3Data} />
        </div>
    )
}
