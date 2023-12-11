import React from 'react'
import { Switch } from "@/components/ui/switch"
import { Input } from '@/components/ui/input'

const OrgSettings = () => {
  return (
    <div className="flex flex-col gap-5 pt-8 pb-2 px-10">
        <div className='grid grid-cols-2'>
            <p>Use location limit settings</p>
            <div>
            <Switch/>
            </div>
        </div>
        <div className='grid grid-cols-2'>
            <p>Enter location in lat and long</p>
            <div className='flex items-center justify-start gap-4'>
            <Input placeholder="9:00" className="h-auto w-20" />
            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            <Input placeholder="9:00" className="h-auto w-20" />
            </div>
        </div>
        <div className='grid grid-cols-2'>
            <p>Allow view profile each other</p>
            <div>
            <Switch/>
            </div>
        </div>
        <div className='grid grid-cols-2'>
            <p>Use department structure</p>
            <div>
                <Switch/>
            </div>
        </div>
    </div>
  )
}

export default OrgSettings