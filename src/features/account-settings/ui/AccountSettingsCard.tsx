import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export const AccountSettingsCard = () => (
    <Card>
        <CardHeader className="border-b pb-4 px-6">
            <CardTitle className="text-lg font-bold">Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <section className="px-6 py-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-4">General</h3>
                <div className="space-y-4">
                    <SettingItem label="Language" value="English" />
                    <div className="h-px bg-slate-50" />
                    <SettingItem label="Timezone" value="UTC-5 (Eastern Time)" />
                    <div className="h-px bg-slate-50" />
                    <SettingItem label="Default View" value="Dashboard" />
                </div>
            </section>

            <section className="px-6 py-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-4">Notifications</h3>
                <div className="space-y-4">
                    <SettingItem label="Email Notifications" description="Receive updates via email." value="On" />
                    <div className="h-px bg-slate-50" />
                    <SettingItem label="Push Notifications" description="Receive mobile alerts." value="Off" />
                    <div className="h-px bg-slate-50" />
                    <SettingItem label="SMS Alerts" description="Receive critical alerts via SMS." value="Off" />
                </div>
            </section>
        </CardContent>
    </Card>
);

const SettingItem = ({ label, description, value }: { label: string; description?: string; value: string }) => (
    <div className="flex items-center justify-between group cursor-pointer">
        <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">{label}</span>
            {description && <span className="text-xs text-slate-400 mt-0.5">{description}</span>}
        </div>
        <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500 font-medium">{value}</span>
            <ChevronRight className="size-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
        </div>
    </div>
);
