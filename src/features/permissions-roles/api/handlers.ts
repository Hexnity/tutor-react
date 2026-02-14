import type { PermissionsRoles } from '../model/types';


export const getPermissionsRoles = async (): Promise<PermissionsRoles> => {
    await new Promise(resolve => setTimeout(resolve, 450));

    return [
        {
            name: 'Administrator',
            permissions: ['Full Access', 'User Management'],
        },
        {
            name: 'Data Analyst',
            permissions: ['View Reports', 'Create Dashboards'],
        },
        {
            name: 'Support Agent',
            permissions: ['View User Data', 'Reset Passwords'],
        },
    ];
};
