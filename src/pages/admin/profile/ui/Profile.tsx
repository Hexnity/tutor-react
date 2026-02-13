import { UserProfileCard } from "@/features/user-profileCard";
import { AccountSettingsCard } from "@/features/account-settings";
import { RecentActivityCard } from "@/features/recent-activity";
import { PermissionsRolesCard } from "@/features/permissions-roles";

interface ProfileProps {
    title?: string;
}

export const Profile = ({ title }: ProfileProps) => {
    return (
        <div className="space-y-8">
            {/* --- Header Section --- */}
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    {title || "User Profile"}
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* --- Primary Info (Left Column) --- */}
                <div className="lg:col-span-4 sticky top-24">
                    <UserProfileCard />
                </div>

                {/* --- Settings & Details (Right Column) --- */}
                <div className="lg:col-span-8 space-y-8">
                    <AccountSettingsCard />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <RecentActivityCard />
                        <PermissionsRolesCard />
                    </div>
                </div>
            </div>

            {/* --- Page Footer --- */}
            <footer className="pt-8 pb-4 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-400">
                    © {new Date().getFullYear()} Admin Dashboard. All rights reserved.
                </p>
            </footer>
        </div>
    );
};
