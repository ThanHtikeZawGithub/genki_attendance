import { Button } from '@/components/ui/button'
import React from 'react'

const MonthlyBoard = () => {
  return (
    <div>
    <div className='relative bg-card border border-border rounded-lg p-8 h-[360px]'>
      <h2>Monthly Board</h2>
      <div>
        <p>1.late 30 mins to check in at 11:20PM</p>
        <p>2.reported to day off at 23.11.2023</p>
        <p>3.reported to half-day off at 25.11.2023</p>
        <p>4.leave 1hr early at 27.11.2023</p>
      </div>
      <Button
      className='absolute bottom-2 right-2'
      >Details</Button>
    </div>
    </div>
  )
}

export default MonthlyBoard