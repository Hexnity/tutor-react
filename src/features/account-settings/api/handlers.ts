import type { AccountSettings } from '../model/types';

const ACCOUNT_SETTINGS_NETWORK_DELAY_MS =
    process.env.NODE_ENV === 'development' ? 400 : 0;

export const getAccountSettings = async (): Promise<AccountSettings> => {
    // Optional simulated network delay (development only to avoid slowing tests/production)
    if (ACCOUNT_SETTINGS_NETWORK_DELAY_MS > 0) {
        await new Promise(resolve => setTimeout(resolve, ACCOUNT_SETTINGS_NETWORK_DELAY_MS));
    }

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
