import React, { useState } from 'react'

// Login Screen
export function LoginScreen() {
    const [role, setRole] = useState('Admin')
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
                {['Admin', 'Staff', 'Member'].map((r) => (
                    <button
                        key={r}
                        onClick={() => setRole(r)}
                        className={`flex-1 cursor-pointer transition-all duration-300 ease-in-out py-2 text-xs font-medium transition-colors ${r === role ? 'bg-indigo-600 text-white' : 'bg-transparent text-white/40 hover:text-white/70'}`}
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
                    placeholder="e.g. ramesh_92"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-indigo-500"
                />
            </div>

            <div>
                <div className="flex justify-between mb-1">
                    <label className="text-[9px] uppercase tracking-widest text-white/30">Pin / Password</label>
                    <span onClick={() => setShowPin(!showPin)} className="text-[9px] text-indigo-400 cursor-pointer hover:text-indigo-300">
                        {showPin ? 'HIDE' : 'SHOW'}
                    </span>
                </div>
                <input
                    type={showPin ? 'text' : 'password'}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="•••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white placeholder-white/40 tracking-[0.3em] outline-none focus:border-indigo-500"
                />
            </div>

            <div className="flex items-center justify-between">
                <label className="flex items-center gap-1.5 text-[10px] text-white/40 cursor-pointer">
                    <span
                        onClick={() => setRemember(!remember)}
                        className={`w-3 h-3 rounded border flex items-center justify-center ${remember ? 'bg-indigo-600 border-indigo-600' : 'border-white/20'}`}
                    >
                        {remember && <span className="text-[8px] text-white">✓</span>}
                    </span>
                    Remember me
                </label>
                <span className="text-[10px] text-indigo-400 cursor-pointer hover:text-indigo-300">Forgot PIN?</span>
            </div>

            <button
                onClick={handleLogin}
                className="w-full py-2.5 bg-indigo-600 cursor-pointer hover:bg-indigo-500 rounded-lg text-xs font-semibold tracking-widest transition-colors"
            >
                LOGIN →
            </button>

            {status && <p className="text-center text-[10px] text-indigo-300">{status}</p>}

            <p className="text-center text-[10px] text-white/30">
                New here? <span className="text-indigo-400 cursor-pointer hover:text-indigo-300">Contact admin for access</span>
            </p>
        </div>
    )
}

// Dashboard Screen
export function DashboardScreen() {
    const [tab, setTab] = useState('Home')
    const [alertDismissed, setAlertDismissed] = useState(false)

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-1">
                {['Home', 'Members', 'Billing', 'Reports'].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`px-3 py-1 border border-white/10 cursor-pointer rounded-lg text-[10px] font-medium transition-colors ${t === tab ? 'bg-indigo-600 text-white' : 'text-white/40 hover:text-white/70'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Active Members', value: '248' },
                    { label: 'Today Check-Ins', value: '87' },
                    { label: 'Revenue (Mo.)', value: '₹1.2L' },
                ].map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-xl p-2.5 text-center border border-white/10">
                        <p className="text-base font-bold text-white">{s.value}</p>
                        <p className="text-[9px] text-white/40 mt-0.5">{s.label}</p>
                    </div>
                ))}
            </div>

            {!alertDismissed && (
                <button
                    onClick={() => setAlertDismissed(true)}
                    className="bg-yellow-500/10 border cursor-pointer border-yellow-500/20 rounded-lg px-3 py-2 flex items-center gap-2 text-left hover:bg-yellow-500/15 transition-colors"
                >
                    <span className="text-yellow-400 text-md">⚠</span>
                    <p className="text-[10px] text-yellow-300">6 members expiring in 7 days — tap to send WhatsApp reminders</p>
                </button>
            )}
            {alertDismissed && <p className="text-[10px] text-green-400">Reminders sent ✓</p>}

            <div className="flex flex-col gap-1.5">
                {[
                    { name: 'Ramesh Kumar checked in', time: '6:45 AM', color: 'bg-green-400' },
                    { name: 'Priya Sharma checked in', time: '6:52 AM', color: 'bg-green-400' },
                    { name: 'Amit Verma — plan expires tomorrow', time: '—', color: 'bg-yellow-400' },
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

// MemberList Screen
export function MemberListScreen() {
    const allMembers = [
        { name: 'Shivam', phone: '98765 43210', status: 'Active', plan: 'Gold', sc: 'bg-green-500/20 text-green-400' },
        { name: 'Pratham', phone: '88220 11122', status: 'Active', plan: 'Silver', sc: 'bg-yellow-500/20 text-yellow-400' },
        { name: 'Ananya', phone: '78220 11122', status: 'Soon', plan: 'Silver', sc: 'bg-yellow-500/20 text-yellow-400' },
        { name: 'Aman', phone: '65435 11122', status: 'Soon', plan: 'Silver', sc: 'bg-yellow-500/20 text-yellow-400' },
    ]
    const [query, setQuery] = useState('')
    const [selected, setSelected] = useState(null)

    const filtered = allMembers.filter(
        (m) => m.name.toLowerCase().includes(query.toLowerCase()) || m.phone.includes(query)
    )

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-2">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name, phone or ID"
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-3 py-2 text-[10px] text-white placeholder-white/30 outline-none focus:border-indigo-500"
                />
                <button
                    onClick={() => alert('Open add-member form')}
                    className="bg-indigo-600 hover:bg-indigo-500 px-5 cursor-pointer py-1.5 rounded-full text-[10px] font-semibold text-white transition-colors"
                >
                    + ADD
                </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="grid grid-cols-4 px-3 py-2 w-full bg-white/5 border-b border-white/10">
                    {['Name', 'Phone', 'Status', 'Plan'].map((h) => (
                        <span key={h} className="text-[9px] uppercase tracking-widest text-white/80 font-medium text-center">{h}</span>
                    ))}
                </div>
                {filtered.length === 0 && (
                    <div className="px-3 py-3 text-[10px] text-white/30">No members match "{query}"</div>
                )}
                {filtered.map((m, i) => (
                    <div
                        key={i}
                        onClick={() => setSelected(selected === m.name ? null : m.name)}
                        className={`grid grid-cols-4 px-3 py-2.5 gap-2 text-center items-center cursor-pointer duration-250 hover:bg-white/5 transition-colors ${i !== filtered.length - 1 ? 'border-b border-white/[0.06]' : ''} ${selected === m.name ? 'bg-indigo-500/10' : ''}`}
                    >
                        <span className="text-xs text-white/80 font-medium">{m.name}</span>
                        <span className="text-[10px] text-white/40">{m.phone}</span>
                        <span className="w-full h-full flex items-center justify-between">
                            <span className={`text-[9px] border border-white/10 font-semibold w-full px-4.5 p-0.5 rounded-full ${m.sc}`}>{m.status}</span>
                        </span>
                        <span className="text-[10px] text-white/50">{m.plan}</span>
                    </div>
                ))}
            </div>
            {selected && <p className="text-[10px] text-indigo-300">Opened detail sheet for {selected}</p>}
        </div>
    )
}

// Attendance Screen
export function AttendanceScreen() {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    const [active, setActive] = useState([0, 1, 2, 3, 4, 5])
    const [search, setSearch] = useState('')
    const [log, setLog] = useState([
        { name: 'Ramesh Kumar — present', meta: 'Mon–Sat', color: 'bg-green-400' },
        { name: 'Priya Sharma — 5 day missed', meta: 'This week', color: 'bg-yellow-400' },
        { name: 'Pratham Kumar — present', meta: 'Mon–Sat', color: 'bg-green-400' },
        { name: 'Shivam Kumar — 1 day missed', meta: 'This week', color: 'bg-yellow-400' },
    ])

    const toggleDay = (i) => {
        setActive((prev) => (prev.includes(i) ? prev.filter((d) => d !== i) : [...prev, i]))
    }

    const checkIn = () => {
        if (!search.trim()) return
        setLog((prev) => [{ name: `${search} checked in`, meta: 'just now', color: 'bg-green-400' }, ...prev])
        setSearch('')
    }

    return (
        <div className="flex flex-col gap-3">
            <button
                onClick={checkIn}
                className="w-full border border-dashed border-indigo-500/40 bg-indigo-500/5 rounded-xl py-3 text-xs text-indigo-400 font-medium tracking-wide hover:bg-indigo-500/10 transition-colors"
            >
                📷 Tap to scan QR / Member Card
            </button>

            <div className="flex gap-2">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Or type member name / ID"
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-3 py-2 text-[10px] text-white placeholder-white/30 outline-none focus:border-indigo-500"
                />
                <button
                    onClick={checkIn}
                    className="bg-indigo-600 px-3 cursor-pointer py-1.5 rounded-full text-[10px] font-semibold text-white hover:bg-indigo-500 transition-colors"
                >
                    CHECK IN
                </button>
            </div>

            <div className="flex gap-1.5">
                {days.map((d, i) => (
                    <button
                        key={i}
                        onClick={() => toggleDay(i)}
                        className={`flex-1 flex cursor-pointer items-center justify-center py-1.5 rounded-xl border border-white/10 text-[10px] font-bold transition-colors ${active.includes(i) ? 'bg-indigo-600 text-white' : 'bg-white/5 text-white/30'}`}
                    >
                        {d}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                {log.map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${item.color} flex-shrink-0`} />
                            <span className="text-[11px] text-white/70">{item.name}</span>
                        </div>
                        <span className="text-[9px] text-white/30">{item.meta}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Billing Screen
export function BillingScreen() {
    const [member, setMember] = useState('Ramesh Kumar')
    const [plan, setPlan] = useState('Gold — Monthly')
    const [payMode, setPayMode] = useState('Cash')
    const [confirmed, setConfirmed] = useState(false)

    return (
        <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <label className="text-[9px] uppercase tracking-widest text-white/30 mb-1 block">Member</label>
                    <input
                        value={member}
                        onChange={(e) => setMember(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-full px-3 py-2 text-[11px] text-white outline-none focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="text-[9px] uppercase tracking-widest text-white/30 mb-1 block">Plan</label>
                    <input
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-full px-3 py-2 text-[11px] text-white outline-none focus:border-indigo-500"
                    />
                </div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                {[
                    { label: 'Plan Amount', amount: '₹1,500' },
                    { label: 'Discount', amount: '₹0' },
                    { label: 'GST (18%)', amount: '₹270' },
                ].map((row, i) => (
                    <div key={i} className="flex justify-between px-3 py-2 border-b border-white/[0.06]">
                        <span className="text-[11px] text-white/50">{row.label}</span>
                        <span className="text-[11px] text-white/70">{row.amount}</span>
                    </div>
                ))}
                <div className="flex justify-between px-3 py-2.5">
                    <span className="text-xs font-bold text-white">Total</span>
                    <span className="text-xs font-bold text-white">₹1,770</span>
                </div>
            </div>

            <div className="flex gap-2">
                {['Cash', 'UPI', 'Card'].map((m) => (
                    <button
                        key={m}
                        onClick={() => setPayMode(m)}
                        className={`flex-1 py-1.5 rounded-full cursor-pointer text-[10px] font-semibold border duration-300 transition-colors ${m === payMode ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-transparent border-white/15 text-white/40 hover:border-white/30'}`}
                    >
                        {m}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
                <button
                    onClick={() => setConfirmed(true)}
                    className="py-2 rounded-xl bg-green-600/80 cursor-pointer hover:bg-green-500/80 text-[11px] font-semibold text-white transition-colors"
                >
                    {confirmed ? 'PAID ✓' : 'CONFIRM PAYMENT'}
                </button>
                <button
                    onClick={() => alert('Generating PDF receipt...')}
                    className="py-2 rounded-xl border border-white/15 cursor-pointer text-[11px] text-white/50 hover:border-white/30 transition-colors"
                >
                    PRINT
                </button>
            </div>
            {confirmed && (
                <p className="text-[10px] text-green-400">
                    ₹1,770 received via {payMode} from {member}
                </p>
            )}
        </div>
    )
}

// Reports Screen
export function ReportsScreen() {
    const ranges = {
        Today: [40],
        'This Month': [65, 45, 72, 58, 80, 55, 90],
        Custom: [30, 60, 50, 75],
    }
    const [range, setRange] = useState('This Month')
    const bars = ranges[range]
    const maxH = 56

    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-1.5">
                {Object.keys(ranges).map((t) => (
                    <button
                        key={t}
                        onClick={() => setRange(t)}
                        className={`px-3 py-1 rounded-full border cursor-pointer border-white/10 text-[10px] font-medium transition-colors ${t === range ? 'bg-indigo-600 text-white' : 'bg-white/5 text-white/40 hover:text-white/70'}`}
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
                                className={`w-full rounded-t-md duration-600 ease-in-out transition-all ${i === bars.length - 1 ? 'bg-indigo-500' : 'bg-indigo-700/60'}`}
                                style={{ height: `${(h / 100) * maxH}px` }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Collection', value: '₹1.2L' },
                    { label: 'New Joins', value: '14' },
                    { label: 'Renewals', value: '32' },
                ].map((s) => (
                    <div key={s.label} className="text-center">
                        <p className="text-sm font-bold text-white">{s.value}</p>
                        <p className="text-[9px] text-white/40 mt-0.5">{s.label}</p>
                    </div>
                ))}
            </div>

            <button
                onClick={() => alert('Exporting report...')}
                className="w-full py-2 border cursor-pointer border-white/15 rounded-lg text-[10px] font-semibold text-white/50 hover:border-white/30 hover:text-white/70 tracking-widest transition-colors"
            >
                EXPORT PDF / EXCEL
            </button>
        </div>
    )
}