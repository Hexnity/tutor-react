import { useEffect, useState } from "react";
import {
    Phone,
    Globe,
    Loader2,
    Save,
    X,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { getUserProfile, updateUserProfile } from "../api/handlers";
import type { UserProfile } from "../model/types";

export const UserProfileCard = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState<Partial<UserProfile>>({});

    useEffect(() => {
        let cancelled = false;

        const fetchProfile = async () => {
            try {
                if (!cancelled) {
                    setLoading(true);
                }
                const data = await getUserProfile();
                if (!cancelled) {
                    setProfile(data);
                    setEditedProfile(data || {});
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : 'Failed to load profile');
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        fetchProfile();

        return () => {
            cancelled = true;
        };
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedProfile(profile || {});
    };

    const handleSave = async () => {
        try {
            setSaving(true);
            await updateUserProfile(editedProfile);
            setProfile({ ...profile, ...editedProfile } as UserProfile);
            setIsEditing(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to save profile');
        } finally {
            setSaving(false);
        }
    };

    const handleInputChange = (field: keyof UserProfile, value: string) => {
        setEditedProfile(prev => ({ ...prev, [field]: value }));
    };

    if (loading) {
        return (
            <Card className="overflow-hidden">
                <CardContent className="pt-8 flex flex-col items-center justify-center min-h-[400px]">
                    <Loader2 className="size-8 animate-spin text-blue-600" />
                    <p className="mt-4 text-sm text-slate-500">Loading profile...</p>
                </CardContent>
            </Card>
        );
    }

    if (error || !profile) {
        return (
            <Card className="overflow-hidden">
                <CardContent className="pt-8 flex flex-col items-center justify-center min-h-[400px]">
                    <p className="text-sm text-red-500">{error || 'Failed to load profile'}</p>
                </CardContent>
            </Card>
        );
    }

    const initials = profile.full_name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <Card className="overflow-hidden">
            <CardContent className="pt-8 flex flex-col items-center text-center">
                <Avatar className="size-24 mb-4 ring-4 ring-slate-50">
                    <AvatarImage src={isEditing ? editedProfile.avatar_url : profile.avatar_url} alt="profile pic" />
                    <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>

                {isEditing ? (
                    <div className="w-full space-y-4 mb-6">
                        <div className="space-y-1 text-left">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Full Name</label>
                            <Input
                                value={editedProfile.full_name || ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('full_name', e.target.value)}
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="space-y-1 text-left">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Mobile</label>
                            <Input
                                value={editedProfile.mobile || ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('mobile', e.target.value)}
                                placeholder="Mobile"
                            />
                        </div>
                        <div className="space-y-1 text-left">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Website</label>
                            <Input
                                value={editedProfile.website || ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('website', e.target.value)}
                                placeholder="Website"
                            />
                        </div>
                        <div className="space-y-1 text-left">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Avatar URL</label>
                            <Input
                                value={editedProfile.avatar_url || ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('avatar_url', e.target.value)}
                                placeholder="Avatar URL"
                            />
                        </div>
                        <div className="space-y-1 text-left">
                            <label className="text-xs font-semibold text-slate-500 uppercase">Bio</label>
                            <Textarea
                                value={editedProfile.bio || ''}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('bio', e.target.value)}
                                placeholder="Tell us about yourself"
                                className="resize-none"
                            />
                        </div>
                        <div className="flex gap-2 pt-2">
                            <Button
                                onClick={handleSave}
                                disabled={saving}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                            >
                                {saving ? <Loader2 className="size-4 animate-spin mr-2" /> : <Save className="size-4 mr-2" />}
                                Save
                            </Button>
                            <Button
                                variant="outline"
                                onClick={handleCancel}
                                disabled={saving}
                                className="flex-1"
                            >
                                <X className="size-4 mr-2" />
                                Cancel
                            </Button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="space-y-1 mb-6">
                            <h2 className="text-xl font-bold text-slate-900">{profile.full_name}</h2>
                            <p className="text-sm text-slate-500 font-medium">Member since {new Date(profile.updated_at || '').toLocaleDateString()}</p>
                        </div>

                        <div className="w-full h-px bg-slate-100 mb-6" />

                        <div className="w-full space-y-3 mb-6">
                            <DetailRow icon={<Phone />} label={profile.mobile} />
                            {profile.website && <DetailRow icon={<Globe />} label={profile.website} />}
                        </div>

                        <p className="text-sm text-slate-500 text-left leading-relaxed mb-8">
                            {profile.bio}
                        </p>

                        <Button
                            onClick={handleEdit}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-xl shadow-sm"
                        >
                            Edit Profile
                        </Button>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

const DetailRow = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <div className="flex items-center gap-3 text-sm text-slate-600">
        <div className="size-4 text-slate-400" aria-hidden="true">
            {icon}
        </div>
        <span>{label}</span>
    </div>
);
