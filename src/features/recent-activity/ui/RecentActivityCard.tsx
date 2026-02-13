import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export const RecentActivityCard = () => {
    const activities = [
        { title: "Updated profile information", date: "2024-07-29 10:30 AM" },
        { title: "Logged in from new device", date: "2024-07-28 09:15 PM" },
        { title: "Changed password", date: "2024-07-25 02:00 PM" },
        { title: "Accessed sales report", date: "2024-07-24 11:00 AM" },
    ];

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
