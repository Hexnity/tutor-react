import type { UserProfile } from '../model/types';

export const getUserProfile = async (): Promise<UserProfile> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
        id: '1',
        name: 'Alex Johnson',
        role: 'Senior Admin & Data Analyst',
        email: 'alex.johnson@example.com',
        phone: '+1 (555) 123-4567',
        location: 'New York, USA',
        bio: 'Passionate about data-driven insights and optimizing operational workflows. I specialize in backend architecture and enjoy contributing to open-source projects in my free time.',
        avatarUrl: '',
        initials: 'AJ',
    };
};
