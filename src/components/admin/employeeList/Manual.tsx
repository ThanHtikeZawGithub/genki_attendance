'use client'
import Image from 'next/image'
import React from 'react'

const Manual = () => {
  return (
    <div className='flex flex-col border border-border rounded-md space-y-3 p-4 items-center justify-center'>
        <div className='flex items-center justify-start space-x-4 w-full '>
            <div>
                <Image 
                src={'/assets/active-icon-employee.png'}
                alt='active'
                height={20}
                width={19}
                />
            </div>
            <p className='font-poppin text-sm font-medium'>Active</p>
        </div>
        <div className='flex items-center justify-start space-x-4 w-full'>
            <div>
                <Image 
                src={'/assets/breakTime-icon-employee.png'}
                alt='break time'
                height={20}
                width={19}
                />
            </div>
            <p className='font-poppin text-sm font-medium'>Break time</p>
        </div>
        <div className='flex items-center justify-start space-x-4 w-full'>
            <div>
                <Image 
                src={'/assets/off-icon-employee.png'}
                alt='day off'
                height={20}
                width={19}
                />
            </div>
            <p className='font-poppin text-sm font-medium'>Day off</p>
        </div>
    </div>
  )
}

export default Manual