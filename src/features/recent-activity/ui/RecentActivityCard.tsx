import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { getRecentActivities } from "../api/handlers";
import type { RecentActivities } from "../model/types";

export const RecentActivityCard = () => {
    const [activities, setActivities] = useState<RecentActivities>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        const fetchActivities = async () => {
            try {
                if (!isCancelled) {
                    setLoading(true);
                }
                const data = await getRecentActivities();
                if (isCancelled) {
                    return;
                }
                setActivities(data);
            } catch (err) {
                if (!isCancelled) {
                    setError(err instanceof Error ? err.message : "Failed to load activities");
                }
            } finally {
                if (!isCancelled) {
                    setLoading(false);
                }
            }
        };

        fetchActivities();

        return () => {
            isCancelled = true;
        };
    }, []);

    if (loading) {
        return (
            <Card className="h-full">
                <CardHeader className="border-b pb-4 px-6">
                    <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center min-h-[200px]">
                    <Loader2 className="size-8 animate-spin text-blue-600" />
                </CardContent>
            </Card>
        );
    }

    if (error) {
        return (
            <Card className="h-full">
                <CardHeader className="border-b pb-4 px-6">
                    <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center min-h-[200px]">
                    <p className="text-sm text-red-500">{error}</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="h-full">
            <CardHeader className="border-b pb-4 px-6">
                <CardTitle className="text-lg font-bold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="px-6 py-4">
                <div className="space-y-6">
                    {activities.map((activity, index) => (
                        <div key={index} className="flex flex-col gap-1 border-b border-slate-50 last:border-0 pb-4 last:pb-0">
                            <span className="text-sm font-medium text-slate-800">{activity.title}</span>
                            <span className="text-xs text-slate-400 font-medium">{activity.date}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
