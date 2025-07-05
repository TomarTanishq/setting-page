import React from 'react'
import { GoSearch } from "react-icons/go";

export const SettingsHeader = () => {

    const headers = [
        "My details",
        "Company Profile",
        "Appearance",
        "Team",
        "Billing and Plan",
        "Notifications",
        "Integrations"
    ]

    return (
        <div className='basis-8/10 flex flex-col p-8'>
            <div className='flex flex-row'>
                <h1 className='font-bold text-2xl basis-3/4'>Settings</h1>
                <div className='relative basis-1/4'>
                    <input
                        type="text"
                        placeholder='Search'
                        className='w-full py-2 pl-8 pr-2 rounded-lg border-2 border-gray-200 focus:outline-none'
                    />
                    <GoSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600' />
                    <kbd className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-600 border border-gray-300 rounded px-2">
                        ⌘K
                    </kbd>
                </div>
            </div>
            <nav className='flex flex-row mt-5 border-b-1 border-gray-300 pb-3'>
                {headers.map((header, index) => (
                    <span key={index} className={`${index===0 ? 'text-green-600 underline underline-offset-15 decoration-2 mr-9' : 'mr-9 text-gray-500'}`}>
                        {header}
                    </span>
                ))}
            </nav>
            {/* <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"/> */}

        </div >
    )
}

