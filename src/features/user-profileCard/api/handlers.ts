import { supabase } from '@/shared/api/supabase';
import type { UserProfile } from '../model/types';

export const getUserProfile = async (): Promise<UserProfile | null> => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return null;

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    if (error) {
        if (error.code === 'PGRST116') {
            return {
                id: user.id,
                full_name: user.user_metadata?.full_name || '',
                bio: '',
                mobile: '',
                avatar_url: user.user_metadata?.avatar_url || '',
                website: '',
            };
        }
        console.error('Error fetching profile:', error);
        throw error;
    }

    return data;
};

export const updateUserProfile = async (profile: Partial<UserProfile>): Promise<void> => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) throw new Error('User not authenticated');

    const { error } = await supabase
        .from('profiles')
        .update({
            ...profile,
            updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

    if (error) {
        console.error('Error updating profile:', error);
        throw error;
    }
};
