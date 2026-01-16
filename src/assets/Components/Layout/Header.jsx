import { Menu, Search } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-b
        border-slate-200/50 dark:border-slate-700/50 px-6 py-4'>
            <div className="flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 
                    dark:hover:bg-slate-800 transition-colors'>
                        <Menu className='w-5 h-5' />
                    </button>
                    <div className='hidden md:block'>
                        <h1 className='text-2xl font-bold text-slate-800 dark:text-white'>
                            Dashboard
                        </h1>
                        <p>Welcome back, Admin! here's what's happening today</p>
                    </div>
                </div>
                {/* Center */}
                <div className="flex-1 max-w-md mx-8 ">
                    <div className='relateive'>
                        <Search className='w-4 h-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
