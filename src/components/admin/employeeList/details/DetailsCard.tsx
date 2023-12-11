import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MonthlyBoard from "./MonthlyBoard";
import DetailsCalendar from "./DetailsCalendar";

const employeeAbout = {
  name: "Than Htike Zaw",
  position: "Full stack developer",
  joinedDate: "1.5.2023",
  employeedMonths: 7,
  department: "Myanmar Team",
  email: "blablabla@gmail.com",
  phoneNumber: "09-123456789",
};

const cardItem = [
    {
        caption: 'Salary',
        item: 700000
    },
    {
        caption: 'Leave Days/Month',
        item: 1
    },
    {
        caption: 'Total Working Hours',
        item: '80 hours'
    },
    {
        caption: 'Work Status',
        item: 'WFH'
    },
]

const DetailsCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-7">
      <div className="flex items-center justify-between space-x-4 p-4 w-full bg-card border rounded-2xl border-border">
        <div className="flex items-center justify-center">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/125514456?s=400&u=ad3cf474d8c17f3060f1bbcef44b22f685a04692&v=4"
              className="w-24 h-24"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex w-2/5 flex-col items-center justify-center space-y-5">
          <div className="flex items-start justify-center space-x-9 w-full">
            <p className="flex-grow">Name</p>
            <p className="">{employeeAbout.name}</p>
          </div>
          <div className="flex items-center justify-start space-x-9 w-full">
            <p className="flex-grow">Position</p>
            <p className="">{employeeAbout.position}</p>
          </div>
          <div className="flex items-center justify-start space-x-9 w-full">
            <p className="flex-grow">Joined Date</p>
            <p className="">{employeeAbout.joinedDate}</p>
          </div>
          <div className="flex items-center justify-start space-x-9 w-full">
            <p className="flex-grow">employeed Months</p>
            <p className="">{employeeAbout.employeedMonths}</p>
          </div>
        </div>
        <span className="h-36 w-px bg-gray-200 aria-hidden='true'" />
        <div className="flex w-2/5 flex-col space-y-5 h-full">
          <div className="flex items-center justify-start space-x-9 w-full">
            <p className="flex-grow">Department</p>
            <p>{employeeAbout.department}</p>
          </div>
          <div className="flex items-center justify-start space-x-9 w-full">
            <p className="flex-grow">Email</p>
            <p>{employeeAbout.email}</p>
          </div>
          <div className="flex items-center justify-start space-x-9 w-full">
            <p className="flex-grow">Phone Number</p>
            <p>{employeeAbout.phoneNumber}</p>
          </div>
          <Button />
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        {cardItem.map((card) => (
            <div 
            key={card.caption}
            className="bg-card flex flex-col items-center justify-center gap-4 border border-border rounded-lg px-12 py-4"
            >
                <p className="text-base">{card.caption}</p>
                <p className="text-2xl">{card.item}</p>          
            </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
            <MonthlyBoard />
            <DetailsCalendar />
            <div>Dailyboard</div>
      </div>
    </div>
  );
};

export default DetailsCard;
