import React, { useState } from 'react'

/* ══════════════════ LOGIN ══════════════════ */
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
                        className={`flex-1 cursor-pointer transition-all duration-300 ease-in-out py-2 text-xs font-medium transition-colors ${r === role ? 'bg-emerald-600 text-white' : 'bg-transparent text-white/40 hover:text-white/70'}`}
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
                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-emerald-500"
                />
            </div>

            <div>
                <div className="flex justify-between mb-1">
                    <label className="text-[9px] uppercase tracking-widest text-white/30">PIN / Password</label>
                    <span onClick={() => setShowPin(!showPin)} className="text-[9px] text-emerald-400 cursor-pointer hover:text-emerald-300">
                        {showPin ? 'HIDE' : 'SHOW'}
                    </span>
                </div>
                <input
                    type={showPin ? 'text' : 'password'}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="••••"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-white/40 tracking-[0.3em] outline-none focus:border-emerald-500"
                />
            </div>

            <div className="flex items-center justify-between">
                <label className="flex items-center gap-1.5 text-[10px] text-white/40 cursor-pointer">
                    <span
                        onClick={() => setRemember(!remember)}
                        className={`w-3 h-3 rounded border flex items-center justify-center ${remember ? 'bg-emerald-600 border-emerald-600' : 'border-white/20'}`}
                    >
                        {remember && <span className="text-[8px] text-white">✓</span>}
                    </span>
                    Remember me
                </label>
                <span className="text-[10px] text-emerald-400 cursor-pointer hover:text-emerald-300">Forgot PIN?</span>
            </div>

            <button
                onClick={handleLogin}
                className="w-full py-2.5 bg-emerald-600 cursor-pointer hover:bg-emerald-500 rounded-lg text-xs font-semibold tracking-widest transition-colors"
            >
                LOGIN →
            </button>

            {status && <p className="text-center text-[10px] text-emerald-300">{status}</p>}

            <p className="text-center text-[10px] text-white/30">
                Drug License No. <span className="text-white/50">DL-20B-UP-44231</span> · auto-stamped on bills
            </p>
        </div>
    )
}

/* ══════════════════ DASHBOARD ══════════════════ */
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
                    { name: 'Paracetamol 500mg sold ×12', time: '10:12 AM', color: 'bg-emerald-400' },
                    { name: 'Amoxicillin batch B-2291 — 12 days to expiry', time: '—', color: 'bg-yellow-400' },
                    { name: 'Cough Syrup sold ×3', time: '10:34 AM', color: 'bg-emerald-400' },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.color} flex-shrink-0`} />
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
        { name: 'Cough Syrup 100ml', batch: 'B-1456', expiry: '20 Jun 2026', qty: 12, mrp: '₹85', sc: 'text-red-400' },
    ]

    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-end">
                <button
                    onClick={() => alert('Open add-batch form')}
                    className="bg-emerald-600 hover:bg-emerald-500 px-4 cursor-pointer py-1.5 rounded-full text-[10px] font-semibold text-white transition-colors"
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
        { name: 'Cetirizine 10mg', qty: 1, price: 3, gst: 5 },
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
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-3 py-2 text-[10px] text-white placeholder-white/30 outline-none focus:border-emerald-500"
                />
                <button
                    onClick={addItem}
                    className="bg-emerald-600 px-3 cursor-pointer py-1.5 rounded-full text-[10px] font-semibold text-white hover:bg-emerald-500 transition-colors"
                >
                    📷 SCAN
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
                className="w-full py-2.5 bg-emerald-600 cursor-pointer hover:bg-emerald-500 rounded-lg text-xs font-semibold tracking-widest transition-colors"
            >
                PRINT BILL
            </button>
        </div>
    )
}

/* ══════════════════ SUPPLIER & PURCHASE ══════════════════ */
export function SupplierPurchaseScreen() {
    const suppliers = [
        { name: 'MedPlus Distributors', credit: '30 days', last: '08 Jun 2026', status: 'Received', sc: 'bg-green-500/20 text-green-400' },
        { name: 'Sunrise Pharma Supply', credit: '15 days', last: '14 Jun 2026', status: 'Pending Delivery', sc: 'bg-yellow-500/20 text-yellow-400' },
        { name: 'Apex Healthcare Agency', credit: '45 days', last: '02 Jun 2026', status: 'Received', sc: 'bg-green-500/20 text-green-400' },
    ]

    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-end">
                <button
                    onClick={() => alert('Open new purchase order form')}
                    className="bg-emerald-600 hover:bg-emerald-500 px-4 cursor-pointer py-1.5 rounded-full text-[10px] font-semibold text-white transition-colors"
                >
                    + ORDER
                </button>
            </div>

            <div className="flex flex-col gap-2">
                {suppliers.map((s, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2.5">
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-white/80 font-medium">{s.name}</span>
                            <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${s.sc}`}>{s.status}</span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="text-[10px] text-white/40">Credit: {s.credit}</span>
                            <span className="text-[10px] text-white/40">Last order: {s.last}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2 text-[10px] text-emerald-300">
                Suggested reorder: Amoxicillin 250mg × 50, based on avg. daily sales
            </div>
        </div>
    )
}

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
                        className={`px-3 py-1 rounded-full border cursor-pointer border-white/10 text-[10px] font-medium transition-colors ${t === range ? 'bg-emerald-600 text-white' : 'bg-white/5 text-white/40 hover:text-white/70'}`}
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
                                className={`w-full rounded-t-md duration-600 ease-in-out transition-all ${i === bars.length - 1 ? 'bg-emerald-500' : 'bg-emerald-700/60'}`}
                                style={{ height: `${(h / 100) * maxH}px` }}
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