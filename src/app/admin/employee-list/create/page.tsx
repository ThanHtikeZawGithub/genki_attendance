import Breadcrumbs from "@/components/BreadCrumbs";
import CreateEmployeeForm from "@/components/admin/employeeList/CreateEmployee";

export default async function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Employee List', href: '/admin/employee-list'},
                    {label: 'Create Employee', href: '/admin/employee-list/create', active:true,}
                ]}
            />
            <CreateEmployeeForm />
        </main>
    )
}