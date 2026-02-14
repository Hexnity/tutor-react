import { useEffect, useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Loader2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { getUserProfile } from "../api/handlers";
import type { UserProfile } from "../model/types";

export const UserProfileCard = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    return (
        <Card className="overflow-hidden">
            <CardContent className="pt-8 flex flex-col items-center text-center">
                <Avatar className="size-24 mb-4 ring-4 ring-slate-50">
                    <AvatarImage src={profile.avatarUrl} alt="profile pic" />
                    <AvatarFallback>{profile.initials}</AvatarFallback>
                </Avatar>

                <div className="space-y-1 mb-6">
                    <h2 className="text-xl font-bold text-slate-900">{profile.name}</h2>
                    <p className="text-sm text-slate-500 font-medium">{profile.role}</p>
                </div>

                <div className="w-full h-px bg-slate-100 mb-6" />

                <div className="w-full space-y-3 mb-6">
                    <DetailRow icon={<Mail />} label={profile.email} />
                    <DetailRow icon={<Phone />} label={profile.phone} />
                    <DetailRow icon={<MapPin />} label={profile.location} />
                </div>

                <p className="text-sm text-slate-500 text-left leading-relaxed mb-8">
                    {profile.bio}
                </p>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-xl shadow-sm">
                    Edit Profile
                </Button>
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
