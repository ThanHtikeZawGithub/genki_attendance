import React from 'react'

const DailyBoard = () => {
  return (
    <div className='flex flex-col space-y-12'>
      <div className='bg-card border border-border rounded-lg p-8'>
        <h2>Daily Board</h2>
        <div>
        <p>1. reported to late 30 mins</p>
        <p>2. reported to go out of 1 hour</p>
        <p>3. reported to early off for 2 hour</p>
        </div>
      </div>
    </div>
  )
}

export default DailyBoard