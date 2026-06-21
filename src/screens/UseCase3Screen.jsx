import React, { useState } from 'react'

const PRIMARY = '#12524C'
const PRIMARY_HOVER = '#0e3f3a'
const PRIMARY_LIGHT = 'rgba(18,82,76,0.15)'
const PRIMARY_BORDER = 'rgba(18,82,76,0.3)'
const PRIMARY_TEXT = '#5DCAA5'


export function LoginScreen() {
    const [role, setRole] = useState('Owner')
    const [username, setUsername] = useState('')
    const [pin, setPin] = useState('')
    const [showPin, setShowPin] = useState(false)
    const [remember, setRemember] = useState(false)
    const [status, setStatus] = useState('')

    const handleLogin = () => {
        if (!username || !pin) {
            setStatus('Enter username and PIN')
            return
        }
        setStatus(`Logging in as ${role}: ${username}...`)
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="flex rounded-xl overflow-hidden border border-white/10">
                {['Owner', 'Counter Staff'].map((r) => (
                    <button
                        key={r}
                        onClick={() => setRole(r)}
                        style={r === role ? { backgroundColor: PRIMARY } : {}}
                        className={`flex-1 cursor-pointer py-2 text-xs font-medium transition-all duration-300 ${r === role ? 'text-white' : 'bg-transparent text-white/40 hover:text-white/70'}`}
                    >
                        {r}
                    </button>
                ))}
            </div>

            <div>
                <label className="text-[9px] uppercase tracking-widest text-white/30 mb-1 block">Username / Phone</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="e.g. pharmacy_admin"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-white/30 outline-none"
                    style={{ '--tw-ring-color': PRIMARY }}
                    onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
            </div>

            <div>
                <div className="flex justify-between mb-1">
                    <label className="text-[9px] uppercase tracking-widest text-white/30">PIN / Password</label>
                    <span
                        onClick={() => setShowPin(!showPin)}
                        style={{ color: PRIMARY_TEXT }}
                        className="text-[9px] cursor-pointer hover:opacity-80"
                    >
                        {showPin ? 'HIDE' : 'SHOW'}
                    </span>
                </div>
                <input
                    type={showPin ? 'text' : 'password'}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="••••"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-white/40 tracking-[0.3em] outline-none"
                    onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
            </div>

            <div className="flex items-center justify-between">
                <label className="flex items-center gap-1.5 text-[10px] text-white/40 cursor-pointer">
                    <span
                        onClick={() => setRemember(!remember)}
                        style={remember ? { backgroundColor: PRIMARY, borderColor: PRIMARY } : {}}
                        className={`w-3 h-3 rounded border flex items-center justify-center ${!remember ? 'border-white/20' : ''}`}
                    >
                        {remember && <span className="text-[8px] text-white">✓</span>}
                    </span>
                    Remember me
                </label>
                <span style={{ color: PRIMARY_TEXT }} className="text-[10px] cursor-pointer hover:opacity-80">Forgot PIN?</span>
            </div>

            <button
                onClick={handleLogin}
                style={{ backgroundColor: PRIMARY }}
                className="w-full py-2.5 cursor-pointer rounded-lg text-xs font-semibold tracking-widest text-white transition-all hover:opacity-90"
            >
                LOGIN →
            </button>

            {status && <p style={{ color: PRIMARY_TEXT }} className="text-center text-[10px]">{status}</p>}

            <p className="text-center text-[10px] text-white/30">
                Drug License No. <span className="text-white/50">DL-20B-UP-44231</span> · auto-stamped on bills
            </p>
        </div>
    )
}

export function DashboardScreen() {
    const [dismissed, setDismissed] = useState({ expiry: false, stock: false })

    return (
        <div className="flex flex-col gap-3">
            <div className="grid grid-cols-4 gap-2">
                {[
                    { label: "Today's Sales", value: '₹14.2K' },
                    { label: 'Pending Bills', value: '3' },
                    { label: 'Expiring Soon', value: '9' },
                    { label: 'Low Stock', value: '6' },
                ].map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-xl p-2.5 text-center border border-white/10">
                        <p className="text-sm font-bold text-white">{s.value}</p>
                        <p className="text-[8px] text-white/40 mt-0.5">{s.label}</p>
                    </div>
                ))}
            </div>

            {!dismissed.expiry && (
                <button
                    onClick={() => setDismissed((d) => ({ ...d, expiry: true }))}
                    className="bg-red-500/10 border cursor-pointer border-red-500/20 rounded-full px-3 py-2 flex items-start gap-2 text-left hover:bg-red-500/15 transition-colors"
                >
                    <span className="text-red-400 text-sm mt-0.5">⚠</span>
                    <p className="text-[10px] text-red-300 leading-6">9 batches expiring in under 15 days — tap to review</p>
                </button>
            )}

            {!dismissed.stock && (
                <button
                    onClick={() => setDismissed((d) => ({ ...d, stock: true }))}
                    className="bg-yellow-500/10 border cursor-pointer border-yellow-500/20 rounded-full px-3 py-2 flex items-start gap-2 text-left hover:bg-yellow-500/15 transition-colors"
                >
                    <span className="text-yellow-400 text-sm mt-0.5">⚠</span>
                    <p className="text-[10px] text-yellow-300 leading-6">6 medicines below reorder level — recommended qty ready</p>
                </button>
            )}

            <div className="flex flex-col gap-1.5">
                {[
                    { name: 'Paracetamol 500mg sold ×12', time: '10:12 AM', dot: PRIMARY_TEXT },
                    { name: 'Amoxicillin batch B-2291 — 12 days to expiry', time: '—', dot: '#d4a822' },
                    { name: 'Cough Syrup sold ×3', time: '10:34 AM', dot: PRIMARY_TEXT },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span
                                style={{ backgroundColor: item.dot }}
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            />
                            <span className="text-[11px] text-white/70">{item.name}</span>
                        </div>
                        <span className="text-[10px] text-white/30">{item.time}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ══════════════════ STOCK MANAGEMENT ══════════════════ */
export function StockManagementScreen() {
    const batches = [
        { name: 'Paracetamol 500mg', batch: 'B-1182', expiry: '02 Jul 2026', qty: 240, mrp: '₹2', sc: 'text-yellow-400' },
        { name: 'Amoxicillin 250mg', batch: 'B-2291', expiry: '04 Jul 2026', qty: 18, mrp: '₹45', sc: 'text-red-400' },
        { name: 'Cetirizine 10mg', batch: 'B-0987', expiry: '14 Dec 2026', qty: 320, mrp: '₹3', sc: 'text-green-400' },
    ]

    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-end">
                <button
                    onClick={() => alert('Open add-batch form')}
                    style={{ backgroundColor: PRIMARY }}
                    className="hover:opacity-90 px-4 cursor-pointer py-1.5 rounded-full text-[10px] font-semibold text-white transition-all"
                >
                    + ADD BATCH
                </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="grid grid-cols-5 px-3 py-2 bg-white/5 border-b border-white/10">
                    {['Medicine', 'Batch', 'Expiry', 'Qty', 'MRP'].map((h) => (
                        <span key={h} className="text-[8px] uppercase tracking-widest text-white/30 font-medium">{h}</span>
                    ))}
                </div>
                {batches.map((b, i) => (
                    <div
                        key={i}
                        className={`grid grid-cols-5 px-3 py-2.5 items-center ${i !== batches.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
                    >
                        <span className="text-[11px] text-white/80 font-medium">{b.name}</span>
                        <span className="text-[10px] text-white/40 font-mono">{b.batch}</span>
                        <span className={`text-[10px] font-semibold ${b.sc}`}>{b.expiry}</span>
                        <span className="text-[10px] text-white/50">{b.qty}</span>
                        <span className="text-[10px] text-white/50">{b.mrp}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ══════════════════ NEW BILL / POS ══════════════════ */
export function NewBillScreen() {
    const [items, setItems] = useState([
        { name: 'Paracetamol 500mg', qty: 2, price: 2, gst: 5 },
    ])
    const [search, setSearch] = useState('')

    const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0)
    const gst = items.reduce((sum, i) => sum + (i.qty * i.price * i.gst) / 100, 0)
    const total = subtotal + gst

    const addItem = () => {
        if (!search.trim()) return
        setItems((prev) => [...prev, { name: search, qty: 1, price: 10, gst: 5 }])
        setSearch('')
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-2">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Scan barcode or search medicine"
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-3 py-2 text-[10px] text-white placeholder-white/30 outline-none"
                    onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                />
                <button
                    onClick={addItem}
                    style={{ backgroundColor: PRIMARY }}
                    className="px-5 border border-white/20 cursor-pointer rounded-full text-[9px] font-semibold text-white hover:opacity-90 transition-all"
                >
                    SCAN
                </button>
            </div>

            <div className="flex flex-col gap-1.5">
                {items.map((it, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2">
                        <span className="text-[11px] text-white/70">{it.name} ×{it.qty}</span>
                        <span className="text-[10px] text-white/50">₹{it.qty * it.price}</span>
                    </div>
                ))}
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                {[
                    { label: 'Subtotal', amount: `₹${subtotal.toFixed(2)}` },
                    { label: 'Discount', amount: '₹0' },
                    { label: 'GST', amount: `₹${gst.toFixed(2)}` },
                ].map((row, i) => (
                    <div key={i} className="flex justify-between px-3 py-2 border-b border-white/[0.06]">
                        <span className="text-[11px] text-white/50">{row.label}</span>
                        <span className="text-[11px] text-white/70">{row.amount}</span>
                    </div>
                ))}
                <div className="flex justify-between px-3 py-2.5">
                    <span className="text-xs font-bold text-white">Total</span>
                    <span className="text-xs font-bold text-white">₹{total.toFixed(2)}</span>
                </div>
            </div>

            <button
                onClick={() => alert('Printing thermal receipt...')}
                style={{ backgroundColor: PRIMARY }}
                className="w-full py-2.5 cursor-pointer hover:opacity-90 rounded-lg text-xs font-semibold tracking-widest text-white transition-all"
            >
                PRINT BILL
            </button>
        </div>
    )
}

/* ══════════════════ SUPPLIER & PURCHASE ══════════════════ */
export function SupplierPurchaseScreen() {
    const suppliers = [
        { name: 'MedPlus Distributors', credit: '30 days', last: '08 Jun 2026', status: 'Received', badge: { bg: 'rgba(18,82,76,0.3)', color: PRIMARY_TEXT } },
        { name: 'Sunrise Pharma Supply', credit: '15 days', last: '14 Jun 2026', status: 'Pending Delivery', badge: { bg: 'rgba(180,140,20,0.2)', color: '#d4a822' } },
    ]

    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-end">
                <button
                    onClick={() => alert('Open new purchase order form')}
                    style={{ backgroundColor: PRIMARY }}
                    className="hover:opacity-90 px-4 cursor-pointer py-1.5 rounded-full text-[10px] font-semibold text-white transition-all"
                >
                    + ORDER
                </button>
            </div>

            <div className="flex flex-col gap-2">
                {suppliers.map((s, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2.5">
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-white/80 font-medium">{s.name}</span>
                            <span
                                style={{ backgroundColor: s.badge.bg, color: s.badge.color }}
                                className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                            >
                                {s.status}
                            </span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="text-[10px] text-white/40">Credit: {s.credit}</span>
                            <span className="text-[10px] text-white/40">Last order: {s.last}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{ backgroundColor: PRIMARY_LIGHT, borderColor: PRIMARY_BORDER, color: PRIMARY_TEXT }}
                className="border rounded-lg px-3 py-2 text-[10px]"
            >
                Suggested reorder: Amoxicillin 250mg × 50, based on avg. daily sales
            </div>
        </div>
    )
}

/* ══════════════════ REPORTS ══════════════════ */
export function ReportsScreen() {
    const [range, setRange] = useState('This Month')
    const [tab, setTab] = useState('Sales')

    const salesData = {
        Today: [
            { day: '9AM', amt: 12 },
            { day: '11AM', amt: 28 },
            { day: '1PM', amt: 45 },
            { day: '3PM', amt: 38 },
            { day: '5PM', amt: 60 },
            { day: '7PM', amt: 72 },
            { day: '9PM', amt: 34 },
        ],
        'This Month': [
            { day: 'Mon', amt: 35 },
            { day: 'Tue', amt: 52 },
            { day: 'Wed', amt: 41 },
            { day: 'Thu', amt: 68 },
            { day: 'Fri', amt: 74 },
            { day: 'Sat', amt: 90 },
            { day: 'Sun', amt: 58 },
        ],
        Custom: [
            { day: 'W1', amt: 50 },
            { day: 'W2', amt: 64 },
            { day: 'W3', amt: 48 },
            { day: 'W4', amt: 80 },
        ],
    }

    const kpisByRange = {
        Today: [
            { label: 'Total Sales', value: '₹8.4K' },
            { label: 'Top Selling', value: 'Cetirizine' },
            { label: 'GST Collected', value: '₹420' },
            { label: 'Profit Margin', value: '17.1%' },
        ],
        'This Month': [
            { label: 'Total Sales', value: '₹1.42L' },
            { label: 'Top Selling', value: 'Paracetamol' },
            { label: 'GST Collected', value: '₹6,840' },
            { label: 'Profit Margin', value: '18.4%' },
        ],
        Custom: [
            { label: 'Total Sales', value: '₹38.6K' },
            { label: 'Top Selling', value: 'Amoxicillin' },
            { label: 'GST Collected', value: '₹1,930' },
            { label: 'Profit Margin', value: '16.8%' },
        ],
    }

    const dailySales = salesData[range]
    const kpis = kpisByRange[range]
    const maxAmt = Math.max(...dailySales.map((d) => d.amt))

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <div className="flex rounded-full overflow-hidden border border-white/10">
                    {['Today', 'This Month', 'Custom'].map((r) => (
                        <button
                            key={r}
                            onClick={() => setRange(r)}
                            style={r === range ? { backgroundColor: PRIMARY } : {}}
                            className={`px-3 py-1.5 cursor-pointer text-[9px] font-medium transition-all ${r === range ? 'text-white' : 'bg-transparent text-white/40 hover:text-white/70'}`}
                        >
                            {r}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => alert('Exporting GSTR-1 ready file...')}
                    style={{ backgroundColor: PRIMARY }}
                    className="px-3 py-1.5 cursor-pointer rounded-full text-[9px] font-semibold text-white hover:opacity-90 transition-all"
                >
                    EXPORT
                </button>
            </div>

            <div className="flex rounded-xl overflow-hidden border border-white/10">
                {['Sales', 'GST Report'].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        style={t === tab ? { backgroundColor: PRIMARY } : {}}
                        className={`flex-1 cursor-pointer py-2 text-xs font-medium transition-all duration-300 ${t === tab ? 'text-white' : 'bg-transparent text-white/40 hover:text-white/70'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {tab === 'Sales' ? (
                <>
                    <div className="grid grid-cols-4 gap-2">
                        {kpis.map((k) => (
                            <div key={k.label} className="bg-white/5 rounded-xl p-1 text-center border border-white/10">
                                <p className="text-[11px] font-bold text-white truncate">{k.value}</p>
                                <p className="text-[9px] text-white/40">{k.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-3">
                        <p className="text-[9px] uppercase tracking-widest text-white/30 mb-3">Daily Revenue (₹ '00s)</p>
                        <div className="flex items-end justify-between gap-2 h-24">
                            {dailySales.map((d) => (
                                <div key={d.day} className="flex flex-col items-center justify-end gap-1 flex-1 h-full">
                                    <div
                                        style={{
                                            height: `${(d.amt / maxAmt) * 100}%`,
                                            backgroundColor: PRIMARY,
                                            minHeight: '2px',
                                        }}
                                        className="w-full rounded-t-sm transition-all duration-200 ease-in-out"
                                    />
                                    <span className="text-[8px] text-white/40">{d.day}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                    <div className="grid grid-cols-3 px-3 py-2 bg-white/5 border-b border-white/10">
                        {['GST Slab', 'Taxable Value', 'Tax Collected'].map((h) => (
                            <span key={h} className="text-[8px] uppercase tracking-widest text-white/30 font-medium">{h}</span>
                        ))}
                    </div>
                    {[
                        { slab: '5%', val: '₹98,400', tax: '₹4,920' },
                        { slab: '12%', val: '₹14,200', tax: '₹1,704' },
                        { slab: '18%', val: '₹1,200', tax: '₹216' },
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 px-3 py-2.5 items-center border-b border-white/[0.06] last:border-b-0">
                            <span className="text-[11px] text-white/80 font-medium">{row.slab}</span>
                            <span className="text-[10px] text-white/50">{row.val}</span>
                            <span style={{ color: PRIMARY_TEXT }} className="text-[10px] font-semibold">{row.tax}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}