import React from 'react'
import {Form} from "../components/Form"
import { Sidebar } from '../components/Sidebar'
export const SettingsPage = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar/>
      <Form/>
    </div>
  )
}

