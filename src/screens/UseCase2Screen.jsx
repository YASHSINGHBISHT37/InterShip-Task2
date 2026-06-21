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
                {['Owner', 'Mechanic'].map((r) => (
                    <button
                        key={r}
                        onClick={() => setRole(r)}
                        className={`flex-1 cursor-pointer transition-all duration-300 ease-in-out py-2 text-xs font-medium transition-colors ${r === role ? 'bg-red-600 text-white' : 'bg-transparent text-white/40 hover:text-white/70'}`}
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
                    placeholder="e.g. workshop_admin"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-red-500"
                />
            </div>

            <div>
                <div className="flex justify-between mb-1">
                    <label className="text-[9px] uppercase tracking-widest text-white/30">PIN / Password</label>
                    <span onClick={() => setShowPin(!showPin)} className="text-[9px] text-red-400 cursor-pointer hover:text-red-300">
                        {showPin ? 'HIDE' : 'SHOW'}
                    </span>
                </div>
                <input
                    type={showPin ? 'text' : 'password'}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="••••"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-white/40 tracking-[0.3em] outline-none focus:border-red-500"
                />
            </div>

            <div className="flex items-center justify-between">
                <label className="flex items-center gap-1.5 text-[10px] text-white/40 cursor-pointer">
                    <span
                        onClick={() => setRemember(!remember)}
                        className={`w-3 h-3 rounded border flex items-center justify-center ${remember ? 'bg-red-600 border-red-600' : 'border-white/20'}`}
                    >
                        {remember && <span className="text-[8px] text-white">✓</span>}
                    </span>
                    Remember me
                </label>
                <span className="text-[10px] text-red-400 cursor-pointer hover:text-red-300">Forgot PIN?</span>
            </div>

            <button
                onClick={handleLogin}
                className="w-full py-2.5 bg-red-600 cursor-pointer hover:bg-red-500 rounded-lg text-xs font-semibold tracking-widest transition-colors"
            >
                LOGIN →
            </button>

            {status && <p className="text-center text-[10px] text-red-300">{status}</p>}

            <p className="text-center text-[10px] text-white/30">
                New here? <span className="text-red-400 cursor-pointer hover:text-red-300">Contact admin for access</span>
            </p>
        </div>
    )
}

/* ══════════════════ DASHBOARD ══════════════════ */
export function DashboardScreen() {
    const [filter, setFilter] = useState('All')

    const jobs = [
        { vehicle: 'UP78 AB 4521', status: 'New', color: 'bg-red-500' },
        { vehicle: 'UP32 CD 7890', status: 'In Progress', color: 'bg-yellow-400' },
        { vehicle: 'UP78 EF 1122', status: 'Ready', color: 'bg-green-400' },
        { vehicle: 'UP25 GH 3344', status: 'In Progress', color: 'bg-yellow-400' },
    ]

    const filtered = filter === 'All' ? jobs : jobs.filter((j) => j.status === filter)

    return (
        <div className="flex flex-col gap-3">
            <div className="grid grid-cols-4 gap-2">
                {[
                    { label: 'Jobs Today', value: '12' },
                    { label: 'Pending', value: '5' },
                    { label: 'Ready', value: '3' },
                    { label: 'Revenue', value: '₹18.4K' },
                ].map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-xl p-2.5 text-center border border-white/10">
                        <p className="text-sm font-bold text-white">{s.value}</p>
                        <p className="text-[8px] text-white/40 mt-0.5">{s.label}</p>
                    </div>
                ))}
            </div>

            <div className="flex gap-1.5">
                {['All', 'New', 'In Progress', 'Ready'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-2.5 py-1 border border-white/10 cursor-pointer rounded-lg text-[10px] font-medium transition-colors ${f === filter ? 'bg-red-600 text-white' : 'text-white/40 hover:text-white/70'}`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-1.5">
                {filtered.map((j, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2">
                        <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${j.color} flex-shrink-0`} />
                            <span className="text-[11px] text-white/70 font-mono">{j.vehicle}</span>
                        </div>
                        <span className="text-[9px] text-white/40">{j.status}</span>
                    </div>
                ))}
            </div>

            <button
                onClick={() => alert('Opening new job card form...')}
                className="w-full py-2.5 bg-red-600 cursor-pointer hover:bg-red-500 rounded-lg text-xs font-semibold tracking-widest transition-colors"
            >
                + NEW JOB CARD
            </button>
        </div>
    )
}

/* ══════════════════ NEW JOB CARD ══════════════════ */
export function NewJobCardScreen() {
    const [regNo, setRegNo] = useState('')
    const [customer, setCustomer] = useState('')
    const [complaint, setComplaint] = useState('')
    const [mechanic, setMechanic] = useState('Ravi Singh')

    const handleRegLookup = (val) => {
        setRegNo(val)
        if (val.length >= 6) setCustomer('Ramesh Kumar — Honda Activa')
    }

    return (
        <div className="flex flex-col gap-3">
            <div>
                <label className="text-[9px] uppercase tracking-widest text-white/30 mb-1 block">Vehicle Reg. Number</label>
                <input
                    value={regNo}
                    onChange={(e) => handleRegLookup(e.target.value)}
                    placeholder="UP78 AB 1234"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-red-500 font-mono"
                />
            </div>

            {customer && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2 text-[10px] text-red-300">
                    Auto-filled: {customer}
                </div>
            )}

            <div>
                <label className="text-[9px] uppercase tracking-widest text-white/30 mb-1 block">Complaint / Work Requested</label>
                <textarea
                    value={complaint}
                    onChange={(e) => setComplaint(e.target.value)}
                    placeholder="e.g. Engine noise, oil change due 🎤"
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-red-500 resize-none"
                />
            </div>

            <div>
                <label className="text-[9px] uppercase tracking-widest text-white/30 mb-1 block">Assign Mechanic</label>
                <select
                    value={mechanic}
                    onChange={(e) => setMechanic(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-full px-3 py-2 text-xs text-white outline-none focus:border-red-500"
                >
                    {['Ravi Singh', 'Suresh Yadav', 'Manoj Tiwari'].map((m) => (
                        <option key={m} value={m} className="bg-[#1B1A1A]">{m}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <button
                    onClick={() => { setRegNo(''); setCustomer(''); setComplaint('') }}
                    className="py-2 rounded-xl border border-white/15 cursor-pointer text-[11px] text-white/50 hover:border-white/30 transition-colors"
                >
                    CANCEL
                </button>
                <button
                    onClick={() => alert('Job card created!')}
                    className="py-2 rounded-xl bg-red-600 cursor-pointer hover:bg-red-500 text-[11px] font-semibold text-white transition-colors"
                >
                    CREATE JOB
                </button>
            </div>
        </div>
    )
}

/* ══════════════════ SERVICE HISTORY ══════════════════ */
export function ServiceHistoryScreen() {
    const records = [
        { reg: 'UP78 AB 4521', date: '12 May 2026', work: 'Oil change + brake pad', parts: 'Oil filter, brake pads', total: '₹2,150', mechanic: 'Ravi Singh' },
        { reg: 'UP32 CD 7890', date: '02 Apr 2026', work: 'Engine tuning', parts: 'Spark plug', total: '₹950', mechanic: 'Suresh Yadav' },
        { reg: 'UP78 AB 4521', date: '10 Jan 2026', work: 'Full service', parts: 'Oil, filter, coolant', total: '₹3,400', mechanic: 'Ravi Singh' },
    ]
    const [query, setQuery] = useState('')
    const [expanded, setExpanded] = useState(null)

    const filtered = records.filter((r) => r.reg.toLowerCase().includes(query.toLowerCase()))

    return (
        <div className="flex flex-col gap-3">
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by reg. number or customer name"
                className="w-full bg-white/5 border border-white/10 rounded-full px-3 py-2 text-[10px] text-white placeholder-white/30 outline-none focus:border-red-500"
            />

            <div className="flex flex-col gap-2">
                {filtered.length === 0 && (
                    <div className="px-3 py-3 text-[10px] text-white/30">No records match "{query}"</div>
                )}
                {filtered.map((r, i) => (
                    <div
                        key={i}
                        onClick={() => setExpanded(expanded === i ? null : i)}
                        className="bg-white/[0.03] border border-white/10 rounded-xl px-3 py-2.5 cursor-pointer hover:bg-white/5 transition-colors"
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-mono text-white/80 font-medium">{r.reg}</span>
                            <span className="text-[10px] text-white/40">{r.date}</span>
                        </div>
                        <p className="text-[10px] text-white/50 mt-1">{r.work}</p>
                        {expanded === i && (
                            <div className="mt-2 pt-2 border-t border-white/10 flex flex-col gap-1">
                                <p className="text-[10px] text-white/40">Parts used: {r.parts}</p>
                                <p className="text-[10px] text-white/40">Mechanic: {r.mechanic}</p>
                                <p className="text-[10px] text-red-300 font-semibold">Total: {r.total}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ══════════════════ PARTS INVENTORY ══════════════════ */
export function PartsInventoryScreen() {
    const [parts, setParts] = useState([
        { name: 'Oil Filter', stock: 4, reorder: 10, price: '₹180' },
        { name: 'Brake Pads', stock: 22, reorder: 8, price: '₹650' },
        { name: 'Spark Plug', stock: 2, reorder: 15, price: '₹120' },
        { name: 'Engine Oil 1L', stock: 30, reorder: 12, price: '₹420' },
    ])

    const lowStock = parts.filter((p) => p.stock < p.reorder)

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-2">
                <input
                    placeholder="Search part name"
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-3 py-2 text-[10px] text-white placeholder-white/30 outline-none focus:border-red-500"
                />
                <button
                    onClick={() => alert('Open add-part form')}
                    className="bg-red-600 hover:bg-red-500 px-4 cursor-pointer py-1.5 rounded-full text-[10px] font-semibold text-white transition-colors"
                >
                    + PART
                </button>
            </div>

            {lowStock.length > 0 && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-full px-3 py-2 text-[10px] text-red-300">
                    ⚠ {lowStock.length} parts below reorder threshold
                </div>
            )}

            <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="grid grid-cols-4 px-3 py-2 bg-white/5 border-b border-white/10">
                    {['Part', 'Stock', 'Reorder', 'Price'].map((h) => (
                        <span key={h} className="text-[9px] uppercase tracking-widest text-white/30 font-medium">{h}</span>
                    ))}
                </div>
                {parts.map((p, i) => (
                    <div
                        key={i}
                        className={`grid grid-cols-4 px-3 py-2.5 items-center ${i !== parts.length - 1 ? 'border-b border-white/[0.06]' : ''} ${p.stock < p.reorder ? 'bg-red-500/5' : ''}`}
                    >
                        <span className="text-xs text-white/80 font-medium">{p.name}</span>
                        <span className={`text-[10px] font-semibold ${p.stock < p.reorder ? 'text-red-400' : 'text-white/50'}`}>{p.stock}</span>
                        <span className="text-[10px] text-white/40">{p.reorder}</span>
                        <span className="text-[10px] text-white/50">{p.price}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* ══════════════════ FINAL BILL ══════════════════ */
export function FinalBillScreen() {
    const [paid, setPaid] = useState(false)

    return (
        <div className="flex flex-col gap-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                <div className="px-3 py-2 border-b border-white/10">
                    <p className="text-xs font-semibold text-white">UP78 AB 4521 — Ramesh Kumar</p>
                    <p className="text-[10px] text-white/40">Job #1042 · Honda Activa</p>
                </div>
                {[
                    { label: 'Labor Charges', amount: '₹600' },
                    { label: 'Oil Filter', amount: '₹180' },
                    { label: 'Brake Pads', amount: '₹650' },
                    { label: 'GST (18%)', amount: '₹258' },
                ].map((row, i) => (
                    <div key={i} className="flex justify-between px-3 py-2 border-b border-white/[0.06]">
                        <span className="text-[11px] text-white/50">{row.label}</span>
                        <span className="text-[11px] text-white/70">{row.amount}</span>
                    </div>
                ))}
                <div className="flex justify-between px-3 py-2.5">
                    <span className="text-xs font-bold text-white">Total</span>
                    <span className="text-xs font-bold text-white">₹1,688</span>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <button
                    onClick={() => setPaid(true)}
                    className="py-2 rounded-xl bg-red-600 cursor-pointer hover:bg-red-500 text-[10px] font-semibold text-white transition-colors col-span-1"
                >
                    {paid ? 'PAID ✓' : 'MARK PAID'}
                </button>
                <button
                    onClick={() => alert('Sending bill via WhatsApp...')}
                    className="py-2 rounded-xl border border-white/15 cursor-pointer text-[10px] text-white/50 hover:border-white/30 transition-colors"
                >
                    WHATSAPP
                </button>
                <button
                    onClick={() => alert('Printing bill...')}
                    className="py-2 rounded-xl border border-white/15 cursor-pointer text-[10px] text-white/50 hover:border-white/30 transition-colors"
                >
                    PRINT
                </button>
            </div>

            {paid && <p className="text-[10px] text-green-400">Job marked Delivered — bill locked from editing ✓</p>}
        </div>
    )
}