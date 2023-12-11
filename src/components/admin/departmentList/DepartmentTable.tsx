
import React from 'react'
import { ColumnDef } from '@tanstack/react-table';
import DataTable from '@/components/Table';

type Department = {
  id:string,
  name: string,
  totalMembers: number,
  attendedMembers: number,
}

export const columns: ColumnDef<Department>[] = [
  {
    accessorKey: "id",
    header: "No.",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "totalMembers",
    header: "Total Members",
  },
  {
    accessorKey: "attendedMembers",
    header: "Attended Members",
  }
]

async function getData(): Promise<Department[]> {
  return [
    {
      id: '1',
      name: 'Sales Team',
      totalMembers: 10,
      attendedMembers: 8,
  },
  {
      id: '2',
      name: 'Development Team',
      totalMembers: 10,
      attendedMembers: 9,
  },
  {
      id: '3',
      name: 'Myanmar Team',
      totalMembers: 10,
      attendedMembers: 10,
  },
  ]
}


const EmployeeTable = async () => {
  const data = await getData();
  return (
  <div className="container mx-auto py-10">
    <DataTable columns={columns} data={data} />
  </div>
  )
}

export default EmployeeTable
