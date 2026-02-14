import type { RecentActivities } from '../model/types';


export const getRecentActivities = async (): Promise<RecentActivities> => {
    await new Promise(resolve => setTimeout(resolve, 350));

    return [
        { title: 'Updated profile information', date: '2024-07-29 10:30 AM' },
        { title: 'Logged in from new device', date: '2024-07-28 09:15 PM' },
        { title: 'Changed password', date: '2024-07-25 02:00 PM' },
        { title: 'Accessed sales report', date: '2024-07-24 11:00 AM' },
    ];
};
