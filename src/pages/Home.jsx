import React from 'react'

export default function Home() {
  return (
    <div className='w-full h-screen border border-white/14 rounded-2xl px-6 pt-18 md:py-20 flex flex-col items-center overflow-hidden overflow-y-scroll text-white'>

      <div className='md:max-w-2xl flex-col gap-4 md:gap-8 flex'>

        <div className='flex items-center gap-3 animate-fade-up opacity-0' style={{ animationDelay: '0ms' }}>
          <div className='w-20 h-20 border border-white/20 rounded-full shrink-0 flex items-center justify-center overflow-hidden'>
            <img src="/me.jpg" className='w-full h-full object-cover rounded-full' />
          </div>
          <div>
            <h1 className='text-xl font-semibold tracking-tight leading-6 md:text-2xl md:leading-normal'>Yash Singh Bisht</h1>
            <p className='text-white/50 text-xs md:text-sm md:leading-normal'>React · ReactNative</p>
          </div>
        </div>

        <div>
          <p className='text-white/50 text-xs leading-4 animate-fade-up opacity-0 md:text-sm md:leading-normal' style={{ animationDelay: '100ms' }}>
            BCA student at IITM — interning at Talking Crooks IT Pvt. Ltd., currently working on wireframes and software use case documentation for Indian small businesses.
          </p>

          <div className='flex items-center gap-2.5 animate-fade-up opacity-0 mt-2' style={{ animationDelay: '200ms' }}>
            <a href="https://www.linkedin.com/in/yashsinghbisht" target="_blank" rel="noreferrer" className='text-white/70 md:text-white/40 md:hover:text-white transition-colors'><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/YASHSINGHBISHT37" target="_blank" rel="noreferrer" className='text-white/70 md:text-white/40 md:hover:text-white transition-colors'><i className="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/thunderbeast37/" target="_blank" rel="noreferrer" className='text-white/70 md:text-white/40 md:hover:text-white transition-colors'><i className="fa-brands fa-instagram"></i></a>
            <a href="mailto:yashsinghbisht37@gmail.com" target="_blank" rel="noreferrer" className='text-white/70 md:text-white/40 md:hover:text-white transition-colors'><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>

        <div className='animate-fade-up opacity-0' style={{ animationDelay: '300ms' }}>
          <h1 className='text-xs md:hidden bg-[#1B1A1A] mb-2 font-medium border border-dashed border-white/15 rounded-full p-1 px-3 w-fit'>About the Task</h1>
          <h1 className='text-md font-semibold mb-1 hidden md:block'>About the Task</h1>
          <p className='text-white/50 text-xs leading-4 md:text-sm md:leading-normal'>
            Task 2 of my internship at Talking Crooks IT Pvt. Ltd. — research and document software
            solutions for Indian small businesses that still rely on manual processes.
            The goal was to identify real problems, define target users, and present a clear
            product vision with interactive wireframes.
          </p>
        </div>

        <div className='animate-fade-up opacity-0' style={{ animationDelay: '400ms' }}>
          <h1 className='text-xs md:hidden bg-[#1B1A1A] mb-2 font-medium border border-dashed border-white/15 rounded-full p-1 px-3 w-fit'>What I Did</h1>
          <h1 className='text-md font-semibold mb-1 hidden md:block '>What I Did</h1>
          <p className='text-white/50 text-xs leading-4 md:text-sm md:leading-normal'>
            Picked 3 everyday Indian businesses —{' '}
            <span className='text-white/90 font-medium'>Gym & Fitness Management</span>,{' '}
            <span className='text-white/90 font-medium'>Car & Bike Service Center</span>, and{' '}
            <span className='text-white/90 font-medium'>Pharmacy & Medical Store</span> — and designed
            software solutions for each. Every use case includes a problem statement,
            target users, key features, business value, and a fully interactive wireframe of 6 core screens.
          </p>
        </div>

        <div className='animate-fade-up opacity-0' style={{ animationDelay: '500ms' }}>
          <h1 className='text-xs md:hidden bg-[#1B1A1A] mb-2 font-medium border border-dashed border-white/15 rounded-full p-1 px-3 w-fit'>How it's built</h1>
          <h1 className='text-md font-semibold mb-1 hidden md:block'>How it's built</h1>
          <p className='text-white/50 text-xs leading-4 md:text-sm md:leading-normal'>
            Built with React + Vite + Tailwind CSS, structured as a multi-page app with React Router.
            Each use case shares the same reusable layout — only the data and interactive
            wireframe screens change per business.
          </p>
        </div>

        <div className='flex gap-3 mt-2 animate-fade-up opacity-0' style={{ animationDelay: '600ms' }}>
          <a href='/uc-01' className='px-3 py-1 rounded-full text-sm font-semibold transition-colors border border-white/30 border-dashed bg-white/5 flex items-center gap-1'>
            View Use Cases
            <i className="ph ph-arrow-right"></i>
          </a>
        </div>

      </div>
    </div>
  )
}