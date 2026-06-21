import React from 'react'

export default function Home() {
  return (
    <div className='w-full h-screen border border-white/14 rounded-2xl px-6 pt-18 md:py-20 flex flex-col items-center text-white'>

      <div className='md:max-w-lg flex-col gap-4 flex'>

        <div className='flex items-center gap-3'>
          <div className='w-20 h-20 border border-white/20 rounded-full shrink-0 flex items-center justify-center bg-yellow-00 overflow-hidden'>
            <img src="/public/me.jpg" className='w-full h-full object-cover rounded-full ' />
          </div>

          <div className=''>
            <h1 className='text-lg font-semibold tracking-tight leading-6'>Yash Singh Bisht</h1>
            <p className='text-white/50 text-xs'>React · ReactNative · hi@ramx.in</p>
          </div>
        </div>

        <div className='md:max-w-3xl flex-col gap-4 flex'>
          <p className='text-white/50 text-xs leading-4'>
            BCA student at Institute of Innovation in Technology and Management (IITM) —
            currently interning at Talking Crooks IT Pvt. Ltd. as a Technical Intern,
            working on full-stack development, app development, AI tools, and technical solution consulting.
          </p>
        </div>

        <div className='flex items-center gap-2'>
          <a href="" target="_blank" rel="noreferrer" className='text-white/70 md:text-white/40 md:hover:text-white transition-colors'><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="" target="_blank" rel="noreferrer" className='text-white/70 md:text-white/40 md:hover:text-white transition-colors'><i className="fa-brands fa-github"></i></a>
          <a href="" target="_blank" rel="noreferrer" className='text-white/70 md:text-white/40 md:hover:text-white transition-colors'><i className="fa-brands fa-instagram"></i></a>
          <a href="" target="_blank" rel="noreferrer" className='text-white/70 md:text-white/40 md:hover:text-white transition-colors'><i className="fa-solid fa-envelope"></i></a>
        </div>

        <div>
          <h1 className='text-xs md:hidden bg-[#1B1A1A] mb-2 font-medium border border-dashed border-white/15 rounded-full p-1 px-3 w-fit'>About Task</h1>
          <p className='text-white/50 text-xs leading-4'>
            For this task, I picked 3 everyday Indian businesses that still run on registers
            and Excel —{' '}
            <span className='text-white/90 font-medium'>Gym & Fitness Management</span>,{' '}
            <span className='text-white/90 font-medium'>Car & Bike Service Center</span>, and{' '}
            <span className='text-white/90 font-medium'>Pharmacy & Medical Store</span> — and designed
            software solutions for each. Every use case includes a problem statement,
            target users, key features, business value, and a fully interactive wireframe of 6 core screens.
          </p>
        </div>

        <div>
          <h1 className='text-xs md:hidden bg-[#1B1A1A] mb-2 font-medium border border-dashed border-white/15 rounded-full p-1 px-3 w-fit'>How it's built</h1>
          <p className='text-white/50 text-xs leading-4'>
            Built with React + Vite + Tailwind CSS, structured as a multi-page app with React Router.
            Each use case shares the same reusable layout — only the data and interactive
            wireframe screens change per business.
          </p>
        </div>

        <div className='flex gap-3 mt-2'>
          <a href='/uc-01' className='px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold transition-colors'>
            View Use Cases →
          </a>
        </div>
      </div>

    </div>
  )
}