
import React from 'react'
import { ColumnDef } from '@tanstack/react-table';
import DataTable from '@/components/Table';

type Employee = {
  id:string,
  name: string,
  status: 'active' | 'break' | 'off',
  department:string,
  workStatus: 'On-Site' | 'WFH',
  todayRecord: string,
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "id",
    header: "No.",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "department",
    header: "Department",
  },
  {
    accessorKey: "workStatus",
    header: "Work Status",
  },
  {
    accessorKey: "todayRecord",
    header: "Today Record",
  },
]

async function getData(): Promise<Employee[]> {
  return [
    {
      id: '1',
      name: 'Tun Tun',
      status: 'active',
      department: 'Sales Team',
      workStatus: "On-Site",
      todayRecord: 'late 30 mins'
  },
  {
      id: '2',
      name: 'Mg Mg',
      status: 'break',
      department: 'Development Team',
      workStatus: 'WFH',
      todayRecord: ''
  },
  {
      id: '3',
      name: 'Aung Aung',
      status: 'off',
      department: 'Myanmar Team',
      workStatus: 'On-Site',
      todayRecord: ''
  },
    {
      id: '1',
      name: 'Tun Tun',
      status: 'active',
      department: 'Sales Team',
      workStatus: "On-Site",
      todayRecord: 'late 30 mins'
  },
  {
      id: '2',
      name: 'Mg Mg',
      status: 'break',
      department: 'Development Team',
      workStatus: 'WFH',
      todayRecord: ''
  },
  {
      id: '3',
      name: 'Aung Aung',
      status: 'off',
      department: 'Myanmar Team',
      workStatus: 'On-Site',
      todayRecord: ''
  },
    {
      id: '1',
      name: 'Tun Tun',
      status: 'active',
      department: 'Sales Team',
      workStatus: "On-Site",
      todayRecord: 'late 30 mins'
  },
  {
      id: '2',
      name: 'Mg Mg',
      status: 'break',
      department: 'Development Team',
      workStatus: 'WFH',
      todayRecord: ''
  },
  {
      id: '3',
      name: 'Aung Aung',
      status: 'off',
      department: 'Myanmar Team',
      workStatus: 'On-Site',
      todayRecord: ''
  },
  {
      id: '2',
      name: 'Mg Mg',
      status: 'break',
      department: 'Development Team',
      workStatus: 'WFH',
      todayRecord: ''
  },
  {
      id: '3',
      name: 'Aung Aung',
      status: 'off',
      department: 'Myanmar Team',
      workStatus: 'On-Site',
      todayRecord: ''
  },
  ]
}


const EmployeeTable = async () => {
  const data = await getData();
  return (
  <div className="mx-auto w-full">
    <DataTable columns={columns} data={data} />
  </div>
  )
}

export default EmployeeTable
