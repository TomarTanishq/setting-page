import React from 'react'
import { useState } from 'react';
import { SettingsHeader } from './SettingsHeader'
import InboxIcon from '../icons/inbox.png'
import UploadIcon from "../icons/upload.png"
import TickIcon from "../icons/tick.png"
import PhoneIcon from "../icons/telephone.png"
import InfoIcon from "../icons/info.png"
import ClockIcon from "../icons/clock.png"
import ClipIcon from "../icons/clip.png"
import UlIcon from "../icons/ul.png"
import OlIcon from "../icons/ol.png"

export const Form = () => {

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className='basis-8/10 flex flex-col'>
            <div>
                <SettingsHeader />
            </div>

            <div className='ml-8'>

                {/* Form Header */}
                <div className='flex flex-row  border-b-1 border-b-gray-300 pb-5'>
                    <div className='flex flex-col basis-4/5'>
                        <h1 className='text-xl font-semibold'>Personal Info</h1>
                        <p className='text-gray-500 text-sm'>Update your photo and personal details here.</p>
                    </div>
                    <div className='basis-1/5'>
                        <button className='border-1 border-gray-300 px-4 py-1.5 rounded-md text-gray-600 mr-3'>Cancel</button>
                        <button className='border-1 border-gray-300 px-4 py-1.5 rounded-md bg-green-600 text-white'>Save</button>
                    </div>
                </div>

                {/* Name */}
                <div className='mt-5 flex gap-72 border-b-1 border-gray-300 pb-5'>
                    <div className=''>
                        <label htmlFor="">Name</label>
                        <label className='text-green-600 ml-1'>*</label>
                    </div>
                    <div className=' flex gap-5'>
                        <input type="text" placeholder='Clara' className='p-2 border-1 border-gray-300 rounded-lg shadow w-58' />
                        <input type="text" placeholder='Smith' className='p-2 border-1 border-gray-300 rounded-lg shadow w-58' />
                    </div>
                </div>

                {/* Email */}
                <div className='mt-5 flex gap-58 border-b-1 border-gray-300 pb-5'>
                    <div className=''>
                        <label className=''>Email Address</label>
                        <label className='text-green-600 ml-1'>*</label>
                    </div>

                    <div className='flex gap-10'>
                        <div className='relative'>
                            <input type="text" placeholder='clara@bizclues.com' className='p-2 pl-10 border-2 border-green-500 rounded-lg shadow w-121' />
                            <img src={InboxIcon} className='absolute w-5 h-5 left-3 top-5.5 transform -translate-y-1/2 filter brightness-0 saturate-100 opacity-60' />
                        </div>
                        <button className='bg-green-700 text-white px-4 rounded-lg'>Verify</button>
                    </div>
                </div>

                {/* Image Section */}
                <div className='mt-5 flex gap-26 border-b-1 border-gray-300 pb-5'>
                    <div className='flex flex-col'>
                        <div>
                            <label>Your Photo</label>
                            <label className='text-green-600 ml-1'>*</label>
                        </div>
                        <p className='text-sm text-gray-500'>This will be displayed on your profile.</p>

                    </div>

                    <div className="flex gap-4">
                        <div className="w-17 h-17 border-1 border-gray-200 rounded-full overflow-hidden">
                            {preview && <img src={preview} className="w-full h-full object-cover" />}
                        </div>
                        <div className='flex flex-col items-center border-2 border-green-500 px-24 py-5 rounded-xl cursor-pointer'
                            onClick={() => document.getElementById('file-upload').click()}>
                            <div className='border-1 border-gray-200 w-8 h-8 p-1 rounded-md shadow-md flex items-center justify-center mb-2'>
                                <img src={UploadIcon} className='h-5 w-5' />
                            </div>
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                            <p className="text-center mb-2 text-sm text-gray-400">
                                <span className="font-semibold text-green-600">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-center text-xs text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                    </div>
                </div>

                {/* New Password */}
                <div className='mt-5 flex gap-30 border-b-1 border-gray-300 pb-5'>
                    <div className='flex flex-col w-56'>
                        <div>
                            <label>Change Password</label>
                        </div>
                        <p className='text-sm text-gray-500'>Your new password must be different to previously used passwords</p>
                    </div>

                    <div className="flex flex-col">
                        <label className='text-sm text-gray-500 mb-1 font-semibold'>Old Password</label>
                        <input type="password" className='border-1 border-gray-300 px-10 py-1.5 focus:outline-none rounded-md shadow text-gray-500 mb-5' />
                        <label className='text-sm text-gray-500 mb-1 font-semibold'>New Password</label>
                        <input type="password" className='border-1 border-gray-300 px-10 py-1.5 focus:outline-none rounded-md shadow text-gray-500' />

                        <div className='flex flex-row  mt-5'>
                            <img src={TickIcon} className='w-3.5 h-3.5 mr-2' />
                            <p className='text-xs text-gray-500'>Must be atleast 8 characters</p>
                        </div>
                        <div className='flex flex-row  mt-2'>
                            <img src={TickIcon} className='w-3.5 h-3.5 mr-2' />
                            <p className='text-xs text-gray-500'>Must contain one special character</p>
                        </div>
                        <button className='bg-green-700 py-1.5 text-white mt-2 rounded-md'>Reset Password</button>
                    </div>
                </div>

                {/* Role */}
                <div className='mt-5 flex gap-30 border-b-1 border-gray-300 pb-5'>
                    <div className='w-56'>
                        <label>Role</label>
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            placeholder='Admin'
                            className='p-2 border-1 border-gray-300 rounded-lg shadow focus:outline-none w-121' />
                        <p className='w-115 text-sm text-gray-400 mt-2'>Please note the role can be changed through <span className='font-bold'>Settings&gt;Team&gt;Edit Roles, <span className='border-b-1'>click here</span></span> to change the role.</p>
                    </div>
                </div>

                {/* Country */}
                <div className='mt-5 flex gap-68 border-b-1 border-gray-300 pb-5'>
                    <div>
                        <label>Country</label>
                        <label className='text-green-600 ml-1'>*</label>
                    </div>
                    <div>
                        <select className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-none w-122 shadow p-2.5">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>

                {/* Phone Number */}
                <div className='mt-5 flex gap-54 border-b-1 border-gray-300 pb-5'>
                    <div className=''>
                        <label className=''>Mobile Number</label>
                        <label className='text-green-600 ml-1'>*</label>
                    </div>
                    <div className='flex gap-10'>
                        <div className='relative'>
                            <input type="text" placeholder='+1 (555) 000-0000' className='p-2 pl-10 border-2 border-green-500 rounded-lg shadow w-121' />
                            <img src={PhoneIcon} className='absolute w-5 h-5 left-3 top-5.5 transform -translate-y-1/2 filter brightness-0 saturate-100 opacity-60' />
                        </div>
                        <button className='bg-green-700 text-white px-4 rounded-lg'>Verify</button>
                    </div>
                </div>

                {/* Time Zone */}
                <div className='mt-5 flex gap-61 border-b-1 border-gray-300 pb-5'>
                    <div className='flex items-center relative group'>
                        <label>Time Zone</label>
                        <img src={InfoIcon} className='w-4 h-4 ml-1 cursor-pointer' />

                        {/* Tooltip */}
                        <div className='absolute left-full ml-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded shadow whitespace-nowrap'>
                            Please enter your current timezone
                        </div>
                    </div>

                    <div className='flex gap-10'>
                        <div className='relative'>
                            <img
                                src={ClockIcon}
                                className='absolute w-5 h-5 left-3 top-5.5 transform -translate-y-1/2 filter brightness-0 saturate-100 opacity-60'
                            />
                            <select class="border pl-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-none w-122 shadow p-2.5">
                                <option selected>Choose TimeZone</option>
                                <option value="US">UTC-08:00</option>
                                <option value="CA">UTC-04:30</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Profile Bio */}
                <div className='mt-5 flex gap-29 border-b-1 border-gray-300 pb-5'>
                    <div className='flex flex-col w-56'>
                        <div>
                            <label>Bio</label>
                            <label className='text-green-600 ml-1'>*</label>
                        </div>
                        <p className='text-sm text-gray-500'>Write a short Introduction</p>
                    </div>

                    <div className="flex flex-col">
                        <div className='flex'>
                            <select name="" id="" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-none w-54 shadow p-2.5">
                                <option value="">Regular</option>
                            </select>
                            <div className='ml-5 flex gap-5 mt-1'>
                                <span className='font-bold text-gray-500'>B</span>
                                <span className='font-bold italic text-gray-500'>I</span>
                                <img src={ClipIcon} className='w-4 h-4 mt-1 saturate-100 opacity-65' />
                                <img src={UlIcon} className='w-4 h-4 mt-1 saturate-100 opacity-65' />
                                <img src={OlIcon} className='w-4 h-4 mt-1 saturate-100 opacity-65' />
                            </div>
                        </div>
                        <div className=''>
                            <textarea id="message" rows="4" class="mt-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 " placeholder="I am a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."></textarea>
                            <span className='text-sm text-gray-500'>275 characters left</span>
                        </div>

                    </div>
                </div>

                {/* Submit Footer */}
                <div className='mt-5 flex flex-row-reverse gap-10 mr-24 pb-5'>
                    <button className='bg-green-700 text-white px-4 py-1 rounded-lg cursor-pointer'>Save</button>
                    <button className='text-gray-700 border-1 border-gray-400 px-4 py-1 rounded-lg cursor-pointer'>Cancel</button>
                </div>
            </div>
        </div>
    )
}
