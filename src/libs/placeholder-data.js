const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'Than Htike Zaw',
        role: 'Admin',
        email: 'user@email.com',
        password: '123456',
      },
];

const employees = [
    {
        id: '1',
        name: 'Tun Tun',
        status: 'active',
        department: 'Sales Team',
        workStatus: 'On-site',
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
        workStatus: 'On-site',
        todayRecord: ''
    },
]

module.exports = {
    users,
    employees
}