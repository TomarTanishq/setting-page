import React from 'react'
import { GoSearch } from "react-icons/go";
import DashboardIcon from "../icons/dashboard.png"
import ProductIcon from "../icons/product.png"
import CustomerIcon from "../icons/customer.png"
import MarketingIcon from "../icons/marketing.png"
import ReportingIcon from "../icons/reporting.png"
import SettingsIcons from "../icons/settings.png"
import SupportIcons from "../icons/support.png"
import CloseIcon from "../icons/close.png"
import UnfoldIcon from "../icons/unfold.png"
export const Sidebar = () => {

    const tabs = [
        "Dashboard",
        "Product",
        "Customer",
        "Marketing",
        "Reporting"
    ]

    const icons = [
        DashboardIcon,
        ProductIcon,
        CustomerIcon,
        MarketingIcon,
        ReportingIcon
    ]

    return (
        <div className='basis-2/10 flex flex-col p-5 border-x-1 border-gray-300'>
            <div className="size-10 rounded-lg bg-linear-0 from-gray-300 via-gray-100 to-gray-100 to-90%"></div>
            <div className='relative mt-5'>
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
            <nav className='flex flex-col'>
                <div>
                    {tabs.map((tab, index) => (
                        <span
                            key={index}
                            className='mt-5 flex flex-row'>
                            <img src={icons[index]} className='w-6 h-6 mr-3 filter brightness-0 saturate-100 opacity-60' />
                            <h2 className='text-gray-500 '>{tab}</h2>
                        </span>
                    ))}
                </div>
                <div className='mt-56'>
                    <span className='flex flex-row mb-5'>

                        <img src={SettingsIcons} className='w-6 h-6 mr-3 filter brightness-0 saturate-100 opacity-60' />

                        <h2 className='text-gray-500'>Settings</h2>
                    </span>
                    <span className='flex flex-row'>
                        <img src={SupportIcons} className='w-6 h-6 mr-3 filter brightness-0 saturate-100 opacity-60' />

                        <h2 className='text-gray-500'>Support</h2>

                        <div className='ml-20 w-15 border-1 border-gray-300 rounded-xl flex items-center justify-center gap-1 px-2 py-1'>
                            <div className='w-3 h-1 bg-green-500 rounded-full'></div>
                            <h3 className='text-xs'>Online</h3>
                        </div>
                    </span>
                    <div className='bg-gray-50 p-2 mt-10 rounded-md'>
                        <div className='flex flex-row'>
                            <h2 className='font-bold text-gray-700'>Used space</h2>
                            <img src={CloseIcon} className='w-5 h-5 ml-32 filter brightness-0 saturate-100 opacity-50' />
                        </div>

                        <p className='text-gray-500 mt-2'>Your team has used 80% of your available space.Need more?</p>

                        <div className='w-full bg-gray-200 rounded-full h-2 mt-2'>
                            <div className='bg-green-600 h-2 rounded-full w-44'></div>
                        </div>
                        <div className='flex flex-row gap-8 mt-3'>
                            <h2>Dismiss</h2>
                            <h2 className='text-green-600'>Upgrade plan</h2>
                        </div>
                    </div>

                    <div className='border border-gray-300 rounded-xl p-3 mt-3 relative'>
                        <div className='flex items-center gap-3'>
                            <div className='relative'>
                                <div className='w-10 h-10 border-gray-300 border-1 rounded-full flex items-center justify-center text-gray-600 font-semibold text-sm'></div>
                                <span className='top-7 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full'></span>
                            </div>
                            <div>
                                <h2 className='text-gray-900 font-semibold'>Clara Smith</h2>
                                <p className='text-sm text-gray-600'>clara@bizclues.com</p>
                            </div>
                        </div>
                        <img src={UnfoldIcon} className='w-5 h-5 filter brightness-0 saturate-100 opacity-60 absolute top-3 right-3' />
                    </div>

                </div>
            </nav>

        </div>
    )
}
