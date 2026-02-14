import type { AccountSettings } from '../model/types';


export const getAccountSettings = async (): Promise<AccountSettings> => {
    // Simulate network delay (400 milliseconds = 0.4 seconds)
    await new Promise(resolve => setTimeout(resolve, 400));

    // TODO: Replace with real API call
    // Example: const response = await fetch('/api/settings');

    return {
        // General settings array
        general: [
            { label: 'Language', value: 'English' },
            { label: 'Timezone', value: 'UTC-5 (Eastern Time)' },
            { label: 'Default View', value: 'Dashboard' },
        ],

        // Notification settings array
        notifications: [
            {
                label: 'Email Notifications',
                description: 'Receive updates via email.',
                value: 'On'
            },
            {
                label: 'Push Notifications',
                description: 'Receive mobile alerts.',
                value: 'Off'
            },
            {
                label: 'SMS Alerts',
                description: 'Receive critical alerts via SMS.',
                value: 'Off'
            },
        ],
    };
};
