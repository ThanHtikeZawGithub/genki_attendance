"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"


const DetailsCalendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="bg-card flex flex-col border border-border rounded-lg space-y-4 p-8">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      />
      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-green-500"/>
          <p>on-site</p>
        </div>
        <div className="flex items-center justify-center">
        <div className="h-4 w-4 rounded-full bg-yellow-500"/>
        <p>WFH</p>
        </div>
        <div className="flex items-center justify-center">
        <div className="h-4 w-4 rounded-full bg-primary"/>
        <p>Days off</p>
        </div>
      </div>
      <Button>Edit</Button>
    </div>
  )
}

export default DetailsCalendar
