import Breadcrumbs from "@/components/BreadCrumbs";
import EmployeeDetails from "@/components/admin/employeeList/details/EmployeeDetails";

export default async function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Employee List', href: '/admin/employee-list'},
                    {label: 'Employee Details', href: '/admin/employee-list/details', active:true,}
                ]}
            />
            <EmployeeDetails />
        </main>
    )
}