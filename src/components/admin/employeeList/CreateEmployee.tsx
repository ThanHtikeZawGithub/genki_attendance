"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const employeeFormSchema = z.object({
  firstName: z.string().min(3).max(50),
  lastName: z.string().min(2).max(30),
  position: z.string(),
  joinedDate: z.date(),
  department: z.string(),
  departmentRole: z.enum(["leader", "member"]),
  email: z.string().email(),
  phoneNumber: z.string(),
  workStatus: z.enum(["on-site", "WFH"]),
  allowedLeaveDays: z.number(),
  salary: z.string(),
});

const CreateEmployeeForm = () => {
  const form = useForm<z.infer<typeof employeeFormSchema>>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      position: "",
      joinedDate: new Date(),
      department: "",
      departmentRole: "member",
      email: "",
      phoneNumber: "",
      workStatus: "on-site",
      allowedLeaveDays: 1,
      salary: "",
    },
  });
  const onSubmit = (values: z.infer<typeof employeeFormSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-lg w-full">
        <div className="flex items-center justify-start gap-9 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-start gap-9 w-full">
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="flex-grow w-4/6">
                <FormLabel>Position</FormLabel>
                <FormControl>
                  <Input placeholder="add position" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="joinedDate"
            render={({ field }) => (
              <FormItem className="w-2/6">
                <FormLabel>Joined Date</FormLabel>
                <FormControl>
                  <DatePicker field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-start gap-9">
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem className="flex-grow w-4/6">
                <FormLabel>Department</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="select department" {...field}/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Sales Team">Sales Team</SelectItem>
                      <SelectItem value="Development Team">Development Team</SelectItem>
                      <SelectItem value="Myanmar Team">Myanmar Team</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name="departmentRole"
            render={({ field }) => (
              <FormItem className="w-2/6">
                <FormLabel>Department Role</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="select role" {...field}/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leader">Leader</SelectItem>
                      <SelectItem value="member">Member</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div >
        <div className="flex items-center justify-start gap-9">
        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-grow w-4/6">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-2/6">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-start gap-2">
        <FormField
            control={form.control}
            name="workStatus"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-sm">Work Status</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="">
                      <SelectValue placeholder="On-site" {...field}/>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="on-site">On-Site</SelectItem>
                      <SelectItem value="WFH">WFH</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
               <FormField
            control={form.control}
            name="allowedLeaveDays"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Allowed Leave Days</FormLabel>
                <FormControl>
                  <Input placeholder="leave days" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
               <FormField
            control={form.control}
            name="salary"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Salary</FormLabel>
                <FormControl>
                  <Input placeholder="salary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Confirm</Button>
      </form>
    </Form>
  );
};

export default CreateEmployeeForm;
