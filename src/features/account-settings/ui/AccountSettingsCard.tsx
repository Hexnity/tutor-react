import { useEffect, useState } from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { getAccountSettings } from "../api/handlers";
import type { AccountSettings, GeneralSetting, NotificationSetting } from "../model/types";

export const AccountSettingsCard = () => {
    const [settings, setSettings] = useState<AccountSettings | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                setLoading(true);
                const data = await getAccountSettings();
                setSettings(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load settings');
            } finally {
                setLoading(false);
            }
        };

        fetchSettings();
    }, []);

    if (loading) {
        return (
            <Card>
                <CardHeader className="border-b pb-4 px-6">
                    <CardTitle className="text-lg font-bold">Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center min-h-[200px]">
                    <Loader2 className="size-8 animate-spin text-blue-600" />
                </CardContent>
            </Card>
        );
    }

    if (error || !settings) {
        return (
            <Card>
                <CardHeader className="border-b pb-4 px-6">
                    <CardTitle className="text-lg font-bold">Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center min-h-[200px]">
                    <p className="text-sm text-red-500">{error || 'Failed to load settings'}</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader className="border-b pb-4 px-6">
                <CardTitle className="text-lg font-bold">Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <section className="px-6 py-4">
                    <h3 className="text-sm font-semibold text-slate-900 mb-4">General</h3>
                    <div className="space-y-4">
                        {settings.general.map((setting, index) => (
                            <div key={index}>
                                <GeneralSettingItem {...setting} />
                                {index < settings.general.length - 1 && <div className="h-px bg-slate-50 mt-4" />}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="px-6 py-4">
                    <h3 className="text-sm font-semibold text-slate-900 mb-4">Notifications</h3>
                    <div className="space-y-4">
                        {settings.notifications.map((setting, index) => (
                            <div key={index}>
                                <NotificationSettingItem {...setting} />
                                {index < settings.notifications.length - 1 && <div className="h-px bg-slate-50 mt-4" />}
                            </div>
                        ))}
                    </div>
                </section>
            </CardContent>
        </Card>
    );
};

const GeneralSettingItem = ({ label, value }: GeneralSetting) => (
    <div className="flex items-center justify-between group cursor-pointer">
        <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">{label}</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500 font-medium">{value}</span>
            <ChevronRight className="size-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
        </div>
    </div>
);

const NotificationSettingItem = ({ label, description, value }: NotificationSetting) => (
    <div className="flex items-center justify-between group cursor-pointer">
        <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">{label}</span>
            <span className="text-xs text-slate-400 mt-0.5">{description}</span>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500 font-medium">{value}</span>
            <ChevronRight className="size-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
        </div>
    </div>
);
